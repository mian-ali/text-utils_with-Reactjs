import React from "react";

function Alerts(props) {


    const capitalize =(word)=>{

        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()  + lower.slice(1);
    }

    return (
       props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong  > 
              {capitalize(props.alert.type)} : {props.alert.message} 
                </strong> 
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alerts;
