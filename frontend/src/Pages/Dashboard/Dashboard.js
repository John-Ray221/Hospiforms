import React from "react";
import newFormIcon from "./../../assets/dashboardIcons/newForm.svg"
import {Link} from "@tanstack/react-location"

const Dashboard =()=>{

    
    return(
        <>
        <div className="container">

            <div className="sectionHeading">
                <p>START A NEW FORM</p>
            </div>
            <div className="cards d-flex flex-row justify-content-between">

                <div className="card" style={{width: "16rem", height:"8rem"}}>
                    <div className="cardImage d-flex justify-content-center align-items-center">
                        <Link to="/formbuilder" ><img src={newFormIcon} className="card-img-top" alt="..." style={{width: "5rem", height:"5rem"}}/></Link>
                    </div>
                    <div className="cardName">
                        <p>Blank Form</p>
                    </div>
                </div>

                <div className="card" style={{width: "16rem", height:"8rem"}}>
                    <div className="cardImage d-flex justify-content-center align-items-center" style={{width: "5rem", height:"5rem"}}>
                        {/* <img src={newFormIcon} className="card-img-top" alt="..." /> */}
                    </div>
                    <div className="cardName d-flex align-items-end">
                        <p>Template: Pre-screening form</p>
                    </div>
                </div>

                <div className="card" style={{width: "16rem", height:"8rem"}}>
                    <div className="cardImage d-flex justify-content-center align-items-center" style={{width: "5rem", height:"5rem"}}>
                        {/* <img src={newFormIcon} className="card-img-top" alt="..." style={{width: "5rem", height:"5rem"}}/> */}
                    </div>
                    <div className="cardName">
                        <p>Template: Medical aid details</p>
                    </div>
                </div>

                <div className="card" style={{width: "16rem", height:"8rem"}}>
                    <div className="cardImage d-flex justify-content-center align-items-center" style={{width: "5rem", height:"5rem"}}>
                        {/* <img src={newFormIcon} className="card-img-top" alt="..." style={{width: "5rem", height:"5rem"}}/> */}
                    </div>
                    <div className="cardName">
                        <p>Template: Update details</p>
                    </div>
                </div>

                


            </div>

            </div>

            <div className="container-fluid bg-white ">
            <div className="recentForms container">
                <div className="sectionHeading">
                    <p>Recent forms</p>
                </div>

                <div className="forms">
                    <div className="card" style={{"width": "16rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-title">Form title name</p>
                    </div>
                    </div>
                </div>

            </div>
            
            </div>
        </>
    );
}

export default Dashboard;