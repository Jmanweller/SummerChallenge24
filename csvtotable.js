// JavaScript source code
// (A) GET HTML TABLE
let teamtable = document.getElementById("TeamScoreboard");

// (B) AJAX FETCH CSV FILE
window.addEventListener("load", () => {
    fetch("TeamScoreboard.csv")
        .then(res => res.text())
        .then(csv => {
            teamtable.innerHTML = "";
            for (let row of CSV.parse(csv)) {
                let tr = teamtable.insertRow();
                for (let col of row) {
                    let td = tr.insertCell();
                    td.innerHTML = col;
                }
            }
        });
});

let playertable = document.getElementById("TeamScoreboard");
window.addEventListener("load", () => {
    fetch("PlayerScoreboard.csv")
        .then(res => res.text())
        .then(csv => {
            playertable.innerHTML = "";
            for (let row of CSV.parse(csv)) {
                let tr = playertable.insertRow();
                for (let col of row) {
                    let td = tr.insertCell();
                    td.innerHTML = col;
                }
            }
        });
});