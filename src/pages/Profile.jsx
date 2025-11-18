import React from 'react'
import NotificationIcon from '../assets/icons/nav/notification-bing.png'
import SearchIcon from '../assets/icons/nav/search.png'
import '../scss/profile.scss'

const Profile = () => {
	const currentDate = new Date().toLocaleDateString('en-US', {
		weekday: 'short',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	return (
		<div className='profile'>
			<div className='background__gradient'></div>

			<div className='profile__container'>
				<div className='profile__header'>
					<div className='profile__greeting'>
						<h1 className='welcome'>Welcome, Username</h1>
						<p className='date'>{currentDate}</p>
					</div>

					<div className='profile__actions'>
						<div className='search__box'>
							<img src={SearchIcon} alt='Search' className='search__icon' />
							<input
								type='text'
								placeholder='Search'
								className='search__input'
							/>
						</div>
						<a className='notification__btn'>
							<img
								src={NotificationIcon}
								alt='Notifications'
								className='notification__icon'
							/>
						</a>
						<div className="profile__img">
              <img src="" alt="" />
            </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
