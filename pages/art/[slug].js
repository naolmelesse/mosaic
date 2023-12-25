import Image from "next/image";
import { useRouter } from "next/router";
import {
  Buy,
  DetailsStyle,
  ProductInfo,
  Quantity,
} from "@/styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "@/lib/context";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

import arts from "../../lib/dummy-data.json";

export default function ProductDetails() {
  //using ShopContext
  const { increaseQty, decreaseQty, setCartItems, onAdd, setQty, qty } =
    useStateContext();
  useEffect(() => {
    setQty(1);
  }, []);

  const { query } = useRouter();

  const notify = (name) => {
    toast.success(`${name} added to cart.`, { duration: 1500, icon: "😉" });
  };
  console.log(query.slug);
  return (
    <DetailsStyle>
      {arts
        .filter((art) => {
          return art.slug === query.slug;
        })
        .map((art) => (
          <>
            <Image
              sizes="100vw"
              style={{
                width: "50%",
                height: "auto",
              }}
              width={500}
              height={300}
              src={art.image}
              alt={art.slug}
            />
            <ProductInfo>
              <h3>{art.name}</h3>
              <p>Artist: {art.artist}</p>
              <br />
              <h2>${art.price}</h2>
              <br />
              <p>{art.description}</p>
              <Quantity>
                <p>Copies</p>
                <button>
                  <AiFillMinusCircle onClick={decreaseQty} />
                </button>
                <p>{qty}</p>
                <button>
                  <AiFillPlusCircle onClick={increaseQty} />
                </button>
              </Quantity>
              <Buy
                onClick={() => {
                  onAdd(art, qty);
                  notify(art.name);
                }}
              >
                Add to cart
              </Buy>
            </ProductInfo>
          </>
        ))}
    </DetailsStyle>
  );
}
