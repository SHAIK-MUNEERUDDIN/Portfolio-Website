function clickSingleA(a) {
    items = document.querySelectorAll('.single.active');

    if (items.length) {
        items[0].className = 'single';
    }

    a.className = 'single active';
}