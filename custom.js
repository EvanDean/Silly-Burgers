// ------------------------------ BUN SECTION --------------------------------------------------------------------------------------------

// ASSIGNS FORM ELEMENTS AND IMAGES TO VARIABLES

// FORMS
let plainBun = document.getElementById('plainBun');
let brownBun = document.getElementById('brownBun');
let ciabattaBun = document.getElementById('ciabattaBun');
let cupcakeBun = document.getElementById('cupcakeBun'); 

// TOP BUNS (IMAGES)
let plainTop = document.getElementById("plainBunTop");
let brownTop = document.getElementById("brownBunTop");
let ciabattaTop = document.getElementById("ciabattaBunTop");
let cupcakeTop = document.getElementById("cupcakeBunTop");

// BOTTOM BUNS (IMAGES)
let plainBottom = document.getElementById('plainBunBottom');
let brownBottom = document.getElementById('brownBunBottom');
let ciabattaBottom = document.getElementById('ciabattaBunBottom');
let cupcakeBottom = document.getElementById('cupcakeBunBottom');

// HIDES TOP BUN IMAGES

plainTop.style.display = 'none';
brownTop.style.display = 'none';
ciabattaTop.style.display = 'none';
cupcakeTop.style.display = 'none';

// HIDES BOTTOM BUN IMAGES

plainBottom .style.display = 'none';
brownBottom.style.display = 'none';
ciabattaBottom.style.display = 'none';
cupcakeBottom.style.display = 'none';

// DISPLAYS BUN IMAGES WHEN FORM CLICKED

plainBun.onclick = function() {
    plainTop.style.display = 'block';
    plainBottom.style.display = 'block';
    brownTop.style.display = 'none';
    brownBottom.style.display = 'none';
    ciabattaTop.style.display = 'none';
    ciabattaBottom.style.display = 'none';
    cupcakeTop.style.display = 'none';
    cupcakeBottom.style.display = 'none';
}
brownBun.onclick = function() {
    brownTop.style.display = 'block';
    brownBottom.style.display = 'block';
    plainTop.style.display = 'none';
    plainBottom.style.display = 'none';
    ciabattaTop.style.display = 'none';
    ciabattaBottom.style.display = 'none';
    cupcakeTop.style.display = 'none';
    cupcakeBottom.style.display = 'none';
}
ciabattaBun.onclick = function() {
    ciabattaTop.style.display = 'block';
    ciabattaBottom.style.display = 'block';
    brownTop.style.display = 'none';
    brownBottom.style.display = 'none';
    plainTop.style.display = 'none';
    plainBottom.style.display = 'none';
    cupcakeTop.style.display = 'none';
    cupcakeBottom.style.display = 'none';
}
cupcakeBun.onclick = function() {
    cupcakeTop.style.display = 'block';
    cupcakeBottom.style.display = 'block';
    brownTop.style.display = 'none';
    brownBottom.style.display = 'none';
    ciabattaTop.style.display = 'none';
    ciabattaBottom.style.display = 'none';
    plainTop.style.display = 'none';
    plainBottom.style.display = 'none';
}

// ------------------------------ SAUCE SECTION --------------------------------------------------------------------------------------------

// ASSIGNS SAUCE FORMS AND IMAGES TO VARIABLES

// FORMS
let bbq = document.getElementById('bbq');
let chilli = document.getElementById('chilli');
let ketchup = document.getElementById('ketchup');
let mayo = document.getElementById('mayo');
let mustard = document.getElementById('mustard');

// SAUCE IMAGES
let bbqImg = document.getElementById('bbqImg');
let chilliImg = document.getElementById('chilliImg');
let ketchupImg = document.getElementById('ketchupImg');
let mayoImg = document.getElementById('mayoImg');
let mustardImg = document.getElementById('mustardImg');

// HIDES SAUCE IMAGES

bbqImg.style.display = 'none';
chilliImg.style.display = 'none';
ketchupImg.style.display = 'none';
mayoImg.style.display = 'none';
mustardImg.style.display = 'none';

