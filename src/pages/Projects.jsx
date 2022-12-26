import {motion} from 'framer-motion';

import PropTypes from 'prop-types';

import LineGradient from '../components/LineGradient';

// motion div parent variant.
const container = {
	hidden: {},
	visible: {
		transition: {staggerChildren: 0.2} // Adds an incrementing delay to each motion div child.
	}
};
// motion div child variant.
const projectVariant = {
	hidden: {opacity: 0, scale: 0.8},
	visible: {opacity: 1, scale: 1}
};

function Project({title, subtitle}) {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-black cursor-pointer`;
	const projectTitle = title.split(' ').join('-').toLowerCase();

	return (
		<motion.div variants={projectVariant} className='relative'>
			<div className={overlayStyles}>
				<p className='text-2xl font-playfair'>{title}</p>
				<p className='mt-7'>{subtitle}</p>
			</div>
			{/* Uses images in the public folder for dynamic pathing */}
			<img alt={projectTitle} src={`/images/${projectTitle}.jpeg`} />
		</motion.div>
	);
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
};

function Projects() {
	return (
		<section id='projects' className='mx-auto py-36 md:bg-gradient-space'>
			{/* Header */}
			<motion.div
				className='md:w-2/5 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{once: true, amount: 0.5}}
				transition={{duration: 0.5}}
				variants={{
					hidden: {opacity: 0, y: -50},
					visible: {opacity: 1, y: 0}
				}}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl'>
						PRO<span className='text-red'>JECTS</span>
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-1/3' />
					</div>
				</div>

				<p className='mt-10 mb-10'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolorem,
					rem harum obcaecati cupiditate tempore qui non in hic vero, corrupti laudantium
					ducimus eum nulla veritatis autem. Consequatur eaque, aut omnis repudiandae,
					facere qui in suscipit consectetur cumque, soluta consequuntur. Veritatis,
					minima. Iste quaerat sapiente ut labore, dolore impedit quibusdam.
				</p>
			</motion.div>

			{/* Projects */}
			<div className='flex justify-center px-8'>
				<motion.div
					className='sm:grid sm:grid-cols-3'
					variants={container}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.2}}
				>
					{/* Row 1 */}
					<motion.div
						variants={projectVariant}
						className='flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						BEAUTIFUL USER INTERFACES
					</motion.div>
					<Project
						title='Project 1'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae!'
					/>
					<Project
						title='Project 2'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae!'
					/>

					{/* Row 2 */}
					<Project
						title='Project 3'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae!'
					/>
					<motion.div
						variants={projectVariant}
						className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						RESTFUL API
					</motion.div>
					<Project
						title='Project 5'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae!'
					/>

					{/* Row 3 */}
					<Project
						title='Project 6'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae!'
					/>
					<Project
						title='Project 7'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repudiandae!'
					/>
					<motion.div
						variants={projectVariant}
						className='flex justify-center text-center items-center p-10 bg-yellow text-black max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						SMOOTH USER EXPERIENCE
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default Projects;
