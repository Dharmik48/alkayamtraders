import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer>
			<div className='heading'>
				<div className='title'>
					<img src='../logo.png' alt='logo' />
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
						<p>alkayamtraders92@gmail.com</p>
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
				<ul>
					<li>
						<a href='#hero'>Home</a>
					</li>
					<li>
						<a href='#about-us'>About Us</a>
					</li>
					<li>
						<a href='#products'>Products</a>
					</li>
					<li>
						<a href='#contact'>Contact Us</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
