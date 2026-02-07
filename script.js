<script>
function toggleMenu() {
  const menu = document.getElementById("menuBox");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
</script>


const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}
