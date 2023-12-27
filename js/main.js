const leftAgendaBtn = document.getElementById("agenda-left")
const rightAgendaBtn = document.getElementById("agenda-right")
const agendaRow = document.getElementById("agenda-row")
const sidebar = document.getElementById("sidebar")
// const sidebar_link = document.getElementById("sidebar_link")

leftAgendaBtn.addEventListener("click", (e) => {
    agendaRow.scrollBy(-300, 0)
})
rightAgendaBtn.addEventListener("click", (e) => {
    agendaRow.scrollBy(300, 0)
})


document.getElementById("nav_toggle").addEventListener("click", (e) => {
    sidebar.style.display = 'block'
})
document.getElementById("close_sidebar").addEventListener("click", (e) => {
    sidebar.style.display = 'none'
})


let sidebar_link = document.querySelectorAll('.sidebar_link');

let clickEvent = () => {
    sidebar.style.display = 'none'
}
sidebar_link.forEach((item) => {
    item.addEventListener('click', clickEvent)
});
