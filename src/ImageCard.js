import React, { useEffect, useRef, useState } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const calculateSpans = () => {
      if (imageRef.current) {
        const height = imageRef.current.clientHeight;
        const calculatedSpans = Math.ceil(height / 10);
        setSpans(calculatedSpans);
      }
    };

    if (imageRef.current) {
      imageRef.current.addEventListener("load", calculateSpans);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("load", calculateSpans);
      }
    };
  }, []);

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        alt={description}
        src={urls.small}
        style={{ height: "400px", width: "300px" }}
      />
    </div>
  );
};

export default ImageCard;
