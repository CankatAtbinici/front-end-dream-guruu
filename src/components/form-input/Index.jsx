import React, { useState } from "react";
import {Form, FormGroup  , Col , Input, Button } from "reactstrap";
import { LoadingContext } from "../../context/Loading";
import { useContext } from "react";
import { UserUXContext } from '../../context/UserUXContext';
import { checkRequestLength } from "../../utils/dailyRequestLimitValidator";
import callRegisterForm from '../../utils/callRegisterForm';
import Swal from "sweetalert2";
import askAI from "../../services/api-services/Api";


function Index(props) {

  const Swal = require('sweetalert2');
  const { loadingAnimation, isLoading, setIsLoading}= useContext(LoadingContext); 
  


  const {whichDoctor , setWhichDoctor , dreamAnalized , setDreamAnalized} = useContext(UserUXContext)
  const [dreamMessageFormData  , setDreamMessageFormData] = useState([]);
 
if(whichDoctor === null){
  return null;
}

const dreamTextEventHandler = (event) => {
  setDreamMessageFormData({...dreamMessageFormData , [event.target.name]: event.target.value} );

} 


const askAboutDreamSubmitEventHandler = (event) =>{
  event.preventDefault();
 /*
  askAI.post('/dream-analize-with-context' , {
    "dreamText" : "Anıl için bir doğumgünü şiiri yazar mısın ?",
    "doctorId" : 1
}).then((response) =>{
    console.log(response)
  }).catch(err => {
    console.log(err)
  })
*/
 
  setDreamMessageFormData({...dreamMessageFormData , ['doctor_id'] : whichDoctor});
  const result = checkRequestLength(dreamMessageFormData.dream_message);
  result.success === false ?
  Swal.fire({
    title: "Limit!" ,
    text : result.message,
    icon: 'warning',
    confirmButtonText : "Üye ol",
    confirmButtonColor: "black",
    iconColor: "Black",
    cancelButtonText : "Artık rüya görmeyeceğim"
  }).then(alertResult=> {
   if(alertResult.isConfirmed === true){
    callRegisterForm();
   }
  }) : setDreamAnalized(dreamMessageFormData.dream_message)


}
  return (
    <Form>

      {isLoading === true && loadingAnimation()}
      <FormGroup style={{alignItems:"center" , justifyContent:"center"}} className="d-flex">
        <Col className="col-12" >
          <Input id="exampleText" name="dream_message" type="textarea"  rows ={"6"} onChange={(e) => {dreamTextEventHandler(e)}}/>
        </Col>
      </FormGroup>

      <FormGroup style={{justifyContent:"center"}} className="d-flex">
         {
           <Button  className="btn-dark text-white" type={"submit"}  
           onClick={(event) => {askAboutDreamSubmitEventHandler(event)}} >
          {whichDoctor === "1" ? "Freud'a Sor?" : "Jung'a Sor?"}
           </Button> 

           }
      </FormGroup>

    </Form>
  );
}

export default Index;
