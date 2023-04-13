function clickSingleA(a) {
    items = document.querySelectorAll('.single.active');
    checkbox = document.getElementById("toggle-1");

    if (items.length) {
        items[0].className = 'single';
        checkbox.checked = false;
    }

    a.className = 'single active';

}