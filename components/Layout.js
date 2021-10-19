import Head from "next/Head";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<div className={styles.container}>{children}</div>
		</div>
	);
}

Layout.defaultProps = {
	title: "Tunez | Find the coolest parties",
	description: "Find the latest musical events near you",
	keywords: "music, rock, events, blues, soul",
};
