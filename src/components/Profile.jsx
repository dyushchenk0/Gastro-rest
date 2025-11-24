import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import NotificationIcon from '../assets/icons/nav/notification-bing.png';
import SearchIcon from '../assets/icons/nav/search.png';
import '../scss/profile.scss';

const Profile = () => {
	const { id } = useParams(); // Получаем ID из URL
	const { currentUser } = useUser();
	const [profileUser, setProfileUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const currentDate = new Date().toLocaleDateString('en-US', {
		weekday: 'short',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	// Проверяем, является ли профиль профилем текущего пользователя
	const isOwnProfile = currentUser && currentUser.id === parseInt(id);

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				// Если это профиль текущего пользователя, используем данные из контекста
				if (isOwnProfile) {
					setProfileUser(currentUser);
					setLoading(false);
					return;
				}

				// Если это чужой профиль, загружаем данные с сервера
				const response = await fetch(`http://localhost:8800/api/users/${id}`, {
					credentials: 'include'
				});

				if (response.ok) {
					const userData = await response.json();
					setProfileUser(userData);
				} else {
					console.error('Failed to fetch user profile');
				}
			} catch (error) {
				console.error('Error fetching profile:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchUserProfile();
	}, [id, currentUser, isOwnProfile]);

	if (loading) return <div className="profile">Загрузка...</div>;
	if (!profileUser) return <div className="profile">Пользователь не найден</div>;

	return (
		<div className='profile'>
			<div className='background__gradient'></div>

			<div className='profile__container'>
				<div className='profile__header'>
					<div className='profile__greeting'>
						<h1 className='welcome'>
							Welcome, {profileUser.username}
							{isOwnProfile && ' (Ваш профиль)'}
						</h1>
						<p className='date'>{currentDate}</p>
						<p className='user-id'>ID пользователя: {profileUser.id}</p>
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
							<div className="profile__avatar-placeholder">
								{profileUser.username.charAt(0).toUpperCase()}
							</div>
						</div>
					</div>
				</div>

				<div className="profile__info">
					<div className="profile__details">
						<h2>Информация о профиле</h2>
						<p><strong>Username:</strong> {profileUser.username}</p>
						<p><strong>Email:</strong> {profileUser.email}</p>
						<p><strong>User ID:</strong> {profileUser.id}</p>
						{profileUser.created_at && (
							<p><strong>Зарегистрирован:</strong> {new Date(profileUser.created_at).toLocaleDateString()}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile