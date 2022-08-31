import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderProjects.css";
import "swiper/css/zoom";
import "swiper/css/lazy";
import { Navigation, Pagination, Mousewheel, Keyboard, Zoom, Lazy } from "swiper";
import Gmail from "../../Assets/projects_images/gmail.png"
import Gmail2 from "../../Assets/projects_images/gmail2.png"
import Gmail3 from "../../Assets/projects_images/gmail3.png"
import SliderProjectsCard from '../SliderProjectsCard/SliderProjectsCard';
import allImages from "../../images"
import { imageListItemClasses } from '@mui/material';




function SliderProjects({ projectSelected, initialSlide }) {

    const [filterImage, setFilterImage] = useState([])
    const [swiper, setSwiper] = React.useState(null);
    const swiperRef = useRef(null);

    console.log(initialSlide, "initialSlide")


    const filterSelected = () => {
        const filterdata = allImages.filter((data) => data.id === projectSelected)
        setFilterImage(filterdata)
    }


    useEffect(() => {
        filterSelected()
        if (swiper) {
            swiper.activeIndex = 0
        }
    }, [projectSelected])



    return (
        <div className='SliderProjects'>
            <Swiper
                ref={swiperRef}
                initialSlide={0}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}

                // effect={"fade"}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Zoom]}
                className="mySwiper"
                pagination={{ clickable: true }}
                zoom={true}

                preloadImages={true}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
            >
                {filterImage.length > 0 && filterImage.map((data) => {
                    return data.Images.map((image, index) => {
                        return <SwiperSlide
                            key={index}>
                            <div className="swiper-zoom-container">
                                <img src={image.Image}
                                />

                            </div>


                        </SwiperSlide>
                    })
                }
                )}




                {/* <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={image2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <img src={image3} />
                    </div>
                </SwiperSlide> */}
            </Swiper>

        </div>
    )
}

export default SliderProjects