console.log("page loading...");

// index     0  1   2
var like0 = [9, 12, 9];
var spans = [
    document.querySelector("#likeup1"),
    document.querySelector("#likeup2"),
    document.querySelector("#likeup3")
];

function like(id) {
    like0[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}