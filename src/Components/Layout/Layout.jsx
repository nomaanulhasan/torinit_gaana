import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { getCurrentTheme } from './helper';

import './layout-styles.scss';

const Layout = ({children}) => {
	return (
		<main id="page-layout" className={getCurrentTheme()}>
			<Header />
			<section>
				{children}
			</section>
			<Footer />
		</main>
	);
};

export default Layout;
