import Image from 'next/image';
import Facebook from '/public/1.png';
import Instagram from '/public/2.png';
import Twitter from '/public/3.png';
import Youtube from '/public/4.png';
import styles from './footer.module.css';
import React from 'react';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div>&copy;2023 Selvi Amparoz. All rights reserved.</div>
			<div className={styles.socials}>
				<Image src={Facebook} width={15} height={15} alt='facebook'></Image>
				<Image src={Instagram} width={15} height={15} alt='facebook'></Image>
				<Image src={Twitter} width={15} height={15} alt='facebook'></Image>
				<Image src={Youtube} width={15} height={15} alt='facebook'></Image>
			</div>
		</div>
	);
};

export default Footer;
