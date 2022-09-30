import { ThemeButton } from "../../components/themeButton";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../src/firebas-config";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useEffect, useState } from "react";
import { GradientContainer } from "../../components/GradientContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countries from "../../constants/countries.json";
import { maximumInstance } from "../../setup";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [OTP, setOTP] = useState("");
  const [countryCode, setCountryCode] = useState("IN (+91)");

  const generateRecaptcha = () => {
    return (window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          setPageIndex(1);
        },
      },
      auth
    ));
  };

  const requestOTP = () => {
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91 " + phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validation = () => {
    if (phoneNumber && email && name) {
      validateEmail(email)
        ? requestOTP()
        : toast.warning("Please Enter Valid Email Address", {
            position: toast.POSITION.TOP_RIGHT,
          });
    } else {
      toast.warning("Please fill all fields", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(OTP)
      .then((result) => {
        const user = result.user;
        maximumInstance(user?.accessToken)
          .post(`/whiteListUser`, {
            phoneNumber,
            email,
            name,
          })
          .then((response) => { 
            localStorage.setItem('Counter', response?.data?.whitelistCounter)
          })
          .catch((err) => console.log("Error", err));
        toast.success("Logged in successfully !!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error("Please enter correct OTP", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const resendOTP = () => {
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(
      auth,
      `+${countryCode
        .split(" ")[1]
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")} ` + phoneNumber,
      appVerifier
    )
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    OTP.length === 6 && verifyOTP();
  }, [OTP]);

  return (
    <div className="App flex h-screen w-full font-mont">
      {/* Left Banner */}
      <div className="Left  w-1/2 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 px-15 flex flex-col justify-around">
        <img
          alt="logo"
          className="h-[70px] w-[70px] rounded-full"
          src={require("../../assets/logo.png")}
        />
        <div className="innerConttainer  w-full h-full  flex  flex-col py-20 items-center justify-center">
          <img
            alt="welcomeImg"
            className="h-[40%] 3xl:h-1/3 m-10"
            src={require("../../assets/welcomeImg.png")}
          />
          <div className="items-center justify-center flex flex-col">
            <p className="text-md font-semibold text-center text-white 3xl:text-2xl ">
              AI Powered financial manager
            </p>
            <p className="text-3xl text-center text-white font-semibold 3xl:text-4xl w-3/4 mt-2">
              Personalised portfolio for Maximum returns
            </p>
          </div>
        </div>
      </div>
      {/* Right Banner */}
      <div className="Right bg-gradient-to-tl from-bg via-bgl1 to-darkPurple w-1/2  p-20  flex flex-col items-center px-40">
        <ToastContainer hideProgressBar autoClose={1000} closeOnClick />
        {pageIndex == 0 && (
          <div className="innerContaner w-full h-full flex  flex-col py-10 items-center justify-center 2.5xl:w-[80%] 3xl:w-[60%]">
            <p className="text-white text-center text-2xl font-semibold 3xl:text-4xl ">
              Create Your Account
            </p>
            <div className="inputContainer flex  flex-col  w-full items-center mt-10">
              <GradientContainer
                height="h-20"
                width="w-full"
                className={"mt-5"}
                children={
                  <div className="rounded-2xl h-full w-full flex flex-row items-center justify-between">
                    <div className="flex flex-col h-full w-full">
                      <input
                        type="text"
                        class="form-control text-xl text-white w-full h-full  rounded-2xl flex  px-3 py-1.5 placeholder-gray-600 font-semibold bg-clip-padding transition ease-in-out bg-transparent `focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                        id="name"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                }
              />
              <GradientContainer
                height="h-20"
                width="w-full"
                className={"mt-5"}
                children={
                  <div className="rounded-2xl h-full w-full flex flex-row items-center justify-between">
                    <div className="flex flex-col h-full w-full">
                      <input
                        type="email"
                        class="form-control text-xl text-white w-full h-full  rounded-2xl flex  px-3 py-1.5 placeholder-gray-600 font-semibold bg-clip-padding transition ease-in-out bg-transparent `focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                        id="email"
                        placeholder="Enter Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                }
              />
              <GradientContainer
                height="h-20"
                width="w-full"
                className={"mt-5"}
                children={
                  <div className="rounded-2xl w-full h-full flex items-center justify-between">
                    <select
                      name="country"
                      id="country"
                      value={countryCode}
                      onChange={(e) => {
                        setCountryCode(e.target.value);
                      }}
                      className="focus:outline-none font-semibold h-full w-[30%] bg-transparent text-white text-xl rounded-2xl focus:ring-bg focus:border-bg p-2"
                    >
                      {countries.map((item) => {
                        return (
                          <option>
                            {item?.code} ({item?.dial_code})
                          </option>
                        );
                      })}
                    </select>
                    <div className="flex flex-col w-[70%] h-full">
                      <input
                        type="text"
                        class="form-control text-xl text-white w-full h-full  rounded-2xl flex  px-3 py-1.5 placeholder-gray-600 font-semibold bg-clip-padding transition ease-in-out bg-transparent `focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <ThemeButton
              text="Next"
              className={"mt-16 w-[80%]"}
              onClick={validation}
            />
          </div>
        )}
        {pageIndex == 1 && (
          <div className="innerContaner w-full h-full flex  flex-col py-10 gap-16 items-center justify-center 2.5xl:w-[80%] 3xl:w-[60%]">
            <p className="text-white text-center text-2xl font-bold ">
              Fill the code
            </p>
            <p className="text-white text-center text-base font-medium  ">
              Code is sent. If you still didn’t get the code, please make sure
              you’ve filled your phone number correctly
            </p>
            <div className="inputContainer w-full flex items-center justify-center">
              <OTPInput
                value={OTP}
                onChange={(val) => {
                  setOTP(val);
                }}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                inputStyles={{
                  backgroundColor: "#00000000",
                  color: "#fff",
                  borderWidth: "2px",
                  borderColor: "#9c27b0",
                  borderRadius: 10,
                  width: "50px",
                  height: "50px",
                  fontWeight: 600,
                }}
              />
            </div>
            <div className="checkboxRow w-full items-center flex flex-col m-1">
              <div className="flex items-center">
                <p className="text-base text-center text-white font-normal 4xl:text-2xl">
                  Didn’t get the code?
                </p>
              </div>
              <button
                onClick={resendOTP}
                className="text-white bg-primaryButton rounded-xl px-4 py-2 mt-2 ml-2 text-sm font-semibold"
              >
                Resend OTP
              </button>
              {/* <ThemeButton text="Verify" onClick={verifyOTP} /> */}
            </div>
          </div>
        )}
        <div id="sign-in-button"></div>
      </div>
    </div>
  );
};

export default Login;
