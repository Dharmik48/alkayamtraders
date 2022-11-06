import Image from 'next/image'
import img1 from '../../public/images/products/fire1.jpeg'
import img2 from '../../public/images/products/fire2.jpeg'

const FireAndSafety = () => {
	return (
		<section>
			<div className='section_heading'>
				<h2 className='section_title'>Marine Fire and Safety</h2>
				<p className='section_desc'>
					Marine Fire and Safety includes products like Safety helmet, Fire
					suit, Safety boat, Hose crimper, Fire alarm, Smoke detectors, Hit
					detectors, etc.
				</p>
			</div>
			<ul className='products_list img_products'>
				<li className='product'>
					<Image src={img1} />
				</li>
				<li className='product'>
					<Image src={img2} />
				</li>
			</ul>
		</section>
	)
}

export default FireAndSafety
