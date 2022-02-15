import Link from "next/link";
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import styles from "@/styles/DashboardEvent.module.css";

export default function DashboardEvent({ evt, handleDelete }) {
	return (
		<div className={styles.event}>
			<h4>
				<Link href={`/events/${evt.slug}`}>
					<a>{evt.name}</a>
				</Link>
			</h4>
			<Link href={`/events/edit/${evt.id}`}>
				<a className={styles.edit}>
					<RiEdit2Fill /> <span>Edit Event</span>
				</a>
			</Link>
			<a
				href='#'
				className={styles.delete}
				onClick={() => handleDelete(evt.id)}>
				<RiDeleteBin2Fill /> <span>Delete</span>
			</a>
		</div>
	);
}
