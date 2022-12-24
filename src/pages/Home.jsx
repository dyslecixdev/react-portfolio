import AnchorLink from 'react-anchor-link-smooth-scroll';

import {motion} from 'framer-motion';

import PropTypes from 'prop-types';

import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import ProfileImg from '../assets/profile-image.png';

function Home({setSelectedPage}) {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<section
			id='home'
			className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
		>
			{/* Image Section */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
				{isAboveMediumScreens ? (
					<div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
						<img
							alt='profile'
							className='hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
							src={ProfileImg}
						/>
					</div>
				) : (
					<img
						alt='profile'
						className='hover:filter hover:saturate-200 duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
						src={ProfileImg}
					/>
				)}
			</div>

			{/* Main section */}
			<div className='z-30 basis-1/2 mt-12 md:mt-32'>
				{/* Heading */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<p className='text-6xl font-playfair z-10 text-center md:text-start'>
						Christian{' '}
						<span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
							Demesa
						</span>
					</p>

					<p className='mt-10 mb-8 text-sm text-center md:text-start'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat,
						consequuntur eos corrupti dicta doloremque possimus. Quia nostrum modi
						corporis iste nesciunt nulla, neque voluptate? At esse voluptatum dolore
						maiores laboriosam eligendi incidunt ipsa sunt delectus qui aspernatur quae
						soluta eveniet ducimus ad aut dolor laborum, fuga autem officiis quidem.
					</p>
				</motion.div>

				{/* Contact Links */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.2, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<AnchorLink
						className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
						onClick={() => setSelectedPage('contact')}
						href='#contact'
					>
						Contact Me
					</AnchorLink>

					<AnchorLink
						className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
						onClick={() => setSelectedPage('contact')}
						href='#contact'
					>
						<div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'>
							Let&apos;s talk.
						</div>
					</AnchorLink>
				</motion.div>

				{/* Social Links */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.4, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	);
}

Home.propTypes = {
	setSelectedPage: PropTypes.func.isRequired
};

export default Home;
