const menuItemss = [...document.querySelectorAll('.menu-item')];

menuItemss.forEach(item => {
    // console.log(item)
    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = "";
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--hove: ${idx};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.bottom = '0';
    cloneDiv.style.left = '0';
    item.appendChild(cloneDiv);
})
