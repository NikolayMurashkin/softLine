import classNames from 'classnames/bind';

import styles from './Benefits.module.scss';
import { BenefitsIcon } from '../../entities/benefitsIcon/BenefitsIcon';
import { DmsIcon } from '../../assets/icons/DmsIcon';

export const Benefits = () => {
	const cx = classNames.bind(styles);
	return (
		<section className={cx('benefits')}>
			<div className={cx('benefits__top')}>
				<h2 className={cx('benefits__title')}>Компенсационный пакет</h2>
				<div className={cx('benefits__icons')}>
					<BenefitsIcon label={'ДМС'} icon={<DmsIcon />} />
				</div>
			</div>
		</section>
	);
};
