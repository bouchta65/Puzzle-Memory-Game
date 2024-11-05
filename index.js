const loadingScreen = document.getElementById("loadingScreen");
const buttoncontainer = document.getElementById("butt");
const buttoncontainer2 = document.getElementById("butt2");

setTimeout(() => {
    document.querySelector('.background').classList.add('show');
    loadingScreen.classList.add('hidden');
}, 5000);

setTimeout(() => {
    const titre = document.getElementById('Titre');
    const titretext = "Welcome to 3S2M Game ";
    let index = 0;

    function typeCharacter() {
        if (index < titretext.length) {
            titre.textContent += titretext.charAt(index);
            index++;
            setTimeout(typeCharacter, 50); 
        }
    }
    typeCharacter();
}, 7000);




 


setTimeout(() => {
    buttoncontainer.classList.add('show');
}, 9000);

setTimeout(() => {
    buttoncontainer2.classList.add('show');
}, 9000);


buttoncontainer.addEventListener('click',()=>{
    window.location.href = 'pages/level1.html';

   })


   buttoncontainer2.addEventListener('click',()=>{
    window.location.href = 'pages/rules.html';

   })