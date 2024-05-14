import styles from './CenteredContent.module.css'

export function CenteredContent({ children, verticalPadding }) {
	if (verticalPadding) {
		return <div className={`${styles.contentWrapper} ${styles.verticalPadding}`}>{children}</div>
	} else {
		return <div className={styles.contentWrapper}>{children}</div>
	}
}
