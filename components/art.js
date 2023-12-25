import Link from "next/link";
import Image from "next/image";

import { ProductStyle } from "@/styles/ProductStyle";

export default function Art({ art }) {
  const { name, image, price, slug, artist } = art;
  return (
    <ProductStyle>
      <Link href={"/art/" + slug}>
        <div style={{ display: "block", width: "100%" }}>
          <Image
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
            src={image}
            alt={slug}
          />
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem 0 0 0",
        }}
      >
        <div>
          <p>{name}</p>
          <p>Artist: {artist}</p>
        </div>
        <p>Price: ${price}</p>
      </div>
    </ProductStyle>
  );
}
