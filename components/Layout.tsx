import React, { ReactNode } from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/layout";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
	<Container mt={20} px={10} py={15} boxShadow="xl" borderRadius={10}>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

		{children}
	</Container>
);

export default Layout;
