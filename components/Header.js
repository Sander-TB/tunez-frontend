import { RiMusic2Fill } from "react-icons/ri";
import Search from "./Search";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<a className='flex'>
						<RiMusic2Fill />
						<span className='mx'>Tunez</span>
					</a>
				</Link>
			</div>

			<Search />

			<nav>
				<ul>
					<li>
						<Link href='/events'>
							<a>Events</a>
						</Link>
					</li>
					<li>
						<Link href='/events/add'>
							<a>Add Event</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
