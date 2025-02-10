import React from "react";
import "./MainBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCards, Autoplay } from "swiper/modules";

function Main_Banner() {
	return (
		<section className="main_Banner">
			<Swiper className="main_swiper"
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				grabCursor={true}
				scrollbar={{ draggable: true }}
				// autoplay={{ delay: 5000 }}
				// loop={true}
			>
				<SwiperSlide>
					{/* <img src="" alt="배너 1" /> */}
                    <div className="slide_1">배너1
						<Swiper className="sub_swiper"
							effect={'cards'}
							grabCursor={true}
							pagination={{
								dynamicBullets: true,
							}}
							modules={[Pagination, EffectCards]}
						>
							<SwiperSlide><img src="/images/sample/sample1.jpg" alt="" /></SwiperSlide>
							<SwiperSlide><img src="/images/sample/sample2.jpg" alt="" /></SwiperSlide>
							<SwiperSlide><img src="/images/sample/sample3.jpg" alt="" /></SwiperSlide>
							<SwiperSlide><img src="/images/sample/sample4.jpg" alt="" /></SwiperSlide>
						</Swiper>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{/* <img src="" alt="배너 2" /> */}
                    <div className="slide_2">배너2</div>
				</SwiperSlide>
				<SwiperSlide>
					{/* <img src="" alt="배너 3" /> */}
                    <div className="slide_3">배너3</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Main_Banner;