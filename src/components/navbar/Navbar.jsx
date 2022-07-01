import React from 'react'
import './navbar.scss'
import { NotificationsNone, Settings, Language, AdminPanelSettings } from '@mui/icons-material/';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-wrapper'>
				<div className="topLeft">
					<AdminPanelSettings fontSize='large' className='icon' />
					{/* <span className="logo">Admin</span> */}
				</div>
				<div className="topRight">
					<div className="topbarIconsContainer">
						<Settings fontSize='medium' className='icon' />
					</div>
					<div className="topbarIconsContainer">
						<Language fontSize='medium' className='icon' />
						<span className="topIconBadge"><p>2</p></span>
					</div>
					<div className="topbarIconsContainer">
						<NotificationsNone fontSize='medium' className='icon' />
						<span className="topIconBadge"><p>2</p></span>
					</div>
					<div className="profile-box">
						<img src="https://i.imgur.com/whhjoET.jpg?1" alt="profile" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar