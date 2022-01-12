const shareBtn = document.querySelectorAll(".fa-share-square");

shareBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    console.log("clicked");
    alert("https://rmk-creative.github.io/bootstrap-cookbook/");
  });
});
