import { useQuery } from "urql";
import { GET_ART_QUERY } from "@/lib/query";
import { useRouter } from "next/router";
import { Buy, DetailsStyle, ProductInfo, Quantity } from "@/styles/ProductDetails";
import{ AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';
import { useStateContext } from "@/lib/context";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export default function ProductDetails(){
    //using ShopContext
    const {increaseQty, decreaseQty, setCartItems, onAdd, setQty, qty } = useStateContext();
    useEffect(() => {
        setQty(1)
    }, []);
    //Fetch slug from graphql
    const {query} = useRouter();
    const [result] = useQuery({query: GET_ART_QUERY, variables: {slug: query.slug}});
    const{data, fetching, error} = result;
  
    //checking if data is fetched yet or if an error occurred
    if(fetching) return <p>Loading...</p>;
    if(error) return <p>Error occurred {error.message}</p>;
    const {name, price, description, image, artist} = data.arts.data[0].attributes;
    const notify = () => {
        toast.success(`${name} added to cart.`, {duration: 1500, icon: "😉"});
    }
    
    return(
        <DetailsStyle>
            <img src={image.data.attributes.formats.small.url} alt={name} />
            <ProductInfo>
                <h3>{name}</h3>
                <p>Artist: {artist}</p>
                <br />
                <h2>${price}</h2>
                <br />
                <p>{description}</p>
                <Quantity>
                    <p>Copies</p>
                    <button><AiFillMinusCircle onClick={decreaseQty}/></button>
                    <p>{qty}</p>
                    <button><AiFillPlusCircle onClick={increaseQty}/></button>
                </Quantity>
            <Buy onClick={() => {
                onAdd(data.arts.data[0].attributes, qty)
                notify()
            } }>Add to cart</Buy>
            </ProductInfo>
        </DetailsStyle>
    )
}