import React from "react";
import "./MainNewLecture.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';

const MainNewLectureItem = ({ lecture }) => {
    return(
        <a href="https://www.naver.com">
            <img src={`/images/sample/${lecture.img}.jpg`} alt="최신과정 이미지" />
            <div>
                <h3>{lecture.name}</h3>
                <p>{lecture.text}</p>
            </div>
        </a>
    );
}

function MainNewLecture() {
    return(
        <section className="Main_NewLecture">
            <h2>최신과정</h2>
            <Swiper
                spaceBetween={20}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
			>
				<SwiperSlide>
                    <MainNewLectureItem
                        lecture={{
                            img: "sample1",
                            name: "최신과정1",
                            text: "설명"
                        }}
                    />
                </SwiperSlide>
				<SwiperSlide>
                    <MainNewLectureItem
                        lecture={{
                            img: "sample2",
                            name: "최신과정2",
                            text: "설명"
                        }}
                    />
                </SwiperSlide>
				<SwiperSlide>
                    <MainNewLectureItem
                        lecture={{
                            img: "sample3",
                            name: "최신과정3",
                            text: "설명"
                        }}
                    />
                </SwiperSlide>
			</Swiper>
        </section>
    );
};

export default MainNewLecture;