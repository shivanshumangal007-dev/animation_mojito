import React from "react";
import { socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#contact",
            start: "top 50%",
          },
        });
        
        tl.from(".anime", {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
        tl.from("h3 span", {
          yPercent: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
    }, [])
  return (
    <div id="contact">
      <img
        src="images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <img
        src="images/footer-right-leaf.png"
        alt="left-leaf"
        id="f-right-leaf"
      />
      <div className="content">
        <h2 className="anime">Where To Find Us</h2>
        <h3>
          <span>Visit Bur Bar</span>

          <p>Lebanon, Beirut, Downtown</p>
        </h3>

        <h3>
          <span>Contact Us</span>

          <p>
            01/005009 <br /> velvetpour@gmail.com
          </p>
        </h3>

        <h3>
          <span>Open Every Day</span>

          <p>
            Mon–Thu : 11:00am – 12am <br /> Fri : 11:00am – 2am
            <br /> Sat : 9:00am – 2am
            <br /> Sun : 9:00am – 1am
          </p>
        </h3>

        <h3 className="socials uppercase ">
          <span>socials : </span>
          <div className="flex justify-center gap-6 mt-3">
            {socials.map((s) => (
              <img src={s.icon} alt={s.name} />
            ))}
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
