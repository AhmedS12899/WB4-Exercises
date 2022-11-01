let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

let redVehicle = [];
let expiredRegistration = [];
let capacitySixOrMore = [];
let license222 = [];
for(let i = 0; i< vehicles.length; i++){
    // Which vehicles are RED?
    if(vehicles[i].color == "Red"){
        redVehicle.push(vehicles[i]);
    }
    // Which vehicles have registrations that are expired?
    if(vehicles[i].registrationExpires < new Date()){
        expiredRegistration.push(vehicles[i]);
    }
    // Which vehicles that hold at least 6 people?
    if(vehicles[i].capacity >=6){
        capacitySixOrMore.push(vehicles[i]);
    }
    // Which vehicles have license plates that end with "222"?
    if(vehicles[i].licenseNo.indexOf("222") == vehicles[i].licenseNo.length-3){
        license222.push(vehicles[i]);
    }
}
console.log(`---------------------Red Vehicles---------------------`);
console.log(redVehicle);
console.log(`----------------Expired Registration------------------`);
console.log(expiredRegistration);
console.log(`----------------------Capacity 6+---------------------`);
console.log(capacitySixOrMore);
console.log(`----------------------License Plate Ending in 222-----`);
console.log(license222);