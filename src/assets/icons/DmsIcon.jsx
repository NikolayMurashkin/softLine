import * as React from 'react';

export const DmsIcon = (props) => (
	<svg
		width={110}
		height={110}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<circle opacity={0.05} cx={55} cy={55} r={55} fill='#000' />
		<g opacity={0.9} stroke='#B01736' strokeWidth={2}>
			<path d='M35.034 45.313a4 4 0 0 1 3.97-3.513h32.998a4 4 0 0 1 3.984 3.634l2.612 28.394a4 4 0 0 1-3.983 4.367H35.521a4 4 0 0 1-3.97-4.487l3.483-28.395Z' />
			<path
				d='M55 50.637v18.72M45.152 59.997h19.693'
				strokeLinecap='round'
			/>
			<path d='M64.598 41.8v-6.2a4 4 0 0 0-4-4h-11.2a4 4 0 0 0-4 4v6.2' />
		</g>
	</svg>
);

