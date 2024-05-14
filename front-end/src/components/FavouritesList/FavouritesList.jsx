import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct'
import styles from './FavouritesList.module.css'

export function FavouritesList({ favouriteProducts }) {
	return (
		<div className={styles.wrapper}>
			<h2>Ulubione</h2>
			{favouriteProducts.map(({ product, id }) => {
				return <FavouriteProduct key={product.id} product={product} favouriteId={id} />
			})}
		</div>
	)
}
