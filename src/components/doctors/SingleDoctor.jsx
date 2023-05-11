import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function SingleDoctor({ title, description, image , keys , whichDoctorEventHandler , hidden =null ,whichDoctor } ) {


  if(hidden){
    return null;
  }

  function handleClick() {
    whichDoctorEventHandler(image, keys);
  }


 
  return (
    <Card style={{alignItems:"center"}} 
    className="border-0"
    >
      <img
        src={image}
        style={{  alignItems: "center" }}
        className="p-4 d-flex enlarge-on-hover"
        onClick={handleClick}
        key = {keys}
        
      ></img>
      <CardBody
      className="doctor-cards-body"
      >
        <CardTitle tag="h5">{title}</CardTitle>
       {whichDoctor !== null &&  <span onClick={()=>{whichDoctorEventHandler(null , null)}} style={{textDecoration: "underline" , cursor:"pointer"}}>Seçime Geri Dön</span>}
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
}

export default SingleDoctor;
