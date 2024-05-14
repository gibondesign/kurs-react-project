import { FullWidthButton } from '../FullWidthButton/FullWidthButton'
import { Accordion } from '../Accordion/Accordion'
import styles from './Details.module.css'
import CAR_ICON from '../../assets/car.svg'
import RETURN_ICON from '../../assets/return.svg'
import { Price } from '../Price/Price'

export function Details({ product }) {
	const accordionContent = [
		{
			title: 'Opis produktu',
			content: product.description,
		},
		{
			title: 'Wskazówki pielęgnacyjne',
			content: product.maintenanceInfo,
		},
	]
	return (
		<div className={styles.details}>
			<div>
				<h2 className={styles.productName}>{product.productName}</h2>
				<p>{product.subcategory}</p>
				<p className={styles.price}><Price product={product} /></p>
			</div>
			<FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>
			<div className={styles.extraInfo}>
				<ul>
					<li>
						<img src={CAR_ICON} alt="" />
						<p>Dostawa do 24h</p>
					</li>
					<li>
						<img src={RETURN_ICON} alt="" />
						<p>Zwrot do 100 dni!</p>
					</li>
				</ul>
			</div>
			<Accordion items={accordionContent} />
		</div>
	)
}
