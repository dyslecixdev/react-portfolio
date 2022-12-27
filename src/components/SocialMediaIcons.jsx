import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';

function SocialMediaIcons() {
	return (
		<div className='flex justify-center md:justify-start my-10 gap-7'>
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://www.linkedin.com/in/christian-demesa-learning-new-things/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img alt='linkedin-link' src={Linkedin} />
			</a>
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://github.com/christiandeandemesa'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img alt='github-link' src={Github} />
			</a>
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://www.instagram.com/dyslecix96/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img alt='instagram-link' src={Instagram} />
			</a>
		</div>
	);
}

export default SocialMediaIcons;
