import React, { useContext, useEffect, useRef, useState } from "react";
import AI from "../assets/AI.jpeg";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Ai() {
  const [activeAi, setActiveAi] = useState(false);
  const { showSearch, setShowSearch } = useContext(shopDataContext);
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  function speak(message) {
    let utterence = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterence);
  }

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech Recognition Not Supported");
      return;
    }

    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.continuous = true;
    recog.interimResults = false;
    recog.maxAlternatives = 5;

    recog.onerror = (e) => {
      toast.error(e.error);
    };

    recog.onresult = (e) => {
      const text = e.results[0][0].transcript.trim().toLowerCase();
      console.log("Voice:", text);

      if (text.includes("open search")) {
        speak("opening search");
        navigate("/collection");
        setShowSearch(true);
      } else if (text.includes("close search")) {
        speak("closing search");
        setShowSearch(false);
      } else if (text.includes("products") || text.includes("collection")) {
        speak("opening collections page");
        navigate("/collections");
      } else if (text.includes("cart")) {
        speak("opening you cart");
        navigate("/cart");
      } else if (text.includes("home")) {
        speak("opening home page");
        navigate("/");
      } else if (text.includes("about")) {
        speak("opening about page");
        navigate("/about");
      } else if (text.includes("order")) {
        speak("opening orders page");
        navigate("/orders");
      } else {
        toast.error("Try again");
      }
    };

    recog.onend = (e) => {
      setActiveAi(false);
    };

    recognitionRef.current = recog;
  }, []);

  const startListening = () => {
    if (recognitionRef.current) recognitionRef.current.start();
  };

  return (
    <div
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
      onClick={() => {
        startListening();
        setActiveAi(true);
      }}
    >
      <img
        src={AI}
        alt=""
        className={`w-[90px] h-[80px] cursor-pointer rounded-full ${
          activeAi
            ? "translate-x-[10%] translate-y-[-10%] scale-125"
            : "translate-x-[0] translate-y-[0] scale-100 transition-transform"
        }`}
        style={{
          filter: `${
            activeAi
              ? "drop-shadow(0px 0px 30px #00d2fc)"
              : "drop-shadow(0px 0px 20px black)"
          }`,
        }}
      />
    </div>
  );
}

export default Ai;
