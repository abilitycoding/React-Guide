import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import "./Animation.css"

const Animation = () => {
  useEffect(() => {
    // Get the window height and document height
    const wh = window.innerHeight;
    const dh = document.documentElement.scrollHeight;

    function handleScroll() {
      const ws = window.scrollY;
      const elements = document.querySelectorAll('[data-scroll-animation]');

      elements.forEach((element) => {
        if (element.classList.contains('animate') && element.hasAttribute('data-scroll-animation')) {
          return;
        }

        const elementTop = element.offsetTop + 120;
        const shouldAnimate = ws + wh >= elementTop || ws + wh >= dh;
        element.classList.toggle('animate', shouldAnimate);
      });
    }

    // Attach the scroll event listener to the document
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('touchmove', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, []);
  return (
    <div>
      <h3 className="text-center">Animation</h3>
      <Container className="p-5">
        <div class="f"></div>
        <div class="t" data-scroll-animation="fade-up">
          <img
            src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
            alt="image_1A1"
            width="370PX"
            height="300PX"
          />
        </div>
      </Container>
    </div>
  );
};

export default Animation;