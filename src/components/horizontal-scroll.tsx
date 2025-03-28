'use client';

import {useEffect} from 'react';

export default function HorizontalScroll({ children }) {
	useEffect(() => {
		const handleWheel = (e) => {
			e.preventDefault();

			// Check if horizontal scroll is more dominant than vertical scroll
			const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);

			if (isHorizontal) {
				// Prevent default vertical scroll behavior when scrolling horizontally
				e.preventDefault();

				// Horizontal scroll (left or right)
				const scrollAmount = e.deltaX > 0 ? 1 : -1; // Right or left movement

				// Scroll horizontally (left or right)
				window.scrollBy({
					left: scrollAmount * 50, // Scroll by 10px for each horizontal wheel movement
					top: 0, // No vertical scroll
					behavior: 'instant', // Instant scroll
				});
			} else {
				const scrollAmount = e.deltaY > 0 ? 1 : -1;
				// Vertical scroll, allow normal behavior
				// Only prevent default if horizontal scrolling is desired
				window.scrollBy({
					left: scrollAmount * 50, // No horizontal scroll
					top: 0, // Scroll vertically based on deltaY
					behavior: 'instant', // Default scroll behavior
				});
			}
		};

		// Attach the wheel event listener to the window
		window.addEventListener('wheel', handleWheel, { passive: false });

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, []);

	return (
		<>
			{children}
		</>
	)
}
