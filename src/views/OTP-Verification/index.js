import { GradientContainer } from "../../components/GradientContainer";
import { ThemeButton } from "../../components/themeButton";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(OTP)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log("USER NOT VERIFIED", error);
      });
  };

  // useEffect(() => {
  //   console.log("OTP", OTP);
  // }, [OTP]);

  return (
    <div className="App bg-bgl1 flex h-screen w-full font-mont">
      {/* Left Banner */}
      <div className="Left w-1/2 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 px-15 flex flex-col justify-around">
        <div className="innerConttainer  w-full h-full  flex  flex-col py-20 items-center justify-center">
          <div className="items-center justify-center flex flex-col">
            <p className="text-lg text-center text-white font-medium 3xl:text-3xl ">
              AI Powered financial manager
            </p>
            <p className="text-3xl text-center text-white font-medium 4xl:text-4xl w-4/5">
              Personalised portfolio for Maximum returns
            </p>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right w-1/2  p-20  flex flex-col justify-around px-40">
        <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-between ">
          <p className="text-white text-center text-2xl font-bold ">
            Fill the code
          </p>
          <p className="text-white text-center text-base font-medium  ">
            Code is sent. If you still didn’t get the code, please make sure
            you’ve filled your phone number correctly
          </p>
          <div className="inputContainer w-full justify-around">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
              inputStyles={{
                backgroundColor: "#00000000",
                color: "#fff",
                borderWidth: "2px",
                borderColor: "#9c27b0",
                borderRadius: 10,
                width: "50px",
                height: "50px",
              }}
            />
          </div>
          <div className="checkboxRow w-full justify-between  flex flex-col m-1">
            <div className="flex items-center mb-4">
              <p className="text-base text-center text-white font-normal 4xl:text-2xl">
                Didn’t get the code?
              </p>
              <button
                onClick={() => {}}
                className="text-purple-600 ml-2 text-sm font-semibold"
              >
                Resend OTP
              </button>
            </div>
            <ThemeButton text="Verify" onClick={verifyOTP} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
