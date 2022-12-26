import {useState, useEffect} from 'react';

import {motion} from 'framer-motion';

import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Home from './pages/Home';
import LineGradient from './components/LineGradient';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const [selectedPage, setSelectedPage] = useState('home');

	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)'); // If the viewport width is at least 1060px, isAboveMediumScreens is true.

	// Determines if the user is at the top of the viewport or not.
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			else setIsTopOfPage(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='app bg-black'>
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>

			{/* Lower right navigation dots */}
			<div className='w-full md:h-auto'>
				{isAboveMediumScreens && (
					<DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
				)}
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('home')}
				>
					<Home setSelectedPage={setSelectedPage} />
				</motion.div>
			</div>

			<LineGradient />

			<div className='w-full md:w-11/12 mx-auto md:h-auto'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('skills')}
				>
					<Skills />
				</motion.div>
			</div>

			<LineGradient />

			<div className='w-full md:h-auto'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('projects')}
				>
					<Projects />
				</motion.div>
			</div>

			<LineGradient />

			<div className='w-full md:w-11/12 md:h-auto'>
				<motion.div
					margin='0 0 -200px 0'
					amount='all'
					onViewportEnter={() => setSelectedPage('contact')}
				>
					<Contact />
				</motion.div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
