import styles from './Product.module.css'
import { useFetcher, Link } from 'react-router-dom'
import fullHeartIcon from '../../assets/heart-full.svg'
import { Price } from '../Price/Price'

export function Product({ product }) {
	const END_POINT_TO_PATH_MAPPING = {
		men: 'mezczyzna',
		women: 'kobieta',
		children: 'dziecko',
	}
	const { Form } = useFetcher()

	return (
		<Link
			to={`/${END_POINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
			className={styles.product}>
			<img className={styles.productPhoto} src={product.photos[0]} alt="Product photo" />

			<Form
				onClick={e => {
					e.stopPropagation()
				}}
				method="POST"
				action={`/add-to-favourite/${product.id}`}>
				<button src={fullHeartIcon} className={styles.heartIcon} alt="add to favourite" />
			</Form>

			<p className={styles.name}>{product.productName}</p>
			<p className={styles.price}>
				<Price product={product}/>
			</p>
		</Link>
	)
}
