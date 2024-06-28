import React, { useEffect, useState } from "react";
import { CardElement, useElements } from "@stripe/react-stripe-js";
import { Button } from "@chakra-ui/button";
import getStripe from "../utils/get-stripe";
import { Spinner, Box, Text } from "@chakra-ui/react";

const CARD_OPTIONS = {
	iconStyle: "solid" as const,
	hidePostalCode: true,
	style: {
		base: {
			iconColor: "#5470e1",
			color: "#5470e1",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": {
				color: "#5470e1",
			},
			"::placeholder": {
				color: "#5470e1",
			},
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee",
		},
	},
};

const CheckoutForm = () => {
	const [clientSecret, setClientSecret] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const elements = useElements();

	useEffect(() => {
		window
			.fetch("/api/payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				if (res.status !== 200) {
					setError(true);
				} else {
					setError(false);
					return res.json().then((data) => {
						setClientSecret(data.clientSecret);
					});
				}
			});
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const stripe = await getStripe();

		if (!stripe || !elements) {
			setLoading(false);
			alert("Please enter a valid card number");
			return;
		}

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (payload.error) {
			alert(`Payment failed : ${payload.error.message} ❌`);
			setLoading(false);
		} else {
			setLoading(false);
			alert("Payment succeeded ✅");
		}
	};

	return (
		<Box m="0 auto" py={5} textAlign="center">
			<Text fontWeight={700} fontSize={25} mb={10} color="#5470e1">
				Stripe + Next.JS Demo
			</Text>
			<form onSubmit={handleSubmit}>
				{error ? (
					<Text fontSize={15} px={[0, 0, "md", "md"]}>
						SHOP OFFLINE
					</Text>
				) : (
					<>
						<CardElement options={CARD_OPTIONS} />
						{loading ? (
							<Spinner color="blue.500" size="lg" mt="md" />
						) : (
							<Button
								bgColor="#5470e1"
								color="white"
								fontSize={15}
								m="0 auto"
								type="submit"
								mt={10}
								_hover={{
									bgColor: "#425cc4",
								}}
							>
								Payer
							</Button>
						)}
					</>
				)}
			</form>
		</Box>
	);
};

export default CheckoutForm;
