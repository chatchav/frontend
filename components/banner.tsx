import React, { useState, useRef } from "react";
interface Props {
  img: string
}
const Banner: React.FC<Props> = ({img}) => {
  React.useEffect(() => {
   
  }, []);

  return (
      <img src={img} width="100%" alt="" />
  );
};

export default Banner;
