import React from 'react';
import styles from '@/styles/Home.module.css';

export const Header = () => {
	return (
		<div className='header'>
			<div className={styles.header__menu}>
				<p>Home</p>
				<p>About</p>
			</div>
		</div>
	);
};
