import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

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
						<Link href='/#hero' onClick={() => setIsNavOpen(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link href='/#products' onClick={() => setIsNavOpen(false)}>
							Products
						</Link>
					</li>
					<li>
						<Link href='/#about-us' onClick={() => setIsNavOpen(false)}>
							About Us
						</Link>
					</li>
					<li>
						<Link href='/#contact' onClick={() => setIsNavOpen(false)}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
