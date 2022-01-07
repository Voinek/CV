"use strict";
//HTML variables

$(document).ready(()=>{
    //Intro text writting effect
    const writingEffect = ()=>{
        let text = "Hello World!";
        let writtenText = "H";
        let lettersWritten = 1;
    
        const writingInterval = setInterval(()=>{
            writtenText += text[lettersWritten];
            lettersWritten++;
            if(lettersWritten<=text.length){
                $('#intro').text(writtenText);
            }
            else clearInterval(writingInterval);
        },150);
    }
    writingEffect();

    addEventListener('resize', ()=>{ //
        PopupSettings.position.top=window.innerHeight/2;
        PopupSettings.position.left=window.innerWidth/2;
    });

    $('#exitPopup').on('click',()=>{ //exit button in popup functionality
        $('#popup').fadeOut(500);
        removeEventListener('resize', ()=>{ // memory clear
            $('#popup').css('top', PopupSettings.position.top);
            $('#popup').css('left', PopupSettings.position.left);
        })
    })

    const Popup = {
        show : (content,time) => {//popup show function
            $('#popupText').text(content);
            $('#popup').css('top', PopupSettings.position.top);
            $('#popup').css('left', PopupSettings.position.left);
            $('#popup').show();
            setTimeout(()=>{
                $('#popup').fadeOut(500);
            },time);
        },
        resize : (time) => { // popup change position on resize
            addEventListener('resize', ()=>{
                $('#popup').css('top', PopupSettings.position.top);
                $('#popup').css('left', PopupSettings.position.left);
            })
            setTimeout(()=>{
                removeEventListener('resize', ()=>{ // memory clear
                    $('#popup').css('top', PopupSettings.position.top);
                    $('#popup').css('left', PopupSettings.position.left);
                })
            },time)
        }
    }

    $('#loginBtn').on('click', ()=>{ //login button functionality
        //verification of login and pass
        if($('#login').val().length>=LoginCredentials.maxLoginLength-1 || $('#login').val().length<=LoginCredentials.minLoginLength-1){
            Popup.show(`Login needs to be ${LoginCredentials.minLoginLength}-${LoginCredentials.maxLoginLength} characters long!`, PopupSettings.time);
            Popup.resize(PopupSettings.time);
        }
        else if ($('#pass').val().length<=LoginCredentials.minPasswordLength-1 || $('#pass').val().length>=LoginCredentials.maxPasswordLength-1){
            Popup.show(`Password needs to be ${LoginCredentials.minPasswordLength}-${LoginCredentials.maxPasswordLength} characters long!`, PopupSettings.time);
            Popup.resize(PopupSettings.time);
        }
        else if (menuStatus=='register' && $('#pass').val()!=$('#pass2').val()){
            Popup.show(`Passwords doesn't match!`, PopupSettings.time);
            Popup.resize(PopupSettings.time);
        }
        else {
            $('#container').addClass('scretch');
            $('#container-content').fadeOut(500);
            setTimeout(()=>{
                $('#container-content2').fadeIn(500);
            },500)
            
        }
    })

    $('#registerBtn').on('click', ()=>{ //register button functionality
        if(menuStatus=='login'){
            $('#pass2').slideDown(500);
            $('#confirmPass').slideDown(500);
            $('#registerBtn').text('Already have account? Log In!');
            $('#loginBtn').text('Register');
            menuStatus='register';
        }
        else {
            $('#pass2').slideUp(500);
            $('#confirmPass').slideUp(500);
            $('#registerBtn').text('Not registered?');
            $('#loginBtn').text('Log In');
            menuStatus='login';
        }
    })
});
