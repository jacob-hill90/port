import { useRef } from "react";
import "./style.css";

const Home = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <>
      <div className="home-wrapper">
        <div className="splash-wrapper">
          <svg
            viewBox="0 0 1920 269"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hill-svg"
          >
            <path
              d="M253 13C132.2 -56.6 66.8333 179.167 0 269H1920V36.0002C1827 155.5 1536.5 197 1292.5 86.5001C1098.43 -1.3879 1050.5 86.5001 766.5 152.5C455.5 219.5 373.8 82.6 253 13Z"
              fill="#EACA99"
              fillOpacity="0.5"
            />
          </svg>
          <div className="intro-container">
            <div className="about-wrapper">
              <h3>Hello! My name is</h3>
              <h2 onClick={executeScroll}>Jake Hill</h2>
              <br></br>
              <p>
                I'm a software developer and digital designer with over 1 year
                of experience creating websites and applications.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus rem iste hic ipsam qui dolorum id et ea, adipisci
                pariatur quidem modi delectus quisquam eos, odit fuga. Repellat
                beatae alias eum totam quibusdam quod. Quidem voluptatum illum
                veniam veritatis cum!
              </p>
            </div>
            <div className="job-info-container">USMC, YMCA, RoboTire</div>
          </div>
        </div>
        <div className="recent-projects-wrapper" ref={myRef}></div>
      </div>
    </>
  );
};

export default Home;
