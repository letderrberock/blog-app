import React from 'react';
import styles from './page.module.css';
import web from '/public/websites.jpg';
import Image from 'next/image';
import Link from 'next/link';
const Blog = () => {
	return (
		<div className={styles.mainContainer}>
			<Link href={`/blog/test`} className={styles.container}>
				<div className={styles.imageContainer}>
					<Image src={web} alt='' width={400} height={250} className={styles.image} />
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam.
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
