import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	const toggleMenu = () => {
		setIsNavOpen(currIsNavOpen => !currIsNavOpen)
	}

	return (
		<header>
			<div>
				<img src='../logo.png' alt='logo' />
				<h1>Al Kayam Traders</h1>
			</div>
			<nav>
				{isNavOpen ? (
					<FaTimes className='menu' onClick={toggleMenu} />
				) : (
					<FaBars className='menu' onClick={toggleMenu} />
				)}

				<ul className={isNavOpen ? 'show' : ''}>
					<li>Home</li>
					<li>Products</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul>
				{/* <ul className='small_nav'>
					<li>Home</li>
					<li>Products</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul> */}
			</nav>
		</header>
	)
}

export default Header
