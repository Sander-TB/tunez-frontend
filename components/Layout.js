import { useRouter } from "next/router";
import Head from "next/Head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			{router.pathname === "/" && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: "Tunez | Find the coolest parties",
	description: "Find the latest musical events near you",
	keywords: "music, rock, events, blues, soul",
};