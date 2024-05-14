import { BACK_END_URL } from '../constants/api'
import { redirect } from 'react-router-dom'

export function productDetailsLoader({ params }) {
	const url = `${BACK_END_URL}/products/${params.productId}`
	if (url) {
		return fetch(url)
	} else {
		return redirect('/kobieta')
	}
}
