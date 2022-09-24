import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './Megamenus.scss'
import{Cat} from "./data1"



 

const Course = () =>{
return(
    <div className="nav-megamenu course-megamenu" >
        <div className="menu-links">
            <h5><FormattedMessage id = 'Cat' defaultMessage = 'Categories' /></h5>
            <div className="inner-links">
                {Cat.map((props) => {
                    return(
                        <div className="Map">
                            {props.items.map((l)=>{
                                return(
                                    <Link  to={l.to}  className="dev">
                                            <div className="title" >
                                            <p>{l.title} </p>
                                            </div>
                                             <div className="icon">
                                            {l.icon}
                                            </div>

                                
                                
                                        
                                        
                                </Link>
                                )
                            }
                            )}
                        </div>
                    )
                }
                )}
            </div>
           </div>
            
            
                <div className="inner-link">
                    {Cat.map((props) =>{
                    return(
                        <div className="Maps">
                            {props.item.map((l)=> {
                                return(
                                    <Link to={l.to} className='devs'>
                                            <div className="title">
                                               <p> {l.title}</p>
                                               </div>
                                               <div className="icon">
                                                {l.icon}
                                               </div>
                                            
                                        
                                   
                                    </Link>
                                )
                            } 
                            )}
                       
                       
                    </div>
                    
                            )
                    }
                    )}
                </div>
            
           
            
                            
                  
                  
                
     

       
       
     

            


</div>
    

)
}

export default Course