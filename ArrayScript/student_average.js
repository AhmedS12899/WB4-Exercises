"use strict";

let students = [                      /*0*//*1*//*2*//*3*/
    /*0*/{name: "Zephaniah", scores: [100, 96, 99, 92]},
    /*1*/{name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    /*2*/{name: "Siddalee",  scores: [86, 72, 92]},
    /*3*/{name: "Ian",      scores: [98, 84, 89, 100, 100, 76]},
    /*4*/{name: "Elisha",  scores: [89, 100]},
    /*5*/{name: "Ezra",    scores: [100, 99, 100, 87]}
   ];
//first loop, loops through student
for(let i = 0; i < students.length; i++){
    //second loop that loops through scores
    let total = 0;
    for(let k = 0; k < students[i].scores.length; k++){
        total += students[i].scores[k];
    }

    console.log(`The average for ${students[i].name} is ${(total/students[i].scores.length).toFixed(2)}`)
}
