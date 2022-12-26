/* eslint-disable no-console */
import {useRef} from 'react';

import {motion} from 'framer-motion';

import emailjs from '@emailjs/browser';
import {Formik} from 'formik';
import * as yup from 'yup';

import LineGradient from '../components/LineGradient';

import ContactImg from '../assets/contact-img.svg';
import SpaceImg from '../assets/space.png';

// Initial values for formik fields, and matches emailjs template.
const initialValues = {
	user_name: '',
	user_email: '',
	message: ''
};

// Yup validations for formik fields.
const emailSchema = yup.object().shape({
	user_name: yup
		.string()
		.required('Name required')
		.matches(
			/^[A-Z][a-z]+\s[A-Z][a-z]+$/,
			'Please only place your capitalized first name, a space, then your capitalized last name'
		),
	user_email: yup.string().email('Invalid email').required('Email required'),
	message: yup.string().required('Message required')
});

function Contact() {
	const form = useRef(); // Since the form is changing whenever we change any of its input values, we use useRef to avoid re-rendering whenever the form value is mutated.

	// Submits the Formik values.
	const submitForm = (values, {setSubmitting, resetForm}) => {
		emailjs
			// sendForm takes your serviceID, templateID, and publicKey from your emailjs account, and the form object's current value which has the user's form data.
			.sendForm(
				// Uses a .env file to keep the strings a secret.
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				// then if the result passes, it logs OK (result.text) and Formik's values, sets Formik's submit to false, and resets the Formik fields.
				result => {
					console.log(result.text);
					console.log(values);
					setSubmitting(false);
					resetForm();
				},
				// then if the result fails, it logs error.text, sets Formik's submit to false, and resets the Formik fields.
				error => {
					console.log(error.text);
					setSubmitting(false);
					resetForm();
				}
			);
	};

	return (
		<section id='contact' className='pb-20 mx-auto relative'>
			{/* Space Background */}
			<img
				alt='space-background'
				src={SpaceImg}
				className='absolute w-full h-full bg-cover bg-center bg-repeat'
			/>

			{/* Heading */}
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{once: true, amount: 0.5}}
				transition={{duration: 0.5}}
				variants={{
					hidden: {opacity: 0, x: 50},
					visible: {opacity: 1, x: 0}
				}}
				className='flex justify-end w-full pt-24 pr-8 pl-4'
			>
				<div>
					<p className='font-playfair font-semibold text-4xl'>
						<span className='text-yellow'>CONTACT ME</span> TO GET STARTED
					</p>
					<div className='flex md:justify-end my-5'>
						<LineGradient width='w-1/2' />
					</div>
				</div>
			</motion.div>

			<div className='md:flex md:justify-between gap-16 mt-5 md:pr-12'>
				{/* Animated Image */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
					className='basis-1/2 flex justify-center animate-space-bob'
				>
					<img src={ContactImg} alt='contact' />
				</motion.div>

				{/* Form */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.2, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
					className='basis-1/2 mt-10 md:mt-0 md:flex md:flex-col md:justify-center px-8'
				>
					<Formik
						onSubmit={submitForm}
						initialValues={initialValues}
						validationSchema={emailSchema}
					>
						{({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
							// Our form references the form connected to useRef for emailjs
							<form ref={form} onSubmit={handleSubmit}>
								<input
									type='text'
									name='user_name' // Reflects the word used in your emailjs template.
									placeholder='Name'
									value={values.user_name}
									onBlur={handleBlur} // Function that executes when this text field does or does not have focus.
									onChange={handleChange} // Changes values.user_name.
									className='w-full bg-blue font-semibold placeholder-opaque-black p-3 focus:outline-none focus:ring'
								/>
								{/* Error text for the name input appears if it was focused on and violates its schema */}
								{!!touched.user_name && !!errors.user_name && (
									<p className='text-red mt-1'>{errors.user_name}</p>
								)}

								<input
									type='email'
									name='user_email'
									placeholder='Email'
									value={values.user_email}
									onBlur={handleBlur}
									onChange={handleChange}
									className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 focus:outline-none focus:ring'
								/>
								{!!touched.user_email && !!errors.user_email && (
									<p className='text-red mt-1'>{errors.user_email}</p>
								)}

								<textarea
									name='message'
									placeholder='Please leave me a message'
									value={values.message}
									onBlur={handleBlur}
									onChange={handleChange}
									className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 focus:outline-none focus:ring'
								/>
								{!!touched.message && !!errors.message && (
									<p className='text-red mt-1'>{errors.message}</p>
								)}

								<button
									type='submit'
									value='Send'
									className='p-5 bg-yellow font-semibold text-black mt-5 hover:bg-red hover:text-white transition duration-500'
								>
									SEND ME A MESSAGE
								</button>
							</form>
						)}
					</Formik>
				</motion.div>
			</div>
		</section>
	);
}

export default Contact;
