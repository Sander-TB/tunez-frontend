import { RiMusic2Fill, RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { useContext } from "react";
import Search from "./Search";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/Header.module.css";

export default function Header() {
	const { user, logout } = useContext(AuthContext);

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
					{user ? (
						// If logged in
						<>
							<li>
								<Link href='/events/add'>
									<a>Add Event</a>
								</Link>
							</li>
							<li>
								<Link href='/account/dashboard'>
									<a>Dashboard</a>
								</Link>
							</li>
							<li>
								<button
									onClick={() => logout}
									className='btn-secondary btn-icon'>
									<RiLogoutBoxLine /> Log Out
								</button>
							</li>
						</>
					) : (
						// If logged out
						<>
							<li>
								<Link href='/account/login'>
									<a className='btn-secondary btn-icon'>
										<RiLoginBoxLine /> Log In
									</a>
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}