// DISPLAYS SAUCE IMAGES BY CLICKING THE FORM

function bbqSauceFunction() {
    if (bbqImg.style.display === 'none') {
        bbqImg.style.display = 'block';
    } else {
        bbqImg.style.display = 'none';
    }
}

function chilliSauceFunction() {
    if (chilliImg.style.display === 'none') {
        chilliImg.style.display = 'block';
    } else {
        chilliImg.style.display = 'none';
    }
}

function ketchupSauceFunction() {
    if (ketchupImg.style.display === 'none') {
        ketchupImg.style.display = 'block';
    } else {
        ketchupImg.style.display = 'none';
    }
}

function mayoSauceFunction() {
    if (mayoImg.style.display === 'none') {
        mayoImg.style.display = 'block';
    } else {
        mayoImg.style.display = 'none';
    }
}

function mustardSauceFunction() {
    if (mustardImg.style.display === 'none') {
        mustardImg.style.display = 'block';
    } else {
        mustardImg.style.display = 'none';
    }
}

// ------------------------------ TOPPINGS SECTION----------------------------------------------------------------------------------------

// ASSIGNS TOPPINGS FORMS AND IMAGES TO VARIABLES

// FORMS
let arugula = document.getElementById('arugula');
let avocado = document.getElementById('avocado');
let bacon = document.getElementById('bacon');
let cheese = document.getElementById('cheese');
let egg = document.getElementById('egg');
let lettuce = document.getElementById('lettuce');
let mushrooms = document.getElementById('mushrooms');
let onion = document.getElementById('onion');
let pickles = document.getElementById('pickles');
let tomato = document.getElementById('tomato');
let allToppings = document.getElementById('allToppings');

// IMAGES
let arugulaImg = document.getElementById('arugulaImg');
let avoImg = document.getElementById('avoImg');
let baconImg = document.getElementById('baconImg');
let cheeseImg = document.getElementById('cheeseImg');
let eggImg = document.getElementById('eggImg');
let lettuceImg = document.getElementById('lettuceImg');
let onionImg = document.getElementById('onionImg');
let picklesImg = document.getElementById('picklesImg');
let tomatoImg = document.getElementById('tomatoImg');

// HIDES THE IMAGES

arugulaImg.style.display = 'none';
avoImg.style.display = 'none';
baconImg.style.display = 'none';
cheeseImg.style.display = 'none';
eggImg.style.display = 'none';
lettuceImg.style.display = 'none';
onionImg.style.display = 'none';
picklesImg.style.display = 'none';
tomatoImg.style.display = 'none';

// DISPLAYS TOPPINGS IMAGES BY CLICKING THE FORM

function arugulaDisplayFunction() {
    if (arugulaImg.style.display === 'none') {
        arugulaImg.style.display = 'block';
    } else {
        arugulaImg.style.display = 'none';
    }
}

function avoDisplayFunction() {
    if (avoImg.style.display === 'none') {
        avoImg.style.display = 'block';
    } else {
        avoImg.style.display = 'none';
    }
}

function baconDisplayFunction() {
    if (baconImg.style.display === 'none') {
        baconImg.style.display = 'block';
    } else {
        baconImg.style.display = 'none';
    }
}

function cheeseDisplayFunction() {
    if (cheeseImg.style.display === 'none') {
        cheeseImg.style.display = 'block';
    } else {
        cheeseImg.style.display = 'none';
    }
}

function eggDisplayFunction() {
    if (eggImg.style.display === 'none') {
        eggImg.style.display = 'block';
    } else {
        eggImg.style.display = 'none';
    }
}

function lettuceDisplayFunction() {
    if (lettuceImg.style.display === 'none') {
        lettuceImg.style.display = 'block';
    } else {
        lettuceImg.style.display = 'none';
    }
}

function onionDisplayFunction() {
    if (onionImg.style.display === 'none') {
        onionImg.style.display = 'block';
    } else {
        onionImg.style.display = 'none';
    }
}

