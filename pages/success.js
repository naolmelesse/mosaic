import { useRouter } from "next/router";
import styled from "styled-components";
const { motion } = require('framer-motion');
// STRIPE_SECRET_KEY
const stripe = require("stripe")(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
  );

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );

  return { props: { order } };
}

export default function Success({order}){
    const route = useRouter();

    return(
        <Wrapper>
            <Card
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
                    initial={{ opacity: 0, scale: 0.75 }}>
            <div>
                <h1>Thank you for shopping with us.</h1>
                <h2>A confirmation email has been sent to</h2>
                <h2>{order.customer_details.email}</h2>
            </div>
            <InfoWrapper>
            <Address>
            <h3>Adress</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key} : {val}
                </p>
              )
            )}
            </Address>
            <OrderInfo>
                <h3>Arts</h3>
                {order.line_items.data.map((item) => (
                <div key={item.id}>
                    <p>Art: {item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {item.price.unit_amount/100}</p>
                </div>
            ))}
            </OrderInfo>
            </InfoWrapper>
                <button onClick={() => route.push('/')}>Continue Shopping</button>
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 2.5rem 7rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  padding: 2rem;

  h1 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  h2 {
    color: var(--secondary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  button {
    background-color: #61677A;
    color: #fff;
    font-size: 1.2rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  
    &:hover {
        color: #222;
      background-color: #D8D9DA;
    }
  }
`;
const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  color: #fff;
`;
const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
  color: #fff;
`;
const InfoWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
`;