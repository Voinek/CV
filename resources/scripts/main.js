"use strict";
const VariablesJQuery = {
    intro : $('#intro'), 
    exitPopup : $('#exit-popup'),
    popup : $('#popup'),
    textPopup : $('#text-popup'),
    loginRegisterButton : $('#login-register-button'),
    login : $('#login'),
    loginRegisterSwitch : $('#login-register-switch'),
    confirmPassword : $('#confirm-password'),
    password : $('#password'),
    password2 : $('#password2'),
    container : $('#container'),
    containerContent : $('#container-content'),
    containerContentMenu : $('#container-content2'),
    currentFramework: $('#framework'),
    menuStageOne: $('.menu-appear-stage-one'),
    menuStageTwo: $('.menu-appear-stage-two'),
    menuStageThree: $('.menu-appear-stage-three'),
    menuStageFour: $('.menu-appear-stage-four'),
    burgerMenu: $('#burger-menu-button'),
}

$(document).ready(()=>{
    //Intro text and writing effect function
    const writingEffect = ()=>{
        let text = "Hello World!";
        let writtenText = "H";
        let lettersWritten = 1;
    
        const writingInterval = setInterval(()=>{
            writtenText += text[lettersWritten];
            lettersWritten++;
            if(lettersWritten<=text.length){
                VariablesJQuery.intro.text(writtenText);
            }
            else clearInterval(writingInterval);
        },150);
    }
    writingEffect();

    addEventListener('resize', ()=>{ //
        PopupSettings.position.top=window.innerHeight/2;
        PopupSettings.position.left=window.innerWidth/2;
    });

    VariablesJQuery.exitPopup.on('click',()=>{ //exit button in popup functionality
        VariablesJQuery.popup.fadeOut(500);
        removeEventListener('resize', ()=>{ // memory clear
            VariablesJQuery.popup.css('top', PopupSettings.position.top);
            VariablesJQuery.popup.css('left', PopupSettings.position.left);
        })
    })

    const Popup = {
        show : (content,time) => {//popup show function
            VariablesJQuery.textPopup.text(content);
            VariablesJQuery.popup.css('top', PopupSettings.position.top);
            VariablesJQuery.popup.css('left', PopupSettings.position.left);
            VariablesJQuery.popup.show();
            setTimeout(()=>{
                VariablesJQuery.popup.fadeOut(500);
            },time);
        },
        resize : (time) => { // popup change position on resize
            addEventListener('resize', ()=>{
                VariablesJQuery.popup.css('top', PopupSettings.position.top);
                VariablesJQuery.popup.css('left', PopupSettings.position.left);
            })
            setTimeout(()=>{
                removeEventListener('resize', ()=>{ // memory clear
                    VariablesJQuery.popup.css('top', PopupSettings.position.top);
                    VariablesJQuery.popup.css('left', PopupSettings.position.left);
                })
            },time)
        }
    }

    VariablesJQuery.loginRegisterButton.on('click', ()=>{ //login button functionality
        //verification of login and pass
        if(VariablesJQuery.login.val().length>=LoginCredentials.maxLoginLength-1 || VariablesJQuery.login.val().length<=LoginCredentials.minLoginLength-1){
            Popup.show(`Login needs to be ${LoginCredentials.minLoginLength}-${LoginCredentials.maxLoginLength} characters long!`, PopupSettings.time);
            Popup.resize(PopupSettings.time);
        }
        else if (VariablesJQuery.password.val().length<=LoginCredentials.minPasswordLength-1 || VariablesJQuery.password.val().length>=LoginCredentials.maxPasswordLength-1){
            Popup.show(`Password needs to be ${LoginCredentials.minPasswordLength}-${LoginCredentials.maxPasswordLength} characters long!`, PopupSettings.time);
            Popup.resize(PopupSettings.time);
        }
        else if (menuStatus=='register' && VariablesJQuery.password.val()!=VariablesJQuery.password2.val()){
            Popup.show(`Passwords doesn't match!`, PopupSettings.time);
            Popup.resize(PopupSettings.time);
        }
        else {
            animateMenu(AnimationSettings.durationTime, AnimationSettings.delayTime);
        }
    })

    VariablesJQuery.loginRegisterSwitch.on('click', ()=>{ //"registered?" button functionality
        if(menuStatus=='login'){
            VariablesJQuery.password2.slideDown(500);
            VariablesJQuery.confirmPassword.slideDown(500);
            VariablesJQuery.loginRegisterSwitch.text('Already have account? Log In!');
            VariablesJQuery.loginRegisterButton.text('Register');
            menuStatus='register';
        }
        else {
            VariablesJQuery.password2.slideUp(500);
            VariablesJQuery.confirmPassword.slideUp(500);
            VariablesJQuery.loginRegisterSwitch.text('Not registered?');
            VariablesJQuery.loginRegisterButton.text('Log In');
            menuStatus='login';
        }
    })
});

//menu buttons
VariablesJQuery.burgerMenu.on('click', ()=>{ // Hide burger menu and show menu again
    animateBurgerMenu(500,0);
})

document.querySelectorAll("#container-content2 p:nth-child(n+2)").forEach((item, index) => { // add "hide side menu" animation to every item in menu
    item.addEventListener('click', ()=>{
        animateHideMenu(500,500);
        switch(index){ // button redirecting to another js file
            case 0:
                const meditate = new Meditate();
            break;
            case 1:

            break;
            case 2:

            break;
            case 3:

            break;
            case 4:

            break;
            case 5:

            break;
            case 6:

            break;
            case 7:

            break;
            case 8:

            break;
            case 9:

            break;
            default:
                
            break;
        }
    })
})



