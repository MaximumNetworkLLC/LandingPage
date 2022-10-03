import { getAuth, signOut } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useEffect, useState } from "react";

const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then((res) => {
        // setPageRightIndex(1);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const [counter, setCounter] = useState()

  useEffect(() => {
    setCounter(localStorage.getItem("Counter"))
  }, [counter]);

  return (
    <div className="App flex h-screen w-full font-mont">
      {/* Left Banner */}
      <div className="Left w-full bg-gradient-to-tr from-slate-900 to-purple-800 p-5 flex flex-col justify-center lg:w-[45%]">
        <img
          alt="logo"
          className="h-[60px] w-[60px] rounded-full"
          src={require("../../assets/logo.png")}
        />
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            alt="whitelist"
            className="h-[380px] w-[400px] rounded-full sm:h-[300px] md:h-[380px]"
            src={require("../../assets/whitelist.png")}
          />
          <div className="items-center justify-center flex flex-col">
            <p className="text-2xl text-center text-white font-normal 3xl:text-4xl mt-2">
              You have been
            </p>
            <p className="text-3xl text-center text-white font-semibold 3xl:text-4xl mt-2">
              Whitelisted!
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <p className="bg-gradient-to-br from-white via-slate-400 to-slate-700 bg-clip-text text-transparent font-bold text-[40px]">
            #{counter}
          </p>
          <p className="bg-gradient-to-bl from-white via-slate-400 to-slate-700 bg-clip-text text-transparent font-semibold text-2xl mt-2">
            /500
          </p>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex-col items-center hidden lg:flex lg:w-[55%]">
        <AutoplaySlider
          style={{ height: "100%",width:"100%" }}
          bullets={false}
          buttons
          infinite
          To
          mobileTouch
          organicArrows={false}
          buttonContentLeft={
            <div className="font-bold text-xl">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </div>
          }
          buttonContentRight={
            <div className="font-bold text-xl">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          }
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
        >
          <div
            style={{
              backgroundImage: `url('/images/Whitelist1.png')`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
            }}
          >
            <div className="mt-[50%] px-14">
              <p className="text-3xl w-[90%] text-white font-semibold  3xl:text-4xl mt-2">
                MANY CRYPTOCURRENCIES HAVE OUTPERFORMED{" "}
                <span className="text-pink-600">S&P500</span>{" "}
                <span className="font-normal">IN THE LAST DECADE</span>
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('/images/Whitelist2.png')`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
            }}
          >
            <div className="mt-[50%] px-14 w-[90%]">
              <p className="text-3xl text-white font-semibold  3xl:text-4xl mt-2">
                <span className="text-pink-600">94%</span> OF GEN Z AND
                MILLENNIALS ARE SEEING CRYPTO AS AN ATTRACTIVE INVESTMENT{" "}
                <span className="font-normal">OR HOLD AN ACTIVE PORTFOLIO</span>
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('/images/Whiteilst3.png')`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover"
            }}
          >
            <div className="mt-[50%] px-12">
              <p className="text-3xl w-[70%] text-white font-semibold  3xl:text-4xl mt-2">
                LOOKING TO GET SOME{" "}
                <span className="text-pink-600">EXPOSURE</span> ?{" "}
              </p>
              <p className="text-3xl w-[95%] text-white font-normal  3xl:text-4xl mt-4">
                DAUNTED BY THE CHOICES AND VOLATILITY IN THE MARKET ?
              </p>
            </div>
          </div>
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Home;
