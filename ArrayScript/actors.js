let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];
let bob = [];
let startsWithA = [];
for (let i = 0; i < academyMembers.length; i++) {
    // Who is the Academy Member whose ID is 187?
    if (academyMembers[i].memID == 187) {
        console.log(`ID 187: ${academyMembers[i].name}`);
    }
    // Who has have been in at least 3 films?
    if (academyMembers[i].films.length >= 3) {
        console.log(`${academyMembers[i].name} has been in ${academyMembers[i].films.length}`);
    }
    // Who has a name that starts with "Bob"?
    if (academyMembers[i].name.indexOf("Bob") == 0) {
        bob.push(academyMembers[i].name);
    }
    // HARDER: Which Academy Members have been in a film that starts with "A"
    for (let k = 0; k < academyMembers[i].films.length; k++) {
        if (academyMembers[i].films[k].indexOf('A') == 0) {
            startsWithA.push(academyMembers[i].name);
            break;
        }
    }
}
console.log(`Names that start with Bob: ${bob}`);
console.log(`Academy members have been in film that start with A: ${startsWithA}`);
