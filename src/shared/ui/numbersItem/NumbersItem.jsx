import classNames from 'classnames/bind';

import styles from './NumbersItem.module.scss';

export const NumbersItem = ({ number, label,className }) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('wrapper', className)}>
			<span className={cx('number')}>{number}</span>
			<span className={cx('label')}>{label}</span>
		</div>
	);
};
