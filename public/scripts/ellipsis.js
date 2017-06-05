var ellipsisTexts = document.querySelectorAll('.abstract');
ellipsisTexts.forEach(function (item, index, arr) {
    if (item.innerHTML && item.innerHTML.length > 30) {
        item.innerHTML = item.innerHTML.substring(0, 31) + '...';
    }
});