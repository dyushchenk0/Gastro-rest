import React from 'react'
import { useModal } from '../hooks/useModal'

const Header = () => {
	const {
		isModalOpen,
		openModal,
		closeModal,
		handleBackdropClick,
		formData,
		handleInputChange,
		handleSubmit,
	} = useModal()

	return (
		<header className='header active'>
			<div className='container'>
				<div className='header__inner'>
					<div className='header__logo'>
						<div className='logo__circle'>
							<a href='#'>
								<img
									className='header__logo--img'
									src='src/assets/logo/gastro_chef_logo.png'
									alt='Healthy Ration Logo'
								/>
							</a>
							<div className='header__logo--text'>healthy ration</div>
						</div>
					</div>

					<div className='header__nav--block'>
						<nav className='nav'>
							<div className='nav__wrapper'>
								<a href='#' className='nav__link'>
									Програми харчування
								</a>
								<a href='#' className='nav__link'>
									Бізнес-ланчі
								</a>
								<a href='#' className='nav__link nav__link--green'>
									Gastro Shop
								</a>
								<a href='#' className='nav__link'>
									Про нас
								</a>
								<a href='#' className='nav__link'>
									Профіль
								</a>
							</div>
							<div className='nav__lang--wrapper'>
								<div className='change__lang'>
									<a className='change__lang--item active'>UA</a>
									<a className='change__lang--item'>EN</a>
								</div>
							</div>

							<button className='nav-toggle active' type='button'>
								<span className='nav-toggle__item'>Menu</span>
							</button>
						</nav>
						<div className='contact__info'>
							<button onClick={openModal} className='contact__info--btn'>
								+38 (068) 949 - 49 - 19
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Модальное окно контактов */}
			{isModalOpen && (
				<div className='modal active' onClick={handleBackdropClick}>
					<div className='modal__dialog'>
						<div className='modal__content'>
							<form onSubmit={handleSubmit}>
								<div className='modal__close' onClick={closeModal}>
									&times;
								</div>
								<div className='modal__title'>
									Незабаром ми зв'яжемося з вами!
								</div>
								<div className='modal__input'>
									<input
										required
										placeholder="Ваше ім'я"
										name='name'
										type='text'
										className='modal__input--item'
										value={formData.name}
										onChange={handleInputChange}
									/>
									<input
										required
										placeholder='Ваш номер телефону'
										name='phone'
										type='tel'
										className='modal__input--item'
										value={formData.phone}
										onChange={handleInputChange}
									/>
								</div>
								<div className='contact__us'>
									<button
										type='submit'
										className='modal__btn btn__green btn__min'
									>
										Передзвонити мені
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
