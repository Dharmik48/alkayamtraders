import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
	const links = [
		{ text: 'Home', to: '#hero' },
		{ text: 'Products', to: '#products' },
		{ text: 'About Us', to: '#about-us' },
		{ text: 'Contact', to: '#contact' },
	]

	const [isNavOpen, setIsNavOpen] = useState(false)

	const router = useRouter()

	const toggleMenu = () => {
		setIsNavOpen(currIsNavOpen => !currIsNavOpen)
	}

	const renderLinks = () => {
		if (router.route.includes('/products')) {
			return links.map(link => (
				<li key={link.text}>
					<Link href={`/${link.to}`} onClick={() => setIsNavOpen(false)}>
						{link.text}
					</Link>
				</li>
			))
		}
		return links.map(link => (
			<li key={link.text}>
				<a href={link.to} onClick={() => setIsNavOpen(false)}>
					{link.text}
				</a>
			</li>
		))
	}

	return (
		<header>
			<div>
				<img src='../images/logo.png' alt='logo' />
				<h1>
					{router.route.includes('/products') ? (
						<Link href={'/#hero'}>Al Kayam Traders</Link>
					) : (
						<a href='#hero'>Al Kayam Traders</a>
					)}
				</h1>
			</div>
			<nav>
				{isNavOpen ? (
					<FaTimes className='menu' onClick={toggleMenu} />
				) : (
					<FaBars className='menu' onClick={toggleMenu} />
				)}

				<ul className={isNavOpen ? 'show' : ''}>{renderLinks()}</ul>
			</nav>
		</header>
	)
}

export default Header
