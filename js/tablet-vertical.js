import localizationWrapper from "./localization-data.js";
import arrayPriceList from "./arrayPriceList.js";
import { ideasArrayUp, ideasArrayDown, textForApplication } from "./slogans.js";
import reviews from "./reviews.js";
import dataContats from "./links.js";


const tvNavButton = document.getElementById("tv-nav-button");
const tvNavigationBlock = document.getElementById("tv-navigation-block");
const tvNavigationBlockItem0 = document.getElementById("tv-navigation-block-item-0");
const tvNavigationBlockItem1 = document.getElementById("tv-navigation-block-item-1");
const tvNavigationBlockItem2 = document.getElementById("tv-navigation-block-item-2");
const tvNavigationBlockItem3 = document.getElementById("tv-navigation-block-item-3");
const tvNavigationBlockItem4 = document.getElementById("tv-navigation-block-item-4");

tvNavButton.addEventListener('click', () => {
    tvNavigationBlock.style.display = "block";
    setTimeout(() => {
        tvNavigationBlock.style.left = "63.34197vw";
    }, 1);
})

tvNavigationBlockItem0.addEventListener('click', () => {
    tvNavigationBlock.style.left = "";
    setTimeout(() => {
        tvNavigationBlock.style.display = "";
    }, 500);
    window.scrollTo({
        top: window.innerWidth * 0,
        behavior: 'smooth'
    });
})

// tvNavigationBlockItem1.addEventListener('click', () => {
//     tvNavigationBlock.style.right = "";
//     setTimeout(() => {
//         tvNavigationBlock.style.display = "";
//     }, 500);
//     window.scrollTo({
//         top: window.innerWidth * 0.85,
//         behavior: 'smooth'
//     });
// })

// tvNavigationBlockItem2.addEventListener('click', () => {
//     tvNavigationBlock.style.right = "";
//     setTimeout(() => {
//         tvNavigationBlock.style.display = "";
//     }, 500);
//     window.scrollTo({
//         top: window.innerWidth * 1.7,
//         behavior: 'smooth'
//     });
// })

// tvNavigationBlockItem3.addEventListener('click', () => {
//     tvNavigationBlock.style.right = "";
//     setTimeout(() => {
//         tvNavigationBlock.style.display = "";
//     }, 500);
//     window.scrollTo({
//         top: window.innerWidth * 2.5,
//         behavior: 'smooth'
//     });
// })

// tvNavigationBlockItem4.addEventListener('click', () => {
//     tvNavigationBlock.style.right = "";
//     setTimeout(() => {
//         tvNavigationBlock.style.display = "";
//     }, 500);
//     window.scrollTo({
//         top: window.innerWidth * 3.3,
//         behavior: 'smooth'
//     });
// })
