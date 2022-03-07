{
    const keyboard = $('.keyboard');
    const keyboardKeys = $('.keyboardKeys');
    const keysString = '`1234567890-=BTqwertyuiop[]\\Casdfghjkl;\'ESzxcvbnm,./SCASAC';
    let keysStringWithoutSpecials = '`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./';
    keysStringWithoutSpecials = keysStringWithoutSpecials.split('');
    const keysArray = keysString.split('');
    let currentText = '';
    let capsOn = false;

    keysArray[13] = '<span class="material-icons-outlined">west</span>';
    keysArray[14] = 'tab';
    keysArray[28] = 'caps';
    keysArray[40] = 'enter';
    keysArray[41] = 'shift';
    keysArray[52] = 'shift';
    keysArray[53] = 'ctrl';
    keysArray[54] = 'alt';
    keysArray[55] = '<span class="material-icons-outlined">maximize</span>';
    keysArray[56] = 'alt';
    keysArray[57] = 'ctrl';

    const specials = [13, 14, 28, 40, 41, 52, 53, 54, 55, 56, 57];
    keysArray.forEach((item, index) => {
        const newButton = document.createElement("button");
        newButton.innerHTML = item;
        newButton.classList.add('keyKeyboard');
        if (specials.includes(index)) {
            newButton.classList.add('special');
        } else {
            newButton.classList.add('regular');

        }
        keyboardKeys.append(newButton);
    })

    const addSpace = (place) => {
        const lineBreak = document.createElement("div");
        lineBreak.classList.add('breakKeyboard');
        place.after(lineBreak);
    }

    addSpace($(".keyKeyboard")[13]);
    addSpace($(".keyKeyboard")[27]);
    addSpace($(".keyKeyboard")[40]);
    addSpace($(".keyKeyboard")[52]);

    $('.keyKeyboard').eq(28).click(() => {
        if (capsOn == false) {
            $('.regular').each(function (index) {
                switch (index) {
                    case 0:
                        $(this).text('~')
                        break;
                    case 1:
                        $(this).text('!')
                        break;
                    case 2:
                        $(this).text('@')
                        break;
                    case 3:
                        $(this).text('#')
                        break;
                    case 4:
                        $(this).text('$')
                        break;
                    case 5:
                        $(this).text('%')
                        break;
                    case 6:
                        $(this).text('^')
                        break;
                    case 7:
                        $(this).text('&')
                        break;
                    case 8:
                        $(this).text('*')
                        break;
                    case 9:
                        $(this).text('(')
                        break;
                    case 10:
                        $(this).text(')')
                        break;
                    case 11:
                        $(this).text('_')
                        break;
                    case 12:
                        $(this).text('+')
                        break;
                    case 23:
                        $(this).text('{')
                        break;
                    case 24:
                        $(this).text('}')
                        break;
                    case 25:
                        $(this).text('|')
                        break;
                    case 35:
                        $(this).text(':')
                        break;
                    case 36:
                        $(this).text('"')
                        break;
                    case 44:
                        $(this).text('<')
                        break;
                    case 45:
                        $(this).text('>')
                        break;
                    case 46:
                        $(this).text('?')
                        break;
                    default:
                        let text = $(this).text();
                        text = text.toUpperCase();
                        $(this).text(text);
                        break;
                }
                capsOn = true;
                $('.keyKeyboard').eq(28).addClass('keyClicked');
            })
        } else {
            $('.regular').each(function (index) {
                $(this).text(keysStringWithoutSpecials[index]);
                capsOn = false;
                $('.keyKeyboard').eq(28).removeClass('keyClicked');
            })

        }
    })
    $('.keyKeyboard').eq(13).click(() => {
        currentText = currentText.slice(0, currentText.length - 1);
        $('.keyboardInput').val(currentText);
    })


    $('.regular').each(function () {
        $(this).click(() => {
            let clickedLetter = $(this).text();
            currentText += clickedLetter
            $('.keyboardInput').val(currentText);
        })
    })
    $('.keyboardInput').keyup(function (e) {
        currentText = $('.keyboardInput').val();
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 192:
                keyboardButtonClicked($('.keyKeyboard').eq(0), 'rgba(255, 255, 255, 0.295)');
                break;
            case 49:
                keyboardButtonClicked($('.keyKeyboard').eq(1), 'rgba(255, 255, 255, 0.295)');
                break;
            case 50:
                keyboardButtonClicked($('.keyKeyboard').eq(2), 'rgba(255, 255, 255, 0.295)');
                break;
            case 51:
                keyboardButtonClicked($('.keyKeyboard').eq(3), 'rgba(255, 255, 255, 0.295)');
                break;
            case 52:
                keyboardButtonClicked($('.keyKeyboard').eq(4), 'rgba(255, 255, 255, 0.295)');
                break;
            case 53:
                keyboardButtonClicked($('.keyKeyboard').eq(5), 'rgba(255, 255, 255, 0.295)');
                break;
            case 54:
                keyboardButtonClicked($('.keyKeyboard').eq(6), 'rgba(255, 255, 255, 0.295)');
                break;
            case 55:
                keyboardButtonClicked($('.keyKeyboard').eq(7), 'rgba(255, 255, 255, 0.295)');
                break;
            case 56:
                keyboardButtonClicked($('.keyKeyboard').eq(8), 'rgba(255, 255, 255, 0.295)');
                break;
            case 57:
                keyboardButtonClicked($('.keyKeyboard').eq(9), 'rgba(255, 255, 255, 0.295)');
                break;
                9
            case 48:
                keyboardButtonClicked($('.keyKeyboard').eq(10), 'rgba(255, 255, 255, 0.295)');
                break;
            case 189:
                keyboardButtonClicked($('.keyKeyboard').eq(11), 'rgba(255, 255, 255, 0.295)');
                break;
            case 187:
                keyboardButtonClicked($('.keyKeyboard').eq(12), 'rgba(255, 255, 255, 0.295)');
                break;
            case 8:
                keyboardButtonClicked($('.keyKeyboard').eq(13), 'rgba(255, 255, 255, 0.295)');
                break;
            case 9:
                keyboardButtonClicked($('.keyKeyboard').eq(14), 'rgba(255, 255, 255, 0.295)');
                break;
            case 81:
                keyboardButtonClicked($('.keyKeyboard').eq(15), 'rgba(255, 255, 255, 0.295)');
                break;
            case 87:
                keyboardButtonClicked($('.keyKeyboard').eq(16), 'rgba(255, 255, 255, 0.295)');
                break;
            case 69:
                keyboardButtonClicked($('.keyKeyboard').eq(17), 'rgba(255, 255, 255, 0.295)');
                break;
            case 82:
                keyboardButtonClicked($('.keyKeyboard').eq(18), 'rgba(255, 255, 255, 0.295)');
                break;
            case 84:
                keyboardButtonClicked($('.keyKeyboard').eq(19), 'rgba(255, 255, 255, 0.295)');
                break;
            case 89:
                keyboardButtonClicked($('.keyKeyboard').eq(20), 'rgba(255, 255, 255, 0.295)');
                break;
            case 85:
                keyboardButtonClicked($('.keyKeyboard').eq(21), 'rgba(255, 255, 255, 0.295)');
                break;
            case 73:
                keyboardButtonClicked($('.keyKeyboard').eq(22), 'rgba(255, 255, 255, 0.295)');
                break;
            case 79:
                keyboardButtonClicked($('.keyKeyboard').eq(23), 'rgba(255, 255, 255, 0.295)');
                break;
            case 80:
                keyboardButtonClicked($('.keyKeyboard').eq(24), 'rgba(255, 255, 255, 0.295)');
                break;
            case 219:
                keyboardButtonClicked($('.keyKeyboard').eq(25), 'rgba(255, 255, 255, 0.295)');
                break;
            case 221:
                keyboardButtonClicked($('.keyKeyboard').eq(26), 'rgba(255, 255, 255, 0.295)');
                break;
            case 220:
                keyboardButtonClicked($('.keyKeyboard').eq(27), 'rgba(255, 255, 255, 0.295)');
                break;
            case 20:
                keyboardButtonClicked($('.keyKeyboard').eq(28), 'rgba(255, 255, 255, 0.295)');
                break;
            case 65:
                keyboardButtonClicked($('.keyKeyboard').eq(29), 'rgba(255, 255, 255, 0.295)');
                break;
            case 83:
                keyboardButtonClicked($('.keyKeyboard').eq(30), 'rgba(255, 255, 255, 0.295)');
                break;
            case 68:
                keyboardButtonClicked($('.keyKeyboard').eq(31), 'rgba(255, 255, 255, 0.295)');
                break;
            case 70:
                keyboardButtonClicked($('.keyKeyboard').eq(32), 'rgba(255, 255, 255, 0.295)');
                break;
            case 71:
                keyboardButtonClicked($('.keyKeyboard').eq(33), 'rgba(255, 255, 255, 0.295)');
                break;
            case 72:
                keyboardButtonClicked($('.keyKeyboard').eq(34), 'rgba(255, 255, 255, 0.295)');
                break;
            case 74:
                keyboardButtonClicked($('.keyKeyboard').eq(35), 'rgba(255, 255, 255, 0.295)');
                break;
            case 75:
                keyboardButtonClicked($('.keyKeyboard').eq(36), 'rgba(255, 255, 255, 0.295)');
                break;
            case 76:
                keyboardButtonClicked($('.keyKeyboard').eq(37), 'rgba(255, 255, 255, 0.295)');
                break;
            case 186:
                keyboardButtonClicked($('.keyKeyboard').eq(38), 'rgba(255, 255, 255, 0.295)');
                break;
            case 222:
                keyboardButtonClicked($('.keyKeyboard').eq(39), 'rgba(255, 255, 255, 0.295)');
                break;
            case 13:
                keyboardButtonClicked($('.keyKeyboard').eq(40), 'rgba(255, 255, 255, 0.295)');
                break;
            case 16:
                keyboardButtonClicked($('.keyKeyboard').eq(41), 'rgba(255, 255, 255, 0.295)');
                keyboardButtonClicked($('.keyKeyboard').eq(52), 'rgba(255, 255, 255, 0.295)');
                break;
            case 90:
                keyboardButtonClicked($('.keyKeyboard').eq(42), 'rgba(255, 255, 255, 0.295)');
                break;
            case 88:
                keyboardButtonClicked($('.keyKeyboard').eq(43), 'rgba(255, 255, 255, 0.295)');
                break;
            case 67:
                keyboardButtonClicked($('.keyKeyboard').eq(44), 'rgba(255, 255, 255, 0.295)');
                break;
            case 86:
                keyboardButtonClicked($('.keyKeyboard').eq(45), 'rgba(255, 255, 255, 0.295)');
                break;
            case 66:
                keyboardButtonClicked($('.keyKeyboard').eq(46), 'rgba(255, 255, 255, 0.295)');
                break;
            case 78:
                keyboardButtonClicked($('.keyKeyboard').eq(47), 'rgba(255, 255, 255, 0.295)');
                break;
            case 77:
                keyboardButtonClicked($('.keyKeyboard').eq(48), 'rgba(255, 255, 255, 0.295)');
                break;
            case 188:
                keyboardButtonClicked($('.keyKeyboard').eq(49), 'rgba(255, 255, 255, 0.295)');
                break;
            case 190:
                keyboardButtonClicked($('.keyKeyboard').eq(50), 'rgba(255, 255, 255, 0.295)');
                break;
            case 191:
                keyboardButtonClicked($('.keyKeyboard').eq(51), 'rgba(255, 255, 255, 0.295)');
                break;
            case 17:
                keyboardButtonClicked($('.keyKeyboard').eq(53), 'rgba(255, 255, 255, 0.295)');
                keyboardButtonClicked($('.keyKeyboard').eq(57), 'rgba(255, 255, 255, 0.295)');
                break;
            case 18:
                keyboardButtonClicked($('.keyKeyboard').eq(54), 'rgba(255, 255, 255, 0.295)');
                keyboardButtonClicked($('.keyKeyboard').eq(56), 'rgba(255, 255, 255, 0.295)');
                break;
            case 32:
                keyboardButtonClicked($('.keyKeyboard').eq(55), 'rgba(255, 255, 255, 0.295)');
                break;
        }
    })
    async function keyboardButtonClicked(element, newColor) {
        function changeColor() {
            element.css('background-color', newColor);

        }

        function changeBackColor() {
            setTimeout(() => {
                element.css('background-color', '');
            }, 400)
        }

        await changeColor()
        await changeBackColor()
    }

    var appOffVirtualKeyboard = () => {
        $('.appSpaceVirtualKeyboard').hide();
    }
}