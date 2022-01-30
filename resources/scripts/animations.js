const animateMenu = async (durationTime, delayTime) => { //animation changing login/register panel into side menu

    VariablesJQuery.container.css({ /* this isn't animate'able in Jquery which means that in slower animation it's visible "jump" on start of animation which can
    be repaired via using css animations, but then the animation will pop up everytime u click burger menu <gonna think about it later, mby>
        */
        transform: 'translate(0, 0)',
    });
    VariablesJQuery.container.animate({ //login panel going to left side
        height: '100%',
        left: '0',
        top: '0',
    }, 500);


    //TO CHANGE
    VariablesJQuery.containerContent.fadeOut(AnimationSettings.durationTime); // slowly showing menu content, gonna improvise with it later so every item will show after previous is loaded


    //better
    // await simpleFadeIn(VariablesJQuery.containerContentMenu, durationTime);
    // await simpleFadeIn(VariablesJQuery.menuStageOne, durationTime);
    // await simpleFadeIn(VariablesJQuery.menuStageTwo, durationTime);
    // await simpleFadeIn(VariablesJQuery.menuStageThree, durationTime);
    // await simpleFadeIn(VariablesJQuery.menuStageFour, durationTime);

    //the best
    await simpleFadeIn(VariablesJQuery.containerContentMenu, durationTime);
    for (const elem of document.querySelectorAll('.menu-content')) {
        await simpleFadeIn($(elem), durationTime);
    }

    // setTimeout(() => {
    //     VariablesJQuery.containerContentMenu.fadeIn(durationTime);
    //     setTimeout(() => {
    //         VariablesJQuery.menuStageOne.fadeIn(durationTime);
    //         setTimeout(() => {
    //             VariablesJQuery.menuStageTwo.fadeIn(durationTime);
    //             setTimeout(() => {
    //                 VariablesJQuery.menuStageThree.fadeIn(durationTime);
    //                 setTimeout(() => {
    //                     VariablesJQuery.menuStageFour.fadeIn(durationTime);
    //                 }, delayTime);
    //             }, delayTime);
    //         }, delayTime);
    //     }, delayTime);
    // }, delayTime);
};
const simpleFadeIn = async (elem, duration) => {
    return new Promise((resolve) => {
        elem.fadeIn(duration, () => {
            resolve();
        });
    });
};


//END TO CHANGE


const animateHideMenu = (durationTime, delayTime) => { //animation showing burger menu and hiding side menu
    VariablesJQuery.container.animate({
        width: 'toggle',
        padding: '0px',
    }, durationTime,() => {
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