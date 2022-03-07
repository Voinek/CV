{
    const buttons = document.querySelectorAll('.meditateButtons');
    const body = document.body;
    const startStop = document.querySelector('.pauseRenewButton');
    const appBox = document.querySelector('.appSpaceMeditate');
    let time = 5 * 60;
    let theme = 1;
    let buttonStatus = true;
    const audio = document.createElement('audio');
    let timePassedInterval;

    appBox.addEventListener('mouseover', () => {
        appBox.classList.remove('appBoxActive');
    })
    appBox.addEventListener('mouseout', () => {
        appBox.classList.add('appBoxActive');
    })

    buttons[0].addEventListener('click', () => {
        time = 5 * 60;
        borderClearTime();
        buttons[0].style.border = 'solid grey 3px';
    })
    buttons[1].addEventListener('click', () => {
        time = 10 * 60;
        borderClearTime();
        buttons[1].style.border = 'solid grey 3px';
    })
    buttons[2].addEventListener('click', () => {
        time = 30 * 60;
        borderClearTime();
        buttons[2].style.border = 'solid grey 3px';
    })
    buttons[3].addEventListener('click', () => {
        theme = 1;
        borderClearTheme();
        buttons[3].style.border = 'solid grey 3px';
    })
    buttons[4].addEventListener('click', () => {
        theme = 2;
        borderClearTheme();
        buttons[4].style.border = 'solid grey 3px';
    })
    buttons[5].addEventListener('click', () => {
        theme = 3;
        borderClearTheme();
        buttons[5].style.border = 'solid grey 3px';
    })


    const meditateApp = () => {
        buttonStatus = !buttonStatus;
        if (buttonStatus == false) {
            startStop.innerHTML = '<h2>Stop</h2>'
            switch (theme) {
                case 1:
                    body.style.backgroundImage = 'url(../resources/images/campfire.jpg)'
                    sound('../resources/sounds/campfire.mp3');
                    countTime(time);
                    break;
                case 2:
                    body.style.backgroundImage = 'url(../resources/images/forest.jpg)';
                    sound('../resources/sounds/forest.mp3');
                    countTime(time);
                    break;
                case 3:
                    body.style.backgroundImage = 'url(../resources/images/sea.jpg)'
                    sound('../resources/sounds/sea.mp3');
                    countTime(time);
                    break;
                default:
                    console.log('error, meditateApp theme != 1,2,3');
                    break;
            }
        } else {
            startStop.innerHTML = '<h2>Start</h2>'
            audio.src = "";
            clearInterval(timePassedInterval);
        }
    }
    startStop.addEventListener('click', () => {
        meditateApp()
    })

    const borderClearTheme = () => {
        document.querySelectorAll('.themeButton').forEach(item => {
            item.style.border = 'solid black 0px';
        })
    }
    const borderClearTime = () => {
        document.querySelectorAll('.timeButton').forEach(item => {
            item.style.border = 'solid black 0px';
        })
    }
    const sound = url => {
        audio.src = url;
        audio.autoplay = true
        audio.onended = () => audio.src = '';
    }
    const countTime = (maxTime) => {
        let time = maxTime;
        timePassed = 0;
        timePassedInterval = setInterval(() => {
            if (timePassed < maxTime) {
                timePassed++;
                document.querySelector('.progressBar').style.strokeDashoffset = `calc(440 - (440 * ${timePassed / time * 100}) / 100)`;
            } else {
                clearInterval(timePassedInterval);
                audio.src = '';
                timePassed = 0;
            }
        }, 1000)
    }
    var appOffMeditate = () => {
        clearInterval(timePassedInterval);
        body.style.backgroundImage = "none";
        appBox.style.display = "none";
        audio.src = "";
        VariablesJQuery.containerContentMenu.css("color", "rgb(116, 116, 116)")

    }
}