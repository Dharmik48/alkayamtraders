import Image from 'next/image'
import img1 from '../../public/images/products/engine1.jpeg'

const FireAndSafety = () => {
	return (
		<section>
			<div className='section_heading'>
				<h2 className='section_title'>Marine engine and spare</h2>
				<p className='section_desc'>
					Marine Engine and spare includes products like Engine, DG set,
					Generator, Linear, Head, Turbocharger, Governor, Shafting, Honing
					machine, etc.
				</p>
			</div>
			<ul className='products_list img_products'>
				<li className='product'>
					<Image src={img1} />
				</li>
			</ul>
		</section>
	)
}

export default FireAndSafety
