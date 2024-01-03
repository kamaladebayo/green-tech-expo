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


// Sponsors slider
const slider = document.querySelector('.slider');
const logos = document.querySelectorAll('.slider img');

let index = 0;

function slide() {
    index++;
    if (index >= logos.length) {
        index = 0;
    }
    const offset = -index * logos[0].clientWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

setInterval(slide, 1000); // Change slide every 5 seconds (adjust as needed)