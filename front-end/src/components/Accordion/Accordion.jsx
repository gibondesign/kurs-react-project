import styles from './Accordion.module.css'
import ARROW_ICON from '../../assets/arrow.svg'
import { useState } from 'react'

export function Accordion({ items }) {
	const [activeTab, setActiveTab] = useState(0)
	return (
		<ul className={styles.accordion}>
			{items.map((item, idx) => {
				return (
					<li
						key={idx}
						onClick={() => {
							setActiveTab(idx)
						}}>
						<div className={styles.header}>
							<p>{item.title}</p>
							<img src={ARROW_ICON} className={activeTab == idx ? styles.expanded : ''} alt="" />
						</div>
						{activeTab == idx && <p>{item.content}</p>}
					</li>
				)
			})}
		</ul>
	)
}
