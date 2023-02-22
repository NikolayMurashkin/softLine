import classNames from 'classnames/bind';

import styles from './BusinessCard.module.scss';

export const BusinessCard = ({ title, text, image }) => {
	const cx = classNames.bind(styles);
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
};
