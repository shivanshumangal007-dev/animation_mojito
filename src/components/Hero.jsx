import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Hero = () => {

  useGSAP(() => {
    const loaderTimeline = gsap.timeline()
    const headingText = new SplitText("#hero > h1", {type: "chars, words"})
    const paragraphText = new SplitText(".body p", {type: "lines"})
    headingText.chars.forEach((char) => char.classList.add("text-gradient"));
    loaderTimeline.from(headingText.chars,{
      yPercent: 80,
      duration: 0.6,
      stagger: 0.02,
    }).from(paragraphText.lines,{
      opacity: 0,
      yPercent: 80,
      stagger: 0.06,
      duration: 0.8,
    }, );
  },[])
  useGSAP(()=>{
    gsap.to(".left-leaf", {
      yPercent: -40,
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".right-leaf", {
      yPercent: 40,
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  })
  return (
    <>
      <section id="hero" className="noisy">
        <h1>mojito</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="sipThe">
              <p>Cool. Crisp. Classic.</p>
              <p>Sip the Spirit of Summer</p>
            </div>
            <div className="view-cocktails">
              <p>
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">view cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-screen bg-amber-950"></div>
    </>
  );
};

export default Hero;
