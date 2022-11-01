"use strict";

let personInfo = {
    name: "Ahmed Sharhan",
    address: "Brighton 10",
    city: "Brookyln",
    state: "New York",
    zip: 11235
};
printContact(personInfo);
function printContact(){
    console.log(`${personInfo.name}\n${personInfo.address}\n${personInfo.city}, ${personInfo.state} ${personInfo.zip}`);
}
