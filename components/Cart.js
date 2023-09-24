import { useStateContext } from "@/lib/context";
import { Card, CardInfo, CartStyle, CartWrapper, EmptyStyle, Checkout, Cards } from "@/styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Quantity } from "@/styles/ProductDetails";
import getStripe from "@/lib/getStripe";

// Animartion variants
const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
}

const cards = {
    hidden: { opacity: 1},
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    }
}



export default function Cart(){
    const { cartItems, onAdd, onRemove, totalPrice, setShowCart } = useStateContext();
    //stripe checkout
  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };
    
    return(
        <CartWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCart(false)}
            onClick={() => setShowCart(false)}>
            <CartStyle 
                 initial={{ x: "50%" }}
                 animate={{ x: 0 }}
                 exit={{ x: "50%" }}
                 transition={{ type: "tween" }}
                onClick={(e) => e.stopPropagation()}>
                    { cartItems.length < 1 && (
                        <EmptyStyle
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            >
                            <h1>No items in the cart!</h1>
                            <FaShoppingCart/>
                        </EmptyStyle>
                    )}
                        <Cards layout variants={cards} initial="hidden" animate="show"
                        >
                    {cartItems.length >= 1 && (
                        cartItems.map((item) => {
                            return(
                                    <Card
                                     
                                    layout 
                                        variants={card}
                                        key={item.slug}>
                                    <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                                    <CardInfo>
                                        <h3>{item.title}</h3>
                                        <h3>${item.price}</h3>
                                        <Quantity>
                                            <span>Copies</span>
                                            <button>
                                            <AiFillMinusCircle onClick={() => onRemove(item)}/>
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button>
                                            <AiFillPlusCircle onClick={() => onAdd(item, 1)}/>
                                            </button>
                                        </Quantity>
                                    </CardInfo>
                                    </Card>
                            )   
                        })
                        )}
                        </Cards>
                    {cartItems.length >= 1 && (
                        <Checkout layout>
                            <h3>Subtotal: ${totalPrice}</h3>
                            <button onClick={handleCheckout}>Purchase</button>
                        </Checkout>
                    )}
            </CartStyle>
        </CartWrapper>

    )
}