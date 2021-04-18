import React from 'react';
import Nav from './Nav';
import { handleLogoClick } from './helper'

import './styles.scss'

const Header = () => {
	return (
		<header>
			<button className="logo" onClick={handleLogoClick}>torinit gaana</button>
			<Nav />
		</header>
	)
}

export default Header
