import * as React from 'react';

export const SliderArrowNext = ({ className, navigationPrevRef }) => (
	<svg
		width={56}
		height={56}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		ref={navigationPrevRef}
	>
		<rect
			width={56}
			height={56}
			rx={28}
			transform='matrix(-1 0 0 1 56 0)'
			fill='#F0F0F0'
		/>
		<path d='m23 18 10 10-10 10' stroke='#A30C33' strokeWidth={2} />
	</svg>
);
