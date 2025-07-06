import { useEffect, useRef, useState } from "react";

const useVoiceSearch = (onResult) => {
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript)
        setListening(false)
      };

      recognition.onend = () => {
        setListening(false)
      };

      recognition.onerror = () => {
        setListening(false)
      };

      recognitionRef.current = recognition
    }
  }, [onResult]);

  const startListening = () => {
    if (recognitionRef.current) {
      setListening(true)
      recognitionRef.current.start()
    }
  };

  return {
    listening,
    startListening,
  };
};

export default useVoiceSearch;
