const mvNavButton = document.getElementById("mv-nav-button");
const mvNavigationBlock = document.getElementById("mv-navigation-block");
const mvNavigationBlockItem0 = document.getElementById("mv-navigation-block-item-0");

mvNavButton.addEventListener('click', () => {
    mvNavigationBlock.style.display = "block";
    setTimeout(() => {
        mvNavigationBlock.style.opacity = "1";
    }, 1);
})

mvNavigationBlockItem0.addEventListener('click', () => {
    mvNavigationBlock.style.opacity = "";
    setTimeout(() => {
        mvNavigationBlock.style.display = "";
    }, 500);
})

