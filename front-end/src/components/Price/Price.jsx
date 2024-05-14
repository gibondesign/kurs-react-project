import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES, CURRENCY_SIGN } from '../../constants/currencies'

export function Price({ product }) {
	const [currency] = useContext(CurrencyContext)
	const priceKey = `price${currency}`
	const price = product[priceKey]
	console.log(price)
	return (
		<>
			{price} {CURRENCY_SIGN[currency]}
		</>
	)
}
