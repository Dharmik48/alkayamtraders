import Head from 'next/head'
import { useEffect, useState } from 'react'

const FireAndSafety = () => {
	const importAll = r => {
		return r.keys().map(r)
	}

	const [listOfImages, setListOfImages] = useState([])

	useEffect(() => {
		setListOfImages(
			importAll(
				require.context(
					'../../public/images/products/pneumatic/',
					false,
					/\.(png|jpe?g|svg)$/
				)
			)
		)
	}, [])

	return (
		<>
			<Head>
				<title>Pneumatic Products</title>
			</Head>
			<section>
				<div className='section_heading'>
					<h2 className='section_title'>Marine Pneumatic</h2>
					<p className='section_desc'>
						Marine Pneumatic includes products like Rexroth valve, Vickers
						valve, Denfoss Air valve, Rig products, Oil tep, Positioner.
					</p>
				</div>
				<ul className='products_list img_products'>
					{listOfImages.map((image, index) => (
						<li className='product' key={index}>
							<img
								loading='lazy'
								src={image.default.src}
								alt='Pneumatic products'
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
