const collapse = document.getElementById("collapse-readmore");

const collapseButton = document.getElementById("collapse-button");
collapse.addEventListener("hide.bs.collapse", (event) => {
    collapseButton.textContent = "Read more";
});

collapse.addEventListener("show.bs.collapse", (event) => {
    collapseButton.textContent = "Read less";
});