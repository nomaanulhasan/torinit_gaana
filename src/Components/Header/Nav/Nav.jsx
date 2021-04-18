import React from 'react';
import { toggleTheme, handleSession } from './helper';

import './styles.scss';

const Nav = () => {
	return (
		<nav>
			<ul className="nav-list">
				<li>Home</li>
				<li>Browse</li>
				<li>Search</li>
			</ul>
			<div className="interactive-tools">
				<button className="btn btn-theme" onClick={toggleTheme}>
				<svg width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fillRule="evenodd">
						<path d="M0 0h24v24H0z"></path>
						<path className="fill_path" d="M6.6 3.582A9.981 9.981 0 0 0 6 7c0 5.523 4.477 10 10 10 1.99 0 3.843-.58 5.4-1.582A10.004 10.004 0 0 1 12 22C6.477 22 2 17.523 2 12a9.992 9.992 0 0 1 4.6-8.418z"></path>
					</g>
				</svg>
				</button>
				<button className="btn btn-session" onClick={handleSession}>Sign Out</button>
			</div>
		</nav>
	);
};

export default Nav;
