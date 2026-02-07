<script>
function toggleMenu() {
  const menu = document.getElementById("menuBox");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
</script>


const toggleBtn = document.getElementById("lightToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "normal");
    }
});

// لود شدن حالت ذخیره‌شده
if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light");
}
