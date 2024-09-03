function showSidebar() {
  document.getElementById("leftSlideBar").classList.add("show");
}

function hideSidebar() {
  document.getElementById("leftSlideBar").classList.remove("show");
}

function showRightSidebar() {
  document.getElementById("rightSlideBar").classList.add("show");
}

function hideRightSidebar() {
  document.getElementById("rightSlideBar").classList.remove("show");
}

function userSidebar() {
    var x = document.getElementById("rightSlideBar");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.classList.toggle("show");
    } else {
      x.style.display = "none";
    }
}


