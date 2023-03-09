const menu = document.querySelector('.main_header')
const marginMenu = document.querySelector('.main')
document.addEventListener('scroll', (event) => {
    if (window.scrollY > 400) {
        menu.classList.add('scroll')
        marginMenu.classList.add('margin')
    }
    else {
        menu.classList.remove('scroll')
        marginMenu.classList.remove('margin')
    }
});
var teacher = document.querySelectorAll('.teacher_item');
let ivt = 0;
function getArrSlider(start, end, number) {
    const limit = start > end ? number : end
    let output = []
    for (let i = start; i <= limit; i++) {
        output.push(i)
    }
    if (start > end) {
        for (let i = 0; i <= end; i++) {
            output.push(i)
        }
    }
    return output
}
let min = 0, max = 2
const interVal = setInterval(
    () => {
        const list = getArrSlider(min, max, teacher.length - 1)
        for (var i = 0; i < 6; i++) {
            teacher[i].style.display = 'none';
        }
        list.forEach(item => {
            teacher[item].style.display = 'flex';
        })
        min = (min === 5) ? min = 0 : min += 1
        max = (max === 5) ? max = 0 : max += 1
    }, 4000)


