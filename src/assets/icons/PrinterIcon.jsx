import * as React from 'react';

export const PrinterIcon = ({ className }) => (
	<svg
		width={111}
		height={110}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<circle cx={55} cy={55} r={55} fill='#F2F2F2' />
		<g>
			<path
				d='M68.722 43.747V32H43.275v11.747m-1.956 25.671-8.32.007V49.612c0-3.24 2.628-5.865 5.872-5.865h34.255a5.869 5.869 0 0 1 5.872 5.865v19.813l-8.317-.007m-29.362-8.582h29.362V78H41.319V60.836Z'
				stroke='#B01736'
				strokeWidth={2}
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path
					fill='#fff'
					transform='translate(31.998 31)'
					d='M0 0h48v48H0z'
				/>
			</clipPath>
		</defs>
	</svg>
);
