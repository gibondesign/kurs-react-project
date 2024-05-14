import { NavLink } from 'react-router-dom'
import styles from './Pagination.module.css'

export function Pagination({ numberOfPages }) {
	const pages = Array(numberOfPages).fill(null)
	return (
		<ul className={styles.pagination}>
			{pages.map((page, idx) => {
				return <NavLink key={idx} to={`?page=${idx + 1}`}>{idx + 1}</NavLink>
			})}
		</ul>
	)
}
