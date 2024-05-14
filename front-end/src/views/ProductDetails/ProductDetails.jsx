import styles from './ProductDetails.module.css'
import { Photos } from '../../components/Photos/Photos'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Details } from '../../components/Details/Details'
import { useLoaderData } from 'react-router-dom'

export function ProductDetails() {
	const  product = useLoaderData()


	return (
		<CenteredContent verticalPadding={true}>
			<FlexContainer>
				<ExpandableMenu />
				<div className={styles.productDetails}>
					<Breadcrumbs />
					<FlexContainer>
						<Photos product={product} />
						<Details product={product} />
					</FlexContainer>
				</div>
			</FlexContainer>
		</CenteredContent>
	)
}