function picklesDisplayFunction() {
    if (picklesImg.style.display === 'none') {
        picklesImg.style.display = 'block';
    } else {
        picklesImg.style.display = 'none';
    }
}

function tomatoDisplayFunction() {
    if (tomatoImg.style.display === 'none') {
        tomatoImg.style.display = 'block';
    } else {
        tomatoImg.style.display = 'none';
    }
}

function allToppingsFunction() {
    if (arugulaImg.style.display === 'block' && avoImg.style.display === 'block' && baconImg.style.display === 'block' && cheeseImg.style.display === 'block' && eggImg.style.display === 'block' && lettuceImg.style.display === 'block' && onionImg.style.display === 'block' && picklesImg.style.display === 'block' && tomatoImg.style.display === 'block') {
        arugulaImg.style.display ='none';
        avoImg.style.display = 'none';
        baconImg.style.display = 'none';
        cheeseImg.style.display = 'none';
        eggImg.style.display = 'none';
        lettuceImg.style.display = 'none';
        onionImg.style.display = 'none';
        picklesImg.style.display = 'none';
        tomatoImg.style.display = 'none';
    } else {
        arugulaImg.style.display = 'block';
        avoImg.style.display = 'block';
        baconImg.style.display = 'block';
        cheeseImg.style.display = 'block';
        eggImg.style.display = 'block';
        lettuceImg.style.display = 'block';
        onionImg.style.display = 'block';
        picklesImg.style.display = 'block';
        tomatoImg.style.display = 'block';
    }
}

// ------------------------------ PATTY SECTION----------------------------------------------------------------------------------------

// ASSIGNS PATTY FORMS AND IMAGES TO VARIABLES

//FORMS
let beefPatty = document.getElementById('beefPatty');
let chickenPatty = document.getElementById('chickenPatty');
let veganPatty = document.getElementById('veganPatty');
let fishPatty = document.getElementById('fishPatty');

// IMAGES
let beefPattyImg = document.getElementById('beefPattyImg');
let chickenPattyImg = document.getElementById('chickenPattyImg');
let veganPattyImg = document.getElementById('veganPattyImg');
let fishPattyImg = document.getElementById('fishPattyImg');

//HIDES IMAGES

beefPattyImg.style.display = 'none';
chickenPattyImg.style.display = 'none';
veganPattyImg.style.display = 'none';
fishPattyImg.style.display = 'none';

// DISPLAYS IMAGES WHEN SELECTED

beefPatty.onclick = function() {
    beefPattyImg.style.display = 'block';
    chickenPattyImg.style.display = 'none';
    veganPattyImg.style.display = 'none';
    fishPattyImg.style.display = 'none';
}

chickenPatty.onclick = function() {
    beefPattyImg.style.display = 'none';
    chickenPattyImg.style.display = 'block';
    veganPattyImg.style.display = 'none';
    fishPattyImg.style.display = 'none';
}

veganPatty.onclick = function() {
    beefPattyImg.style.display = 'none';
    chickenPattyImg.style.display = 'none';
    veganPattyImg.style.display = 'block';
    fishPattyImg.style.display = 'none';
}

fishPatty.onclick = function() {
    beefPattyImg.style.display = 'none';
    chickenPattyImg.style.display = 'none';
    veganPattyImg.style.display = 'none';
    fishPattyImg.style.display = 'block';
}

// ------------------------------ SIDES SECTION----------------------------------------------------------------------------------------

// ASSIGNS ELEMENTS TO VARIABLES

// FORMS
let fries = document.getElementById('fries');
let salad = document.getElementById('salad');

// IMAGES
let friesImg = document.getElementById('friesImg');
let saladImg = document.getElementById('saladImg');

// HIDES THE IMAGES

friesImg.style.display = 'none';
saladImg.style.display = 'none';

fries.onclick = function() {
    friesImg.style.display = 'block';
    saladImg.style.display = 'none';
}

salad.onclick = function() {
    saladImg.style.display = 'block';
    friesImg.style.display = 'none';
}

// ------------------------------ EXTRAS SECTION ----------------------------------------------------------------------------------------

