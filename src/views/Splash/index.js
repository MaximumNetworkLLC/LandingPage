import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
const Splash = () => {
  // const [loading, setLoading] = useState(0);

  // useEffect(() => {
  //   if(loading < 100) {
  //     setLoading(loading + 1);
  //   }
  // }, [loading]);

  return (
    <div className="App font-mont flex flex-col h-screen w-full bg-gradient-to-tr from-slate-900 to-purple-800  items-center justify-center">
      <img
        alt="logo"
        className="h-[300px] w-[300px] rounded-full"
        src={require("../../assets/logo.png")}
      />
      {/* <ProgressBar
        width="400px"
        bgColor="linear-gradient(90deg, rgba(255,8,241,1) 0%, rgba(40,208,236,1) 49%, rgba(255,0,215,1) 100%)"
        completed={loading}
        maxCompleted={100}
        
      /> */}
      <p className="text-3xl text-center text-white font-semibold w-[350px]">
        Welcome to Maximum Protocol!
      </p>
    </div>
  );
};

export default Splash;
