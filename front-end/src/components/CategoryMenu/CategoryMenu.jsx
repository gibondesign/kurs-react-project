import styles from './CategoryMenu.module.css'
import { CATEGORIES } from '../../constants/categories'
import { NavLink, useParams } from 'react-router-dom'

export function CategoryMenu() {
	const params = useParams()

	return (
		<div className={styles.categoryMenu}>
			<ul className="">
				{CATEGORIES.map(item => {
					return (
						<li key={item.path}>
							<NavLink to={`${params.gender}/${item.path}`}>{item.categoryName}</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
