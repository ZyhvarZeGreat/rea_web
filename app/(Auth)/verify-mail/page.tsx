"use client";
import React from "react";
import Logo from "@/app/assets/mobile_signup_logo.svg";
import Message from "@/app/assets/verify_message.svg";
import Lock from "@/app/assets/verify-lock.svg";
import { Button } from "@/components/ui/button";
import InputOtp from "@/components/common/InputOtp/InputOtp";
import useRequest from "@/components/hooks/use-request";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {};

interface Token {
  tokens: {};
}

const VerifyMail = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string | null>("");
  const [tokens, setTokens] = React.useState<Token | null>(null);
  // console.log(tokens, email);
  const [value, setValue] = React.useState("");
  const [disableResend, setDisableResend] = React.useState<boolean>(false);
  const [isRunning, setIsRunning] = React.useState(false);
  const {
    loading: verifyLoading,
    error: verifyError,
    makeRequest: verifyMakeRequest,
  } = useRequest(`/account/otp/${value}`, "GET");

  const { loading, error, makeRequest } = useRequest(
    `/account/request/otp`,
    "POST",
  );
  const [countdown, setCountdown] = React.useState(60);

  React.useEffect(() => {
    if (global?.window !== undefined) {
      // Now it's safe to access window and localStorage
      const email = localStorage.getItem("email");
      setEmail(email);
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  React.useEffect(() => {
    // Check if OTP has been sent to start countdown
    if (disableResend && !isRunning) {
      startCountdown();
    }
  }, [disableResend, isRunning, countdown]);
  // Start countdown
  const startCountdown = () => {
    setIsRunning(true);
    setCountdown(60);
  };
  // Start countdown of OTP has been sent, and reset the timer and button after the time has elapsed
  React.useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          setIsRunning(false);
          setDisableResend(false);
          setCountdown(60); // Stop the timer when countdown reaches 0
        }
      }, 1000);

      return () => clearInterval(timer); // Cleanup function
    }
  }, [countdown, isRunning]);

  const handleRequestOTP = async () => {
    try {
      const [response, responseStatus] = await makeRequest({
        email: email,
      });
      console.log(responseStatus);

      if (responseStatus === 200) {
        toast(`OTP request successful,${response.success}`, {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
        console.log(response);
        setDisableResend(true);
      }
      if (responseStatus === 400) {
        toast("OTP request failed, please check your connection", {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error("Authentication error:", axiosError.message);
      } else {
        console.error("Unknown error:", error);
        toast("OTP request failed, please check your connection", {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
      }
    }
  };
  const handleVerifyOTP = async () => {
    console.log("clicked");
    try {
      const [response, responseStatus] = await verifyMakeRequest({
        id: value,
      });
      console.log(responseStatus);

      if (responseStatus === 200) {
        toast(` Verification Succesful, ${response.email}`, {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
        console.log(response);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
      if (responseStatus === 400) {
        toast(`Verification Failed, ${response.ERROR} `, {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
      }
      console.log(response);
      if (
        response.ERROR ===
        "OTP has expired, click on the link in mail to request for another one"
      ) {
        toast(`You have already been verified , Please Login`, {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
        router.push("/login");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error("Authentication error:", axiosError.message);
      } else {
        console.error("Unknown error:", verifyError);
        toast("Verification Failed, please request for another OTP", {
          className: "text-[1.1rem] font-jakarta   ",
          position: "top-right",
        });
      }
    }
  };
  console.log(verifyLoading);
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className=" flex h-full w-full flex-col  items-center justify-start   md:max-w-screen-2xl md:px-0">
        <div className="flex w-full  items-center justify-between px-6 py-10 sm:px-12">
          <div>
            <Logo />
          </div>
          <div>
            <Message />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-4 text-center sm:gap-6">
          <div className=" flex items-center justify-center rounded-full bg-[#FFD6D6] p-4 sm:p-6">
            <Lock />
          </div>
          <h3 className="text-3xl font-bold lg:text-6xl">
            Enter Verification Code
          </h3>
          <p className=" text-lg text-[#828282] sm:text-xl">
            One time password (OTP) has been sent to{" "}
          </p>
          <p className=" text-lg font-bold text-[#4E23CB] sm:text-xl">
            {email}
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center gap-24 py-12 sm:py-20">
          <InputOtp value={value} setValue={setValue} maxLength={6} />
          <div className="mt-6 flex flex-col items-center justify-center gap-4">
            <Button
              onClick={() => {
                handleVerifyOTP();
              }}
              className="h-[3rem] w-[18rem] rounded-xl border border-black bg-[#4E23CB] text-xl  text-white hover:bg-[#4E23CB]/80 lg:w-[27rem]"
            >
              {verifyLoading ? "Loading" : "Verify"}
            </Button>

            <div className=" flex items-center justify-center gap-1 text-xl font-semibold text-[#828282]">
              <Button
                disabled={disableResend}
                variant="default"
                onClick={() => {
                  handleRequestOTP();
                }}
                className=" w-[7.5rem]  text-xl font-semibold  text-[#4E23CB]"
              >
                Resend OTP
              </Button>
              in {countdown} Secs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
