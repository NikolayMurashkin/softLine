import * as React from 'react';

export const MobileIcon = ({ className }) => (
	<svg
		width={110}
		height={110}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<circle cx={55} cy={55} r={55} fill='#F2F2F2' />
		<g opacity={0.9} stroke='#B01736' strokeWidth={2}>
			<rect x={39.199} y={32} width={31.6} height={46} rx={4} />
			<path d='M46.398 32h17.2v4a2 2 0 0 1-2 2h-13.2a2 2 0 0 1-2-2v-4Z' />
			<path d='M50.2 71h9.6' strokeLinecap='round' />
		</g>
		<defs>
			<clipPath id='a'>
				<path
					fill='#fff'
					transform='translate(31 31)'
					d='M0 0h48v48H0z'
				/>
			</clipPath>
		</defs>
	</svg>
);
