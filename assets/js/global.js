const toggleButton = document.querySelector(".toggle-button");
const sidebar = document.querySelector(".sidebar");
toggleButton.addEventListener('click', toggleSidebar)


function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')
}