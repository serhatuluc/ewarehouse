import React from "react";

import backImage from "../images/hero_bg.jpg";

const Home: React.FC = () => {
  return (
    <div
      className="site-blocks-cover overlay"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto align-self-center">
            <div className="site-block-cover-content text-center">
              <h1 className="mb-0">
                <strong className="text-primary">Pharmative</strong> Opens 24
                Hours
              </h1>
              <div className="row justify-content-center mb-5">
                <div className="col-lg-6 text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis ex perspiciatis non quibusdam vel quidem.
                  </p>
                </div>
              </div>
              <p>
                <a href="#" className="btn btn-primary px-5 py-3">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
