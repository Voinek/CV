const animateMenu = async (durationTime, delayTime) => { //animation changing login/register panel into side menu

    VariablesJQuery.container.css({
        /* this isn't animate'able in Jquery which means that in slower animation it's visible "jump" on start of animation which can
           be repaired via using css animations, but then the animation will pop up everytime u click burger menu <gonna think about it later, mby>
               */
        transform: 'translate(0, 0)',
    });
    VariablesJQuery.container.animate({ //login panel going to left side
        height: '100%',
        left: '0',
        top: '0',
    }, 500);


    VariablesJQuery.containerContent.fadeOut(AnimationSettings.durationTime); // slowly showing menu content, gonna improvise with it later so every item will show after previous is loaded


    await simpleFadeIn(VariablesJQuery.containerContentMenu, durationTime);
    for (const elem of document.querySelectorAll('.menu-content')) {
        await simpleFadeIn($(elem), durationTime);
    }
};
const simpleFadeIn = async (elem, duration) => {
    return new Promise((resolve) => {
        elem.fadeIn(duration, () => {
            resolve();
        });
    });
};



const animateHideMenu = (durationTime, delayTime) => { //animation showing burger menu and hiding side menu
    VariablesJQuery.container.animate({
        width: 'toggle',
        padding: '0px',
    }, durationTime, () => {
        VariablesJQuery.burgerMenu.fadeIn(durationTime + delayTime);
    });
    // po co uzywac setTimeout jesli w 3 argumencie mozna dac funkcje onComplete

};
const animateBurgerMenu = (durationTime, delayTime) => { //animation hiding burger menu and showing side menu
    VariablesJQuery.container.animate({
        width: 'toggle',
        padding: '50px',
    }, durationTime, () => {
        VariablesJQuery.burgerMenu.fadeOut(durationTime + delayTime);
    });
};