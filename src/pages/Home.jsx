import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {motion} from 'framer-motion';

import TypeWriterEffect from 'react-typewriter-effect';

import PropTypes from 'prop-types';

import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import ProfileImg from '../assets/profile-image.png';

function Home({setSelectedPage}) {
	const isDesktop = useMediaQuery('(min-width: 1060px)');

	const [typewriterAlign, setTypewriterAlign] = useState('center');

	useEffect(() => {
		if (isDesktop) setTypewriterAlign('left');
		else setTypewriterAlign('center');
	}, [isDesktop]);

	return (
		<section
			id='home'
			className='mx-auto px-8 md:flex md:justify-between md:items-center md:h-full gap-16 py-10 bg-gradient-reverse-space'
		>
			{/* Image Section */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
				{isDesktop ? (
					<div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w[400px] before:h-full before:border-2 before:border-dark-blue before:z-[-1]'>
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
						<span className='xs:relative xs:text-black xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
							Demesa
						</span>
					</p>

					{/* Typewriter Effect */}
					<div className='mt-10 mb-8 text-4xl md:text-start text-white font-playfair'>
						<TypeWriterEffect
							textStyle={{textAlign: typewriterAlign}}
							// Delay before first text is typed in milliseconds.
							startDelay={1000}
							// Color of cursor.
							cursorColor='#FBF9F3'
							// Multiple texts that will be typed out.
							multiText={[
								'a Blank Slate',
								'Father',
								'Philosopher',
								'Pianist',
								'Hiker',
								'and React Developer'
							]}
							// Delay between multiple texts in milliseconds.
							multiTextDelay={2000}
							// Loops through the multiple texts indefinitely.
							// eslint-disable-next-line react/jsx-boolean-value
							multiTextLoop={true}
							// How quickly texts is typed in milliseconds.
							typeSpeed={90}
						/>
					</div>
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
						className='bg-gradient-rainbow p-0.5'
						onClick={() => setSelectedPage('contact')}
						href='#contact'
					>
						<div className='bg-black hover:bg-white hover:text-black transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'>
							Let&apos;s talk
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
