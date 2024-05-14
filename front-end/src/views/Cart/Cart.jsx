import { CartProductList } from '../../components/CartProductList/CartProductList'
import { CartSummary } from '../../components/CartSummary/CartSummary'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'

export function Cart() {

	const cartProducts = [
		{
			id: 26,
			gender: 'women',
			category: 'obuwie',
			subcategory: 'eleganckie',
			productName: 'Szpilki',
			brand: 'Test producent',
			pricePLN: 49,
			priceUSD: 10,
			photos: [
				'http://localhost:3000/product-photos/women-shoes-1.jpg',
				'http://localhost:3000/product-photos/women-shoes-2.jpg',
				'http://localhost:3000/product-photos/women-shoes-3.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 27,
			gender: 'women',
			category: 'obuwie',
			subcategory: 'eleganckie',
			productName: 'Szpilki 2',
			brand: 'Inny proucent',
			pricePLN: 149,
			priceUSD: 39,
			photos: [
				'http://localhost:3000/product-photos/women-shoes-2.jpg',
				'http://localhost:3000/product-photos/women-shoes-3.jpg',
				'http://localhost:3000/product-photos/women-shoes-1.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
	]
	return (
		<>
			<CenteredContent verticalPadding={true}>
				<FlexContainer>
					<CartProductList products={cartProducts} />
					<CartSummary products={cartProducts} />
				</FlexContainer>
			</CenteredContent>
		</>
	)
}
