import { getAuth, signOut } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import bg1 from "../../assets/Whitelist1.png";
import bg2 from "../../assets/Whitelist2.png";
import bg3 from "../../assets/Whiteilst3.png";
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

  const images = [{ url: bg1 }, { url: bg2 }, { url: bg3 }];

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
        <AwesomeSlider animation="cubeAnimation">
          <div className="flex justify-center items-center" data-src={bg1}>
            <p className="text-3xl text-center text-white font-semibold 3xl:text-4xl mt-2">
              Whitelisted!
            </p>
          </div>
          <div data-src={bg2} />
          <div data-src={bg3} />
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Home;
