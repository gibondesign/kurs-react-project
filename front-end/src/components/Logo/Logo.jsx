import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export function Logo() {
	return (
		<Link to='/'>
			<h1 className={styles.logo}>GibSklep®</h1>
		</Link>
	)
}
