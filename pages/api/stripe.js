import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {
  const session = await getSession(req, res);
  const user = session?.user;

  if (req.method === "POST") {
    try {
      if (user) {
        const stripeID = user[`${req.headers.origin}/stripe_customer_id`];
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          customer: stripeID,
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["US", "CA", "ET", "KY"],
          },
          shipping_options: [{ shipping_rate: "shr_1NZ9ZnSAL0PR8LKLEMUfpTmm" }],
          allow_promotion_codes: true,
          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "etb",
                product_data: {
                  name: item.name,
                  images: [item.image],
                },
                unit_amount: item.price,
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        res.status(200).json(session);
      } else {
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["US", "CA", "ET", "KY"],
          },
          shipping_options: [{ shipping_rate: "shr_1NZ9ZnSAL0PR8LKLEMUfpTmm" }],
          allow_promotion_codes: true,
          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "etb",
                product_data: {
                  name: item.name,
                  images: [item.image],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity,
            };
          }),
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/canceled`,
        });
        console.log(session);
        res.status(200).json(session);
      }
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
