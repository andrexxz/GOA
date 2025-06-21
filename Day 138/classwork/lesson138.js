/*# Level 138:

# 1. შექმენით Custom cursor რესურსებიდან. 
*/
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
document.addEventListener('click', () => {
    cursor.classList.add('click');
    setTimeout(() => {
        cursor.classList.remove('click');
    }, 500);
});
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});
// CSS for the custom cursor
const style = document.createElement('style');
style.textContent = `
.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.1s ease;
}
.cursor.click {
    transform: scale(1.5);
}
`;
document.head.appendChild(style);
// HTML structure for the custom cursor
const cursorDiv = document.createElement('div');
cursorDiv.classList.add('cursor');
document.body.appendChild(cursorDiv);
// Ensure the cursor is visible on page load
cursorDiv.style.display = 'block';
