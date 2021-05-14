import React, { useState, useRef, useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Notice = () => {
  const [loading, setLoading] = useState(true);
  const [viewed, setViewed] = useState(false);

  const imageRef = useRef();
  const crossRef = useRef();

  useEffect(() => {
    const noticeViewed = sessionStorage.getItem("noticeViewed");
    if (noticeViewed) setViewed(true);
  }, []);

  useEffect(() => {
    const closeWindow = () => {
      sessionStorage.setItem("noticeViewed", true);
      setViewed(true);
    };

    const crossHandler = (e) => {
      if (!imageRef.current?.contains(e.target)) {
        closeWindow();
      }

      if (crossRef.current?.contains(e.target)) {
        closeWindow();
      }
    };

    setLoading(false);

    window.addEventListener("mouseup", crossHandler);

    return () => window.removeEventListener("mouseup", crossHandler);
  }, []);

  if (loading || viewed) return null;

  /*






  */
  return (
    <div className="noticeContainer">
      <div ref={imageRef} className="noticeImageContainer">
        <img className="noticeImage" src="/notice.png" />

        <div ref={crossRef} className="closeButton pointer">
          <FaTimesCircle />
        </div>
      </div>
    </div>
  );
};

export default Notice;
