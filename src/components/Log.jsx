import React from "react"

const Log = () => {
    const showChange = (event) => {
        //showChange function accepts 'event' object as it's parameter.
        //This object contains information about the event.
        //(including the target element that triggered the event, e.g. the input field)
        console.log(event.target.value);
        //this logs the current value of the input field to the console
        //The event.target.value expression represents the value entered in the input field that triggered the event.
        };
    
    return (
        <>
            <input type="text" onChange={showChange}></input>
        </>
    );
    //When the user types into the input field, the onChange event is triggered,
    //and the showChange function is called with the event object containing the updated value of the input field.
};

export default Log;






