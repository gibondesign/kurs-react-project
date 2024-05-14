import styles from './IconMenu.module.css'
import { Link } from 'react-router-dom'
import BAG_ICON from '../../assets/bag.svg'
import HEART_ICON from '../../assets/heart.svg'

export function IconMenu() {
	const cartItems = 2

	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to="/ulubione">
					<img src={HEART_ICON} alt="" />
				</Link>
			</li>
			<li>
				<Link to="/koszyk" className={styles.bagIconBox}>
					<img  src={BAG_ICON} alt="" />
					<div className={styles.numberOfProducts}>{cartItems}</div>
				</Link>
			</li>
		</ul>
	)
}
