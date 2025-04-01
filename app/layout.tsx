import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import React from "react";

export const metadata = {
	title: "Docs",
	description: "Documentation site",
};

const banner = (
	<Banner storageKey="some-key">
		Welcome to the next C++ documentation site! 🎉
	</Banner>
);
const navbar = <Navbar logo={<b>CPP REF</b>} align="right" />;
const footer = <Footer>Enjoy this docoumentation</Footer>;

export default async function RootLayout({ children }) {
	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<Head>
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				<Layout
					banner={banner}
					navbar={navbar}
					pageMap={await getPageMap()}
					docsRepositoryBase="https://github.com/singhmeharjeet/cppref/tree/master"
					footer={footer}
					sidebar={{
						defaultOpen: true,
						toggleButton: true,
					}}
					toc={{
						float: true,
						title: "On this page",
					}}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
