// @ts-expect-error: Unreachable code error
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import quote from '../../assets/icons/blockquote.svg';
import { Quote } from 'lucide-react';
import './testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
        <h2>Testimonial</h2>
        <p>What members are saying.</p>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote z-50" src={quote} alt="quote" />
          <img className="bottom-quote quote" src={quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className="review-img" src={review.image} alt="" />
              <div className="content">
                <p className="text">{review.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;