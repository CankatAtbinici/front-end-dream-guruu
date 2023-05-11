import React from 'react';
import { doctorsData } from '../../mock-data/mockData';
import SingleDoctor from './SingleDoctor';
import { useContext } from 'react';
import   {UserUXContext} from '../../context/UserUXContext';


function DoctorsGrid(props) {

   
    const {whichDoctor , setWhichDoctor , setDreamAnalized} = useContext(UserUXContext)

    const whichDoctorEventHandler = (image , keys) =>{
        setWhichDoctor(keys)
        setDreamAnalized(false)
    }
 


    return (
   <>
            {
                doctorsData.map((doctor, key) => {
                        return (
                            <div className= {` ${ whichDoctor !== null && whichDoctor === doctor.id ? 'col-md-12' : 'col-md-6 '}`}  >
                            <SingleDoctor
                            whichDoctor = {whichDoctor}
                            title ={doctor.name}
                            description = {doctor.desc}
                            key={doctor.id}
                            image = {doctor.image}
                            keys = {doctor.id}
                            whichDoctorEventHandler = {whichDoctorEventHandler}
                            hidden={whichDoctor !== null && whichDoctor !== doctor.id}
                            
                            />
                            </div>
    
                        );
                

                })
            }
      </>
    );
}

export default DoctorsGrid;