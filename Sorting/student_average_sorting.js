"use strict";

let students = [                      /*0*//*1*//*2*//*3*/
    /*0*/{ name: "Zephaniah", scores: [100, 96, 99, 92] },
    /*1*/{ name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    /*2*/{ name: "Siddalee", scores: [86, 72, 92] },
    /*3*/{ name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    /*4*/{ name: "Elisha", scores: [89, 100] },
    /*5*/{ name: "Ezra", scores: [100, 99, 100, 87] }
];

function getAverage(array) {
    //first loop, loops through students array
    for (let i = 0; i < array.length; i++) {
        //second loop that loops through scores
        let total = 0;
        for (let k = 0; k < array[i].scores.length; k++) {
            total += array[i].scores[k];
        }
        console.log(`The average for ${array[i].name} is ${(total / array[i].scores.length).toFixed(2)}`)
    }
}
function sortByAscending(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a == b) {
        return 0;
    }
    else {
        return 1;
    }
}

function getMedian(array) {
    //calls sortByAscending that sorts our array from lowest to highest scores
    for (let i = 0; i < array.length; i++) {
        array[i].scores.sort(sortByAscending);
    }
    console.log(array);
    //find median of sorted array
    for (let i = 0; i < array.length; i++) {
        let median = 0;
        let scoreLength = array[i].scores.length;
        if (scoreLength % 2 == 0) {
            median += array[i].scores[(scoreLength/2-1)] + array[i].scores[scoreLength/2];
            console.log(`Median for ${array[i].name} is ${median/2}`)
        }
        else{
            median += array[i].scores[Math.floor(scoreLength/2)];
            console.log(`Median for ${array[i].name} is ${median}`)
        }
    }
}

// getAverage(students);
getMedian(students);

