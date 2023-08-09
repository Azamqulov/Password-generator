let password = document.querySelector('#buuton')

function gamePassword(){
    let chars ="0123456789qwertyuiopasdfghj@klzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    let passwordLenght = 8
    let password = ''
    for(let i = 0 ; i < passwordLenght; i++){
        let randomNumber = Math.floor(Math.random ()*chars.length)
        password += chars.substring(randomNumber, randomNumber + 1 )
    }
    document.querySelector('#password').value = password;
}
// copy Function
function gameCopy (){
    let copyText = document.querySelector('#password')
    copyText.select()
    copyText.setSelectionRange(0,999)
    document.execCommand('copy')
}