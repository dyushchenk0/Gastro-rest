import React from 'react'
import '../scss/menu.scss'

const Menu = () => {
	return (
		<div className='menu'>
			<div className='menu__block'>
				<div className='menu__item'>Ккал</div>
				<div className='menu__item'>
					<img src='src/assets/icons/nav/fish.png' alt='fish' />
				</div>
				<div className='menu__item'>
					<img src='src/assets/icons/nav/carrot.png' alt='carrot' />
				</div>
				<div className='menu__item'>
					<img src='src/assets/icons/nav/bottle.png' alt='bottle' />
				</div>
				<div className='menu__item'>
					<img src='src/assets/icons/nav/meat.png' alt='meat' />
				</div>
				<div className='menu__item'>
					<span>5</span>
					<img src='src/assets/icons/nav/table.png' alt='table' />
				</div>
			</div>
		</div>
	)
}

export default Menu
