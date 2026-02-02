import React, { captureOwnerStack, useEffect, useState } from "react";
import { sliderLists } from "../../constants";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = sliderLists.length;
  const [prevcocktailname, setPrevcocktailname] = useState(
    sliderLists[(currentIndex + length - 1) % length].name,
  );
  const [nextcocktailname, setNextcocktailname] = useState(
    sliderLists[(currentIndex + length + 1) % length].name,
  );
  useEffect(() => {
    setPrevcocktailname(sliderLists[(currentIndex + length - 1) % length].name);
    setNextcocktailname(sliderLists[(currentIndex + length + 1) % length].name);
    gsap.fromTo(".cocktail img", {
      opacity: 0,
      x: -300,
      duration: 1,
    },{
      opacity: 1,
      x: 0,
    });
  }, [currentIndex]);
  const goToSlide = (index) => {
    setCurrentIndex(index + (length % length));
  };

  return (
    <div
      id="menu"
      //   className="[&::-webkit-scrollbar]:hidden"
    >
      <img src="/images/slider-left-leaf.png" alt="" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="" id="m-right-leaf" />

      <div className="cocktail-tabs">
        {sliderLists.map((cocktail) => {
          let isActive = cocktail.id - 1 === currentIndex;
          return (
            <button
              className={
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }
              key={cocktail.id}
              onClick={() => goToSlide(cocktail.id - 1)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </div>
      <div className="content">
        <div className="arrows">
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex - 1 >= 0 ? currentIndex - 1 : length - 1,
              )
            }
          >
            <span>{prevcocktailname}</span>
            <img src="/images/right-arrow.png" alt="" />
          </button>
          <button
            onClick={() =>
              setCurrentIndex(currentIndex + 1 < length ? currentIndex + 1 : 0)
            }
          >
            <span>{nextcocktailname}</span>
            <img src="/images/left-arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div className="cocktail">
        <img src={sliderLists[currentIndex].image} alt="" />
      </div>
    </div>
  );
};

export default Menu;
