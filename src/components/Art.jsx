import React from "react";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  useGSAP(() => {
    // let isMobile = useMediaQuery({ maxWidth: 767 });
    // const start =
    const HideTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top 0%",
        end: "bottom 0%",
        markers: true,
        pin: true,
        scrub: 1.5,
      },
    });
    HideTl.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    })
      .to(".masked-img", {
        scale: 1.1,

        maskPosition: "center",
        maskSize: "300%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        ease: "power1.inOut"
      });
  }, []);
  return (
    <div id="art">
      <h2 className="will-fade">The Art</h2>
      <div className="content">
        <ul className="will-fade">
          {goodLists.map((feature) => (
            <li>
              <img src="/images/check.png" alt="check" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <ul className="will-fade">
          {featureLists.map((feature) => (
            <li>
              <img src="/images/check.png" alt="check" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="cocktail-img">
        <img
          src="/images/under-img.jpg"
          className="masked-img abs-center"
          alt=""
        />
      </div>
      <div className="masked-container">
        <h2 className="will-fade">Sip worthy perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art;
