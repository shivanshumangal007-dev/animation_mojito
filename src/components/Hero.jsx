import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  let isMobile = useMediaQuery({maxWidth : 767})
  useGSAP(() => {
    const loaderTimeline = gsap.timeline();
    const headingText = new SplitText("#hero > h1", { type: "chars, words" });
    const paragraphText = new SplitText(".body p", { type: "lines" });
    headingText.chars.forEach((char) => char.classList.add("text-gradient"));
    loaderTimeline
      .from(headingText.chars, {
        yPercent: 80,
        duration: 0.6,
        stagger: 0.02,
      })
      .from(paragraphText.lines, {
        opacity: 0,
        yPercent: 80,
        stagger: 0.06,
        duration: 0.8,
      });
  }, []);
  useGSAP(() => {
    gsap.to(".left-leaf", {
      yPercent: -40,
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(
      ".right-leaf",
      {
        yPercent: 40,
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      },
      [],
    );
    const startValue = isMobile ? "top 40%" : "top 20%";
    const endValue = isMobile ? "120% top" : "bottom 11%";
    const video = videoRef.current;
    const videoTl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: startValue,
        end: endValue,
        // start: "top 20%",
        // end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
    video.addEventListener("loadedmetadata", () => {
      videoTl.to(video, {
        currentTime: video.duration,
        ease: "none",
      });
    });
  });
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
      <div className="video absolute inset-0 no-scroll">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
