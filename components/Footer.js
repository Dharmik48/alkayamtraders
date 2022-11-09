import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {
	const router = useRouter()
	const links = [
		{ text: 'Home', to: '#hero' },
		{ text: 'About Us', to: '#about-us' },
		{ text: 'Products', to: '#products' },
		{ text: 'Contact', to: '#contact' },
	]

	const renderLinks = () => {
		if (router.route.includes('/products')) {
			return links.map(link => (
				<li key={link.text}>
					<Link href={`/${link.to}`}>{link.text}</Link>
				</li>
			))
		}
		return links.map(link => (
			<li key={link.text}>
				<a href={link.to}>{link.text}</a>
			</li>
		))
	}

	return (
		<footer>
			<div className='heading'>
				<div className='title'>
					<img src='../images/logo.png' alt='logo' />
					<h1>Al Kayam Traders</h1>
				</div>
				<p>&copy; 2022 Al Kayam Traders</p>
			</div>
			<div className='reach_us'>
				<h5>Reach Us</h5>
				<ul>
					<li>
						<FaPhoneAlt />
						<p>
							+919409701340
							<br />
							+919824786152
						</p>
					</li>
					<li>
						<FaEnvelope />
						<Link href={'mailto:alkayamtraders92@gmail.com'}>
							<p>alkayamtraders92@gmail.com</p>
						</Link>
					</li>
					<li>
						<FaMapMarkerAlt />
						<p>
							B-57 Rasheshyam complex, Waghawadi road, Bhavnagar-364001,
							Gujarat.
						</p>
					</li>
				</ul>
			</div>
			<div className='company'>
				<h5>Company</h5>
				<ul>{renderLinks()}</ul>
			</div>
		</footer>
	)
}

export default Footer
