import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';

import {motion} from 'framer-motion';

import LineGradient from '../components/LineGradient';
import Globe from '../components/Globe';

function Skills() {
	return (
		<section id='skills' className='pt-10 mb-20 relative'>
			{/* Globe Background */}
			<div className='absolute w-full h-full'>
				<Canvas id='canvas'>
					<Suspense fallback={null}>
						<Globe />
					</Suspense>
				</Canvas>
			</div>

			{/* Header */}
			<div className='md:flex md:justify-between md:gap-16 mt-20 px-4'>
				{/* Text */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
					className='md:w-1/3'
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						MY <span className='text-blue'>SKILLS</span>
					</p>

					<LineGradient width='w-1/3' />

					<p className='mt-10 mb-7'>
						Hello, I&apos;m Christian Demesa, a Software Engineer! I am a father of two
						wonderful boys, have a B.A. in philosophy, and a certificate of completion
						in Python, MERN, and Java full stack software development from Coding Dojo.
						I specialize in MERN and Next.js related projects with a heavy emphasis on
						responsive UI design, RESTful routing, MVC architecture, and functional
						programming. When I&apos;m not coding, other hobbies of mine include playing
						piano, hiking, and playing Just Dance with my family.
					</p>
				</motion.div>
			</div>
			{/* Skills */}
			<div className='md:flex md:justify-between mt-16 gap-32 px-4'>
				{/* Languages */}
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
							<p className='font-playfair font-semibold text-3xl mt-3'>Languages</p>
						</div>
						<div className='w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I am proficient in HTML, CSS, JavaScript 8/11, Typescript, Python, Java,
						SQL, and NoSQL.
					</p>
				</motion.div>

				{/* Frameworks & Libraries */}
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
							<p className='font-playfair font-semibold text-3xl mt-3'>Frameworks</p>
						</div>
						<div className='w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						The frameworks I am the most comfortable with include React, Next.js,
						Angular, Node.js, Express.js, Flask, and Spring Boot.
					</p>
				</motion.div>

				{/* Miscellaneous */}
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
							<p className='font-playfair font-semibold text-3xl mt-3'>
								Miscellaneous
							</p>
						</div>
						<div className='w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Additional skills I have include a practical familiarity with Git, GitHub,
						Bitbucket, Tailwind, Bootstrap, SASS, JSON, jQuery, NumPy, Pandas, MySQL,
						SQLite, MongoDB, Firebase, Supabase, Postman, Vite, Docker, Jest, Vitest,
						Vercel, Netlify, Render, and WordPress.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Skills;
