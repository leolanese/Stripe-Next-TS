// ./utils/get-stripejs.ts
import { Stripe, loadStripe } from "@stripe/stripe-js";

//make the card elements 
let stripePromise: Promise<Stripe | null>;
console.log(stripePromise);

const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
	}
	console.log(stripePromise);
	return stripePromise;
};

export default getStripe;
