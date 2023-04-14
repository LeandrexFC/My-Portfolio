import React from "react";
import '../AllCss/NotFound.css'
 import neymarImg from '../images/neymar5.jpg'
import Header from '../Components/Header'


function NotFound() {
  return (
    <> 
      <Header />
    <div className="errorDiv">
    <img src={ neymarImg } alt="neymarImg"/>
      <div className="allContent">
 
        <h1 className="errorTitle h" >Error 404 - Page Not Found</h1>
        <p className="errorTitle p">Neymar is just as confused as you are! This page does not exist.</p>
        {/* <p className="errorTitle p">To Back to the beutif</p> */}
      </div>
    </div>
    </>
  );
}

export default NotFound;
