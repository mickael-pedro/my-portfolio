import React from "react";

export const ResumeItem = (props) => {
    return (
        <div className='position-relative'>
            <div className="resume-item">
                <h5>{props.title}</h5>
                <p className="resume-date">{props.date}</p>
                {props.children}
            </div>
        </div>
    )
}