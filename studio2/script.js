(function() {
    "use strict";
    console.log("reading js");

    // get references to the navigation links and sections
    const springNav = document.querySelector('#spr_nav a');
    const summerNav = document.querySelector('#sum_nav a');
    const winterNav = document.querySelector('#win_nav a');
    const springSection = document.querySelector('#spring');
    const summerSection = document.querySelector('#summer');
    const winterSection = document.querySelector('#winter');

    // add event listeners to the navigation links
    springNav.addEventListener('click', function() {
        springSection.classList.remove('hide');
        summerSection.classList.add('hide');
        winterSection.classList.add('hide');
        springPage.classList.add('hide');
        summerPage.classList.add('hide');
        winterPage.classList.add('hide');
    });

    summerNav.addEventListener('click', function() {
        springSection.classList.add('hide');
        summerSection.classList.remove('hide');
        winterSection.classList.add('hide');
        springPage.classList.add('hide');
        summerPage.classList.add('hide');
        winterPage.classList.add('hide');

    });

    winterNav.addEventListener('click', function() {
        springSection.classList.add('hide');
        summerSection.classList.add('hide');
        winterSection.classList.remove('hide');
        springPage.classList.add('hide');
        summerPage.classList.add('hide');
        winterPage.classList.add('hide');
    });


    //get references to the pages inside of each section
    const loadSpringPage = document.getElementById('spring_btn');
    const springPage = document.getElementById('expandedSpring');
    const loadSummerPage = document.getElementById('summer_btn');
    const summerPage = document.getElementById('expandedSummer');
    const loadWinterPage = document.getElementById('winter_btn');
    const winterPage = document.getElementById('expandedWinter');

    //add event listeners to the pages inside the sections
    loadSpringPage.addEventListener('click', function() {
        springPage.classList.remove('hide');
        springSection.classList.add('hide');
    });

    loadSummerPage.addEventListener('click', function(){
        summerPage.classList.remove('hide');
        summerSection.classList.add('hide');
    });

    loadWinterPage.addEventListener('click', function(){
        winterPage.classList.remove('hide');
        winterSection.classList.add('hide');
    });


    //changing the color of the button
    const expdBtns = document.querySelectorAll('.expd_btn');
    const newSrc = 'images/expd-button-dark.svg';

    expdBtns.forEach(expdBtn => {
    const img = expdBtn.querySelector('img');
    const originalSrc = img.src;

    expdBtn.addEventListener('mouseover', () => {
        img.src = newSrc;
    });

    expdBtn.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
    });




    //calling the different cover page backgrounds
    const expandedSpring = document.querySelector('#expandedSpring');
    const coverPageSpring = expandedSpring.querySelector('.cover_page');
    coverPageSpring.style.backgroundImage = 'url(images/spring-cover.jpg)';
    // coverPageSpring.innerHTML="<img src=\"images/spring-cover.jpg\" >";


    const expandedSummer = document.querySelector('#expandedSummer');
    const coverPageSummer = expandedSummer.querySelector('.cover_page');
    coverPageSummer.style.backgroundImage = 'url(images/summer-cover.jpg)';
    // coverPageSummer.innerHTML="<img src=\"images/summer-cover.jpg\" >";


    const expandedWinter = document.querySelector('#expandedWinter');
    const coverPageWinter = expandedWinter.querySelector('.cover_page');
    coverPageWinter.style.backgroundImage = 'url(images/winter-cover.jpg)';
    // coverPageWinter.innerHTML="<img src=\"images/winter-cover.jpg\" >";


    //slide animation
 



  })();



