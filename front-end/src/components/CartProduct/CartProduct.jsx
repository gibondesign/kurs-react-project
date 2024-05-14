import styles from './CartProduct.module.css'
import REMOVE_ICON from '../../assets/remove.svg'

export function CartProduct({ productImg, productName, productBrand, productPrice }) {
	return (
		<>
			<div className={styles.cartProduct}>
				<img src={productImg[0]} className={styles.productImg} alt="" />
				<div className={styles.productInfo}>
					<div>
						<h3>
							{productBrand} {productName}
						</h3>
						<p className={styles.productPrice}>
							Cena:<span>{productPrice} zł</span>
						</p>
					</div>

					<button>
						{' '}
						<img src={REMOVE_ICON} alt="" /> Usuń
					</button>
				</div>
				<h3>{productPrice} zł</h3>
			</div>
		</>
	)
}
