import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './styles.module.scss'
import forma1 from './images/forma-1.png'
import forma2 from './images/forma-2.png'
import forma3 from './images/forma-3.png'
import forma4 from './images/forma-4.png'

const catText = {
	text1: 'A Chinese gaiwan cup with calligraphy characters and vintage brown edges',
	text2: 'The large character in the middle means \'meditation\' or \'zen\' and is often used to represent Buddhism',
}

export default class Categories extends Component {
	render() {
		return (
			<div className={styles.categories}>
				<Link to='/categories/1' className={ cn(styles.category, styles.color_white) }>
					<div className={styles.box_image}>
						<img src={forma1} className={styles.box_image__img} />
						<div className={styles.box_image__text}>Teaware</div>
					</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text1 }</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text2 }</div>
				</Link>
				<Link to="/categories/2" className={ cn(styles.category, styles.color_begue) }>
					<div className={styles.box_image}>
						<img src={forma2} className={styles.box_image__img} />
						<div className={styles.box_image__text}>Pu Erh Tea</div>
					</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text1 }</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text2 }</div>
				</Link>
				<Link to="/categories/3" className={ cn(styles.category, styles.color_dark_perple) }>
					<div className={styles.box_image}>
						<img src={forma3} className={styles.box_image__img} />
						<div className={styles.box_image__text}>Green Tea</div>
					</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text1 }</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text2 }</div>
				</Link>
				<Link to="/categories/4" className={ cn(styles.category, styles.color_perple) }>
					<div className={styles.box_image}>
						<img src={forma4} className={styles.box_image__img} />
						<div className={styles.box_image__text}>Black Tea</div>
					</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text1 }</div>
					<div className={styles.dot}/>
					<div className={styles.text}>{ catText.text2 }</div>
				</Link>
			</div>
		)
	}
}
