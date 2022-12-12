import React from "react";
import { Carousel } from "react-responsive-carousel";

const functionWithSwitch = (parameter) => {
  switch(parameter){
    case 1:
      return "AVISOS"
    case 2: 
      return "Decoracion Vehicular"
    case 3: 
      return "Corte Laser"
    case 4: 
      return "Packing"
    default:
      return "Marketing Print"
  }
}

const createCarouselItemImage = (index = {}) => (
  <>
  <div className="p-2">
    <img alt="" className="h-[10vh] object-scale-down" src={`/images/ICONOSLABEL/${functionWithSwitch(index)}.svg`}/>                
  </div>
  <div className="flex items-center justify-center rounded-md  p-2 xl:p-6" key={index}>
      <div className="overflow-hidden rounded-md">
        <img className=" h-[30vh]  xl:h-[60vh] object-scale-down " src={`https://res.cloudinary.com/dtlofy3ea/image/upload/f_auto,q_auto,h_720,w_1024/v1670559134/MarketingPrint/Hero/${index}.jpg`} />
      </div>
      <p className=" hidden xl:block uppercase legend">{functionWithSwitch(index)}</p>
  </div>
  </>
);
const baseChildren = <div>{[1, 2, 3, 4].map(createCarouselItemImage)}</div>;

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';


export default function ComponentCorousel() {
  return (

<Carousel autoPlay  showStatus={false} showThumbs={false} infiniteLoop={true} showArrows={false} showIndicators={false}>
  {baseChildren.props.children}</Carousel>
)}