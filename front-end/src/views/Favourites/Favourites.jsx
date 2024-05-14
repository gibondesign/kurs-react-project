import { useLoaderData } from 'react-router-dom'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { FavouritesList } from '../../components/FavouritesList/FavouritesList'

export function Favourites() {
	const favouriteProducts = useLoaderData()

	return (
		<>
			<CenteredContent verticalPadding={true}>
				<FavouritesList favouriteProducts={favouriteProducts} />
			</CenteredContent>
		</>
	)
}
