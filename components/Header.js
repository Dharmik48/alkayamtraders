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
				<img src='../images/logo.png' alt='logo' />
				<h1>Al Kayam Traders</h1>
			</div>
			<nav>
				{isNavOpen ? (
					<FaTimes className='menu' onClick={toggleMenu} />
				) : (
					<FaBars className='menu' onClick={toggleMenu} />
				)}

				<ul className={isNavOpen ? 'show' : ''}>
					<li>
						<a href='/#hero' onClick={() => setIsNavOpen(false)}>
							Home
						</a>
					</li>
					<li>
						<a href='/#products' onClick={() => setIsNavOpen(false)}>
							Products
						</a>
					</li>
					<li>
						<a href='/#about-us' onClick={() => setIsNavOpen(false)}>
							About Us
						</a>
					</li>
					<li>
						<a href='/#contact' onClick={() => setIsNavOpen(false)}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
