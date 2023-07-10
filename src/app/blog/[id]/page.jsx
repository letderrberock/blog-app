import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import dummyimg from '/public/apps.jpg';

const BlogPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
					<p className={styles.desc}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
						voluptate.
					</p>
					<div className={styles.author}>
						<Image
							src={dummyimg}
							alt=''
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>Lorem ipsum dolor sit amet.</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src={dummyimg} alt='' fill={true} className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, impedit!
				</p>
			</div>
		</div>
	);
};

export default BlogPost;
