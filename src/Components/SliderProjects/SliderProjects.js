import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderProjects.css";
import "swiper/css/zoom";
import "swiper/css/lazy";
import { Navigation, Pagination, Mousewheel, Keyboard, Zoom } from "swiper";
import allImages from "../../images"
import CircularProgress from '@mui/material/CircularProgress';




function SliderProjects({ projectSelected }) {

    const [filterImage, setFilterImage] = useState([])
    const [swiper, setSwiper] = useState(null);
    const [loader, setLoader] = useState(true);

    const swiperRef = useRef(null);




    useEffect(() => {
        const filterSelected = () => {
            const filterdata = allImages.filter((data) => data.id === projectSelected)
            setFilterImage(filterdata)
        }
        filterSelected()
        if (swiper) {
            swiper.activeIndex = 0
            setLoader(true)
        }
    }, [projectSelected, swiper])



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
                                {loader && <CircularProgress
                                    thickness={1}
                                    style={{ color: "#144B76" }}
                                />}
                                <img src={image.Image} alt="slider"
                                    onLoad={() => setLoader(false)}
                                    style={{ display: loader ? "none" : "block" }}
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