// ASSIGNS ELEMENTS TO VARIABLES

// FORMS 
/*let extraBeefPatty = document.getElementById('extraBeefPatty');
let extraChickenPatty = document.getElementById('extraChickenPatty');
let extraVeganPatty = document.getElementById('extraVeganPatty');
let extraFishPatty = document.getElementById('extraFishPatty');

let extraArugula = document.getElementById('extraArugula');
let extraAvo = document.getElementById('extraAvo');
let extraBacon = document.getElementById('extraBacon');
let extraCheese = document.getElementById('extraCheese');
let extraEgg = document.getElementById('extraEgg');
let extraLettuce = document.getElementById('extraLettuce');
let extraPickles = document.getElementById('extraPickles');
let extraOnion = document.getElementById('extraOnion');
let extraTomato = document.getElementById('extraTomato');

// TEXT (X2 IMAGES)

let extraPattyImg = document.getElementById('extraPattyImg');
let extraArugulaImg = document.getElementById('extraArugulaImg');
let extraAvoImg = document.getElementById('extraAvoImg');
let extraBaconImg = document.getElementById('extraBaconImg');
let extraCheeseImg = document.getElementById('extraCheeseImg');
let extraEggImg = document.getElementById('extraEggImg');
let extraLettuceImg = document.getElementById('extraLettuceImg');
let extraOnionImg = document.getElementById('extraOnionImg');
let extraPicklesImg = document.getElementById('extraPicklesImg');
let extraTomatoImg = document.getElementById('extraTomatoImg');

// HIDES THE X2 TEXT

extraPattyImg.style.display = 'none';
extraArugulaImg.style.display = 'none';
extraAvoImg.style.display = 'none';
extraBaconImg.style.display = 'none';
extraCheeseImg.style.display = 'none';
extraEggImg.style.display = 'none';
extraLettuceImg.style.display = 'none';
extraOnionImg.style.display = 'none';
extraPicklesImg.style.display = 'none';
extraTomatoImg.style.display = 'none';

// SHOWS TEXT WHEN SELECTED

function extraPatty() {
    if (extraPattyImg.style.display === 'none') {
        extraPattyImg.style.display = 'block';
    } else {
        extraPattyImg.style.display = 'none';
    }
}

function extraArugula() {
    if (extraArugulaImg.style.display === 'none') {
        extraArugulaImg.style.display = 'block';
    } else {
        extraArugulaImg.style.display = 'none';
    }
}

function extraAvo() {
    if (extraAvoImg.style.display === 'none') {
        extraAvoImg.style.display = 'block';
    } else {
        extraAvoImg.style.display = 'none';
    }
}

function extraBacon() {
    if (extraBaconImg.style.display === 'none') {
        extraBaconImg.style.display = 'block';
    } else {
        extraBaconImg.style.display = 'none';
    }
}

function extraCheese() {
    if (extraCheeseImg.style.display === 'none') {
        extraCheeseImg.style.display = 'block';
    } else {
        extraCheeseImg.style.display = 'none';
    }
}

function extraEgg() {
    if (extraEggImg.style.display === 'none') {
        extraEggImg.style.display = 'block';
    } else {
        extraEggImg.style.display = 'none';
    }
}

function extraLettuce() {
    if (extraLettuceImg.style.display === 'none') {
        extraLettuceImg.style.display = 'block';
    } else {
        extraLettuceImg.style.display = 'none';
    }
}

function extraOnion() {
    if (extraOnionImg.style.display === 'none') {
        extraOnionImg.style.display = 'block';
    } else {
        extraOnionImg.style.display = 'none';
    }
}

function extraPickles() {
    if (extraPicklesImg.style.display === 'none') {
        extraPicklesImg.style.display = 'block';
    } else {
        extraPicklesImg.style.display = 'none';
    }
}

function extraTomato() {
    if (extraTomatoImg.style.display === 'none') {
        extraTomatoImg.style.display = 'block';
    } else {
        extraTomatoImg.style.display = 'none';
    }
}*/