import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Transition.css";

const Transition = () => {
  useEffect(() => {
    // Get the window height and document height
    const wh = window.innerHeight;
    const dh = document.documentElement.scrollHeight;

    function handleScroll() {
      const ws = window.scrollY;
      const elements = document.querySelectorAll("[data-scroll-animation]");

      elements.forEach((element) => {
        if (
          element.classList.contains("animate") &&
          element.hasAttribute("data-scroll-animation-once")
        ) {
          return;
        }

        const elementTop = element.offsetTop + 120;
        const shouldAnimate = ws + wh >= elementTop || ws + wh >= dh;
        element.classList.toggle("animate", shouldAnimate);
      });
    }

    // Attach the scroll event listener to the document
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("touchmove", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
    };
  }, []);
  return (
    <div>
      <h3 className="text-center">CSS Transition Tutorial</h3>
      <Container className="p-5">
        <div className="transition-example">
          <div className="transition-item" id="transitionColor">
            1. Hover to see the Color Transition
          </div>
          <div className="transition-item" id="transitionSize">
            2. Hover to see the Size Transition
          </div>
          <div className="transition-item" id="transitionOpacity">
            3. Hover to see the Opacity Transition
          </div>
          <div class="image-container d-flex flex-column">
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
            <div class="animation-element bounce-up cf">
              <div class="subject development">
                <img
                  src="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300"
                  alt="image_1A1"
                  width="370PX"
                  height="300PX"
                />
                <h2>Image title</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Transition;
