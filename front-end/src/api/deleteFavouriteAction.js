import { BACK_END_URL } from '../constants/api'

export function deleteFavourite({ params }) {
	return fetch(`${BACK_END_URL}/favourites/${params.productId}`, {
		method: 'DELETE',
	})
}
