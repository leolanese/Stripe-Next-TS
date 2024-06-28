import { ChakraProvider } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../utils/get-stripe";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Elements stripe={getStripe()}>
				<Component {...pageProps} />
			</Elements>
		</ChakraProvider>
	);
}

export default MyApp;
