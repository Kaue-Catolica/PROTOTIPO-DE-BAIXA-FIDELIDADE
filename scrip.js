function expandir(element) {
    const boxed = element.parentElement;
    const content = boxed.querySelector('.boxed-content');
    const icon = boxed.querySelector('.icon');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.innerHTML = '+';
    } else {
        content.style.display = 'block';
        icon.innerHTML = '-';
    }

    boxed.classList.toggle('expanded');
}