const singers = [
    {name: "Alex Warren", dob: "September 18, 2000", bestSong: "Ordinary"},
    {name: "Cher", dob: "May 20, 1946", bestSong: "Believe"},
    {name: "Jon Bon Jovi", dob: "March 2, 1962", bestSong: "Livin' on a Prayer"}
];

// load page
document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#singers");

    singers.forEach(singer => {
        const row = document.createElement("tr");
        row.innerHTML = 
        `<td>${singer.name}</td>
        <td>${singer.dob}</td>
        <td>${singer.bestSong}</td>`
        tbody.appendChild(row);
    })
})