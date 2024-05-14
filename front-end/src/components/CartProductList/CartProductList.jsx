import styles from './CartProductList.module.css'
import { CartProduct } from '../CartProduct/CartProduct'

export function CartProductList({products}) {
	
	return (
		<div className={styles.wrapper}>
			<h2>Koszyk</h2>
			{products.map(product => {
				return (
					<CartProduct
						key={product.id}
						productImg={product.photos}
						productBrand={product.brand}
						productName={product.productName}
						productPrice={product.pricePLN}
					/>
				)
			})}
		</div>
	)
}
