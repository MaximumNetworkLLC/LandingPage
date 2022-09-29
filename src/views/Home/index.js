import { getAuth, signOut } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Home = () => {
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log("USER LOGGED OUT", res);
        // setPageRightIndex(1);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="App flex h-screen w-full font-mont">
      {/* Left Banner */}
      <div className="Left w-[45%] bg-gradient-to-tr from-slate-900 to-purple-800 p-5 flex flex-col justify-center">
        <img
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
          src={require("../../assets/logo.png")}
        />
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            alt="whitelist"
            className="h-[380px] w-[400px] rounded-full "
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
        <div onClick={logout} className="flex justify-end items-center">
          <p className="bg-gradient-to-br from-white via-slate-400 to-slate-700 bg-clip-text text-transparent font-bold text-[40px]">
            #386
          </p>
          <p className="bg-gradient-to-bl from-white via-slate-400 to-slate-700 bg-clip-text text-transparent font-semibold text-2xl mt-2">
            /500
          </p>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right bg-gradient-to-tl from-bg via-bgl1 to-darkPurple w-[55%] flex flex-col items-center">
        <AwesomeSlider
          style={{ height: "100%"}}
          bullets={false}
          animation="cubeAnimation"
          buttons
          infinite
        >
          <div
            style={{
              backgroundImage: `url('/images/Whitelist1.png')`,
            }}
            className="flex flex-col"
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
            }}
            className="flex flex-col"
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
            }}
            className="flex flex-col"
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
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Home;
