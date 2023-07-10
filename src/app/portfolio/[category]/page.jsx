import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
	return (
		<div>
			<h1 className={styles.catTitle}>{params.category}</h1>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet. </h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis omnis
						qui sequi sapiente fuga.
					</p>
					<Button text='See more' url={'#'} />
				</div>
				<div className={styles.imgContainer}>
					<Image
						fill={true}
						src={
							'https://www.pexels.com/photo/teal-and-pink-cherry-print-garment-2086361/'
						}
						className={styles.img}
						alt='illustrationImage'
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
