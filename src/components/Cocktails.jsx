import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {

    useGSAP(() => {
        gsap.from("#c-left-leaf", {
            yPercent: 60,
            xPercent: -60,
            scrollTrigger:{
                trigger: "#cocktails",
                start : "top 40%",
                end: "top 15%",
                scrub: true
            }
        })
        gsap.from("#c-right-leaf", {
            yPercent: 60,
            xPercent: 60,
            scrollTrigger:{
                trigger: "#cocktails",
                start : "top 20%",
                end: "top 5%",
                scrub: true
            }
        })
    })
  return (
    <section id="cocktails" className="noisy">
      <img src="images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
      <img src="images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((cocktail) => (
              <li>
                <div className="">
                  <h3>{cocktail.name}</h3>
                  <p>{`${cocktail.country} | ${cocktail.detail}`}</p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map((cocktail) => (
              <li>
                <div className="">
                  <h3>{cocktail.name}</h3>
                  <p>{`${cocktail.country} | ${cocktail.detail}`}</p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
