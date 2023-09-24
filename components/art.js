import { ProductStyle } from "@/styles/ProductStyle";
import Link from "next/link";

export default function Art({ art }){
    const { name, image, price, slug, artist } = art.attributes;
    return(
        <ProductStyle>
            <Link href={"/art/"+slug}>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            </Link>
            <p>{name}</p>
            <p>Artist: {artist}</p>
            <p>${price}</p>
        </ProductStyle>
    )
}