const thNavButton = document.getElementById("th-nav-button");
const thNavigationBlock = document.getElementById("th-navigation-block");
const thNavigationBlockItem0 = document.getElementById("th-navigation-block-item-0");
const thNavigationBlockItem1 = document.getElementById("th-navigation-block-item-1");
const thNavigationBlockItem2 = document.getElementById("th-navigation-block-item-2");
const thNavigationBlockItem3 = document.getElementById("th-navigation-block-item-3");
const thNavigationBlockItem4 = document.getElementById("th-navigation-block-item-4");

thNavButton.addEventListener('click', () => {
    thNavigationBlock.style.display = "block";
    setTimeout(() => {
        thNavigationBlock.style.right = "0";
    }, 1);
})

thNavigationBlockItem0.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

thNavigationBlockItem1.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0.85,
        behavior: 'smooth'
    });
})

thNavigationBlockItem2.addEventListener('click', () => {
    thNavigationBlock.style.right = "";
    setTimeout(() => {
        thNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 1.7,
        behavior: 'smooth'
    });
})

// thNavigationBlockItem3.addEventListener('click', () => {
//     thNavigationBlock.style.right = "";
//     setTimeout(() => {
//         thNavigationBlock.style.display = "";
//     }, 500);
//     window.scrollTo({
//         top: window.innerWidth * 8.75,
//         behavior: 'smooth'
//     });
// })

// thNavigationBlockItem4.addEventListener('click', () => {
//     thNavigationBlock.style.right = "";
//     setTimeout(() => {
//         thNavigationBlock.style.display = "";
//     }, 500);
//     window.scrollTo({
//         top: window.innerWidth * 12.1,
//         behavior: 'smooth'
//     });
// })