function nextPage(page) {
    document.getElementById("page" + page).style.display = "none";
    document.getElementById("page" + (page + 1)).style.display = "block";
}

function goFirst() {
    document.getElementById("page3").style.display = "none";
    document.getElementById("page1").style.display = "block";
}
