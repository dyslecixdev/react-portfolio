/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import {useState} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import PropTypes from 'prop-types';

import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({page, selectedPage, setSelectedPage}) => {
	const lowerCasePage = page.toLowerCase();

	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'text-yellow' : ''
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

Link.propTypes = {
	page: PropTypes.string.isRequired,
	selectedPage: PropTypes.string.isRequired,
	setSelectedPage: PropTypes.func.isRequired
};

function Navbar({selectedPage, setSelectedPage}) {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 768px)');

	return (
		// eslint-disable-next-line react/jsx-curly-brace-presence
		<nav className={`z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<h4 className='font-playfair text-3xl font-bold'>JE</h4>

				{/* Desktop Navbar */}
				{isDesktop ? (
					<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
						<Link
							page='Home'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Skills'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Projects'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Testimonials'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Contact'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<div>Hello</div>
				)}
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	selectedPage: PropTypes.string.isRequired,
	setSelectedPage: PropTypes.func.isRequired
};

export default Navbar;
