import styles from './MainMenu.module.css'
import { NavLink } from 'react-router-dom'
import {GENDERS} from '../../constants/categories'

export function MainMenu() {
	
	return (
		<ul className={styles.menu}>
			{GENDERS.map(item => {
				return (
					<li key={item.path}>
						<NavLink to={item.path}>{item.categoryName}</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
