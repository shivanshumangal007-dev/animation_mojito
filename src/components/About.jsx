import React from 'react'

const About = () => {
  return (
    <div id="about">
      <div className="content">
        <div className="left">
          <button className="badge">Best Cocktails</button>
          <h2>Where every detail matters-from muddle to garnish</h2>
        </div>
        <div className="right sub-content">
          <p>
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
          <div>
            <h3 className="text-3xl font-extrabold">
              <span>4.5</span>/5
            </h3>
            <p className="text-sm">More than +12000 customers</p>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="col-span-3">
          <img src="/images/abt1.png" alt="" />
        </div>
        <div className="col-span-6">
          <img src="/images/abt2.png" alt="" />
        </div>
        <div className="col-span-3">
          <img src="/images/abt5.png" alt="" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="col-span-8">
          <img src="/images/abt3.png" alt="" />
        </div>
        <div className="col-span-4">
          <img src="/images/abt4.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About
