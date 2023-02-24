import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './BusinessCard.module.scss';

export const BusinessCard = ({ title, text, image }) => {
	const cx = classNames.bind(styles);
	const [width, setWidth] = useState(window.innerWidth);
	const [isOpened, setIsOpened] = useState(false);

	const breakpoint = 560;

	const openHandle = () => {
		if (isOpened) {
			setIsOpened(false);
		} else {
			setIsOpened(true);
		}
	};

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	if (width > breakpoint) {
		return (
			<div
				className={cx('card')}
				style={{ backgroundImage: image, objectFit: 'contain' }}
			>
				<div className={cx('card__body')}>
					<h3 className={cx('card__title')}>{title}</h3>
					<p className={cx('card__text')}>{text}</p>
				</div>
			</div>
		);
	}
	return (
		<div
			onClick={openHandle}
			className={cx('card_small')}
			style={{ backgroundImage: image, objectFit: 'contain' }}
		>
			<div className={cx('card__body_small')}>
				<h3 className={cx('card__title_small')}>{title}</h3>
				{isOpened && <p className={cx('card__text_small')}>{text}</p>}
			</div>
		</div>
	);
};
