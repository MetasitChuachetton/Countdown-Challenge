// import React from "react";

function DateTime({count}){

    return(
        <div className="Date">
            <div className="Date__Days">{count[0]}
                <div className="Date__script">Days</div>
            </div>
            <div className="Date__Hours">{count[1]}
                <div className="Date__script">Hours</div>
            </div>
            <div className="Date__Minutes">{count[2]}
                <div className="Date__script">Minutes</div>
            </div>
            <div className="Date__Seconds">{count[3]}
                <div className="Date__script">Senconds</div>
            </div>
        </div>
    )
}

export default DateTime 