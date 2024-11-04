
let div1 = document.querySelector("#box1");
let div2 = document.querySelector("#box2");
let div3 = document.querySelector("#box3");
let div4 = document.querySelector("#box4");
let flip = document.querySelector("#flipcard");
let flip1 = document.querySelector("#flipcard1");
let flip2 = document.querySelector("#flipcard2");
let flip3 = document.querySelector("#flipcard3");
let selectedColors = [];
let selectedDivs = [];

flip.addEventListener('click', function() {
    if (!div1.classList.contains('clicked')) {
        flip.classList.toggle('flip');
        selectedColor(div1, "red");
    }
});
flip1.addEventListener('click', function() {
    if (!div2.classList.contains('clicked')) {
    flip1.classList.toggle('flip');
    selectedColor(div2, "green");
    }
});

flip2.addEventListener('click', function() {
    if (!div3.classList.contains('clicked')) {
        flip2.classList.toggle('flip');
    selectedColor(div3, "green");
}
});

flip3.addEventListener('click', function() {
    if (!div4.classList.contains('clicked')) {
        flip3.classList.toggle('flip');
    selectedColor(div4, "red");
}
});




function selectedColor(div, color) {

    if (!div.classList.contains('clicked')) {
        div.style.backgroundColor = color;
        selectedColors.push(color);
        selectedDivs.push(div)
        div.classList.add('clicked'); 

        if (selectedColors.length === 2) {
            Memory();
        }
    }
}

function Memory() {

        const resultMessage = document.getElementById('resultMessage');

        if (selectedColors[0] === selectedColors[1]) {
            for (let i = 0; i < selectedDivs.length; i++) {
                selectedDivs[i].style.pointerEvents = 'none'; 
            }
        } else {
            resultMessage.textContent = "Nope";
            
            setTimeout(function() {
                for (let i = 0; i < selectedDivs.length; i++) {
                    selectedDivs[i].style.backgroundColor = 'black';

                    if (selectedDivs[i] === div1) flip.classList.remove('flip');
                    if (selectedDivs[i] === div2) flip1.classList.remove('flip');
                    if (selectedDivs[i] === div3) flip2.classList.remove('flip');
                    if (selectedDivs[i] === div4) flip3.classList.remove('flip');
                }
            }, 1000); 
        }

        resultMessage.classList.add('show');
        setTimeout(function() {
            resultMessage.classList.remove('show');
            resultMessage.textContent = '';
        }, 2000);

        setTimeout(function() {

            selectedColors = [];
            selectedDivs = [];
            div1.classList.remove('clicked');
            div2.classList.remove('clicked');
            div3.classList.remove('clicked');
            div4.classList.remove('clicked');
        }, 1100); 
  
}



