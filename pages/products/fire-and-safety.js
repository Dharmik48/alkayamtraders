import Head from 'next/head'
import { useState, useEffect } from 'react'

const FireAndSafety = () => {
	const importAll = r => {
		return r.keys().map(r)
	}

	const [listOfImages, setListOfImages] = useState([])

	useEffect(() => {
		setListOfImages(
			importAll(
				require.context(
					'../../public/images/products/fire/',
					false,
					/\.(png|jpe?g|svg)$/
				)
			)
		)
	}, [])

	return (
		<>
			<Head>
				<title>Fire and Safety Products</title>
			</Head>
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
					{listOfImages.map((image, index) => (
						<li className='product' key={index}>
							<img
								loading='lazy'
								src={image.default.src}
								alt='Fire and Safety products'
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default FireAndSafety
