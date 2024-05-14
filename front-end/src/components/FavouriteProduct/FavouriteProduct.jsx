import styles from './FavouriteProduct.module.css'
import REMOVE_ICON from '../../assets/remove.svg'
import BAG_ICON from '../../assets/bag.svg'
import { useFetcher } from 'react-router-dom'
import { Price } from '../Price/Price'

export function FavouriteProduct({ favouriteId, product }) {
	const { Form } = useFetcher()
	const { photos, productName, brand, pricePLN } = product
	return (
		<>
			<div className={styles.favouriteProduct}>
				<img src={photos[0]} className={styles.productImg} alt="" />
				<div className={styles.productInfo}>
					<div>
						<h3>
							{brand} {productName}
						</h3>
						<p className={styles.productPrice}>
							Cena:{' '}
							<span>
								<Price product={product} />
							</span>
						</p>
					</div>
					<div className={styles.iconBox}>
						<Form method="DELETE" action={`/delete-favourite/${favouriteId}`}>
							<button>
								<img src={REMOVE_ICON} alt="" /> Usuń
							</button>
						</Form>
						<button>
							{' '}
							<img src={BAG_ICON} alt="" /> Dodaj do koszyka
						</button>
					</div>
				</div>
				<h3><Price product={product} /></h3>
			</div>
		</>
	)
}
