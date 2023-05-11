import React from 'react';
import DoctorsGrid from "../../components/doctors/DoctorsGrid";
import InputForm from "../../components/form-input/Index";
import Answer from "../../components/dream-answer/Index"
import   {UserUXContext} from '../../context/UserUXContext';
import { useContext } from 'react';
import { Navbar } from 'reactstrap';


function Index(props) {

  const { dreamAnalized  } = useContext(UserUXContext)
  
    return (
        <>
        <div className="container">
        <div className="row">
          <DoctorsGrid/>
        </div>
      </div>
    <section className="container py-5">
    <div className="row">
      <div className="col-12">

        { dreamAnalized !== false &&
    <section className='dream-answer-container'>
    <Answer
    dreamAnalized={dreamAnalized}
    />
    </section>
        }
    
        
        <InputForm />
      </div>
    </div>
  </section>
  </>
    );
}

export default Index;