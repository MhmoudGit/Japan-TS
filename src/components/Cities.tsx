import img1 from '../imgs/flag-japan.jpg'

const Cities = () => {
	const cities: { img: string; name: string; p: string; id: number }[] = [
		{ img: img1, name: 'Tokyo', p: 'GET INTO THE FUTURE IN', id: 1 },
		{ img: img1, name: 'Kyoto', p: 'TURN BACK THE TIME IN', id: 2 },
		{ img: img1, name: 'Osaka', p: 'GET IMPRESSED BY', id: 3 },
		{ img: img1, name: 'Nara', p: 'MAKE FRIENDS WITH NATURE IN', id: 4 },
	]
	return (
		<div className='flex justify-center items-center gap-12'>
			{cities?.map((one) => (
				<div className='flex gap-3 font-semibold justify-center items-center'>
					<img
						src={one.img}
						alt='img'
						className='rounded-full w-20 h-20'
					/>
					<div>
						<p className='text-sm'>{one.p}</p>
						<h5 className='text-lg'>{one.name}</h5>
					</div>
				</div>
			))}
		</div>
	)
}

export default Cities