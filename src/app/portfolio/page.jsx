import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.selectedTitle}>Choose a Gallery</h3>
			<div className={styles.items}>
				<Link href={'/portfolio/illustrations'} className={styles.item}>
					<span className={styles.imgTitle}>Illustrations</span>
				</Link>
				<Link href={'/portfolio/websites'} className={styles.item}>
					<span className={styles.imgTitle}>Websites</span>
				</Link>
				<Link href={'/portfolio/applications'} className={styles.item}>
					<span className={styles.imgTitle}>Application</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
