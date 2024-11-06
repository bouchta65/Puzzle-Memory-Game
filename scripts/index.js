const button = document.getElementById("butt");
const button2 = document.getElementById("butt2");


setTimeout(() => {
    document.querySelector('.background').classList.add('show');
},10);

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
}, 1000);








 


setTimeout(() => {
    button.classList.add('show');
}, 3000);

setTimeout(() => {
    button2.classList.add('show');
}, 3000);


