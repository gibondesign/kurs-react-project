import styles from './Products.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { Product } from '../Product/Product'

export function Products({ products, headerText }) {
	return (
		<CenteredContent verticalPadding={true}>
			<h2>{headerText}</h2>
			<div className={styles.productList}>
				{products.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</CenteredContent>
	)
}
