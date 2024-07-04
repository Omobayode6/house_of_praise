import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import './slider.css'

const slides = [
  {
    bgimg: "/prayer.jpg",
    title: "Join the Prayer",
    subTitle:
      "Visit our church to experiance a different kind of worship and become a part of the flock by contributing to the community in any way you possibly can. ",
  },
  {
    bgimg: "/prayer1.jpg",
    title: "Join the Prayer",
    subTitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus consequuntur! Ullam nemo nostrum deserunt eaque adipisci nulla voluptate in!",
  },
  {
    bgimg: "/prayer.jpg",
    title: "Join the Prayer",
    subTitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus consequuntur! Ullam nemo nostrum deserunt eaque adipisci nulla voluptate in!",
  },
];

const Slider = () => {
  const delay = 8000;
  const [index, setIndex] = useState(0);
  const timeoutRef: any = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className=" h-fit slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide h-[100%] w-[100%] bg-center bg-cover bg-no-repeat font-bold px-[2%] lg:px-[3%] py-5`}
            key={index}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgimg})`}}
          >
            <div className="w-[504px] mt-[40vh] mb-[50px]">
              <h2 className="text-white text-wrap text-[40px] md:text-[50px] font-semibold leading-normal mb-[16px]">
                {slide.title}
              </h2>
              <p className="w-[350px] md:w-[504px] text-wrap text-white text-base font-normal leading-normal">
                {slide.subTitle}
              </p>
            </div>
            <div className="slideshowDots">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
