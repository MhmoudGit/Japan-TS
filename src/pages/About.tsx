import CityCard from '../components/CityCard'
import img from '../imgs/japan.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
// Import Swiper styles

const About = () => {
	return (
		<div className='font-semibold max-w-[80%]  h-screen flex justify-center items-center gap-14'>
			<img src={img} alt='img' width={350} />
			<div className='flex flex-col p-10 gap-8'>
				<div className='flex flex-col gap-2'>
					<p className='text-red-600 tracking-widest'>日本の物語</p>
					<h2 className='text-3xl'>Tales of Japan</h2>
				</div>

				<Swiper
					pagination={{
						clickable: true,
						renderBullet: function (index, className) {
							return '<span class="' + className + '">' + 'Tokyo' + "</span>";
						},
					}}
					modules={[Pagination]}
					slidesPerView={1}
				>
					<SwiperSlide><CityCard /></SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
				</Swiper>
			</div>
			<div className='flex -rotate-90 justify-center items-center text-xs gap-5'>
				<p>ABOUT</p>
				<div className='h-[1px] bg-white w-40'></div>
			</div>
		</div>
	)
}

export default About
