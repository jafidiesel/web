import React from 'react';
import { css } from "aphrodite";
import styles from './styles';
import pic from '../../assets/img/djing_profile.jpg';

const Header = () => {
	return (<>
		<div className={css(styles.headerContainer)}>
			<img src={pic} className={css(styles.profile)} alt="pic" />
			<div>Jafi Bravin</div>
			<div>Booking: jafibravin@gmail.com</div>
			<div>Progressive House / Organic House / Melodic House</div>
			<div>Mendoza, Argentina 🇦🇷</div>
		</div>
	</>)
}

export default Header;