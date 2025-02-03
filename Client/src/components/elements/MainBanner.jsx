import React from "react";
import "./MainBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Main_Banner() {
	return (
		<section className="main_Banner">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				scrollbar={{ draggable: true }}
				autoplay={{ delay: 5000 }}
			>
				<SwiperSlide>
					{/* <img src="" alt="배너 1" /> */}
                    <div className="slide_1">배너1</div>
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