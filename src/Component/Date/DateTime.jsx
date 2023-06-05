// import React from "react";

function DateTime({count}){

    return(
        <div className="Date">
            <div className="Date__Days">{count[0]}</div>
            <div className="Date__Hours">{count[1]}</div>
            <div className="Date__Minutes">{count[2]}</div>
            <div className="Date__Seconds">{count[3]}</div>
        </div>
    )
}

export default DateTime 