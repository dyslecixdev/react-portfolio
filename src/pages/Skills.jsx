import {motion} from 'framer-motion';

import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import SkillsImg from '../assets/skills-image.png';

function Skills() {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

	return (
		<section id='skills' className='pt-10 pb-24'>
			{/* Header */}
			<div className='md:flex md:justify-between md:gap-16 mt-32'>
				{/* Text */}
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						My <span className='text-red'>SKILLS</span>
					</p>

					<LineGradient width='w-1/3' />

					<p className='mt-10 mb-7'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
						dolorem, rem harum obcaecati cupiditate tempore qui non in hic vero,
						corrupti laudantium ducimus eum nulla veritatis autem. Consequatur eaque,
						aut omnis repudiandae, facere qui in suscipit consectetur cumque, soluta
						consequuntur. Veritatis, minima. Iste quaerat sapiente ut labore, dolore
						impedit quibusdam.
					</p>
				</motion.div>

				{/* Image */}
				<div className='mt-16 md:mt-0'>
					{isAboveMediumScreens ? (
						<div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'>
							<img alt='skills' className='z-10' src={SkillsImg} />
						</div>
					) : (
						<img alt='skills' className='z-10' src={SkillsImg} />
					)}
				</div>
			</div>

			{/* Skills */}
			<div className='md:flex md:justify-between mt-16 gap-32'>
				{/* Experience */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>01</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum
						repudiandae quos iure incidunt quas. Natus nemo id non voluptate, at
						perferendis, unde ab asperiores inventore quibusdam, nam laudantium quae?
					</p>
				</motion.div>

				{/* Innovative */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.2, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>02</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum
						repudiandae quos iure incidunt quas. Natus nemo id non voluptate, at
						perferendis, unde ab asperiores inventore quibusdam, nam laudantium quae?
					</p>
				</motion.div>

				{/* Imaginative */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.4, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>03</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Imaginative</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum
						repudiandae quos iure incidunt quas. Natus nemo id non voluptate, at
						perferendis, unde ab asperiores inventore quibusdam, nam laudantium quae?
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Skills;
