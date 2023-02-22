import classNames from "classnames/bind"

import styles from './BenefitsIcon.module.scss'

export const BenefitsIcon = ({icon, label}) => {
	const cx = classNames.bind(styles)
  return (
	<div className={cx('benefits-icon')}>
		{icon}
		<span className={cx('benefits-icon__label')}>{label}</span>
	</div>
  )
}
