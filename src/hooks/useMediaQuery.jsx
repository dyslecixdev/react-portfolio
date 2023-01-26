import {useState, useEffect} from 'react';

const useMediaQuery = query => {
	const [matches, setMatches] = useState(false);

	// If the viewport width (window) is less than the query, change media.matches' boolean.
	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) setMatches(media.matches);

		const listener = () => setMatches(media.matches);
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [matches, query]);

	return matches;
};

export default useMediaQuery;
