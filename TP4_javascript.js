//exercice1

function degreC(tempF){
    console.log("Une temperature en Fahreinhet :"+tempF);
    let tempC = (5/9)*(tempF-32);
    console.log("cette temperature equivaut a "+tempC.toFixed(1)+" degrés celsius");
}

console.log(degreC(8));

//exercice2
function hjms(s){
    let nbj =  Math.floor(s / 86400);
    let rest1 = s % 86400;
    let nbh = Math.floor(rest1 / 3600);
    let rest2 = rest1 % 3600
    let nbm = Math.floor(rest2 / 60);
    let nbs = Math.floor(rest2 % 60);
    console.log("cette durée equivalant à "+nbj+" jours "+nbh+" herures "+nbm+" minutes "+nbs+" secondes ");
}

console.log(hjms(235789));

//exercice 2-bis
function hjms(s){
    let nbj =  Math.floor(s / 86400);
    let rest1 = s % 86400;
    let nbh = Math.floor(rest1 / 3600);
    let rest2 = rest1 % 3600
    let nbm = Math.floor(rest2 / 60);
    let nbs = Math.floor(rest2 % 60);
    let message = "cette durée équivaut à ";
    
     if (nbj > 0) {
        message += nbj + (nbj === 1 ? " jour " : " jours ");
    }
     if (nbh > 0) {
        message += nbh + (nbh === 1 ? " heure " : " heures ");
    }
     if (nbm > 0) {
        message += nbm + (nbm === 1 ? " minute " : " minutes ");
    }
     if (nbs > 0) {
        message += nbs + (nbs === 1 ? " seconde" : " secondes");
    }
    console.log(message);
}

console.log(hjms(3621));

//exercice 3

function classer(a, b, c) {
    
    if (a <= b && b <= c) {
        console.log("les nombres dans l'ordre croissant : " + a + " " + b + " " + c);
    }
    else if (a <= c && c <= b) {
        console.log("les nombres dans l'ordre croissant : " + a + " " + c + " " + b);
    }
    else if (b <= a && a <= c) {
        console.log("les nombres dans l'ordre croissant : " + b + " " + a + " " + c);
    }
    else if (b <= c && c <= a) {
        console.log("les nombres dans l'ordre croissant : " + b + " " + c + " " + a);
    }
    else if (c <= a && a <= b) {
        console.log("les nombres dans l'ordre croissant : " + c + " " + a + " " + b);
    }
    else if (c <= b && b <= a) {
        console.log("les nombres dans l'ordre croissant : " + c + " " + b + " " + a);
    }
}

classer(14, 10, 17);  
classer(1, 2, 3);     
classer(3, 1, 2);    
console.log(classer(1,2,3));




//exercice 5
function testerPremier(n) {
    let estPremier = true;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            estPremier = false;
            break;
        }
    }
    
    if (estPremier && n > 1) {
        console.log(n + " est un nombre premier");
    } else {
        console.log(n + " n'est pas un nombre premier");
    }
}

testerPremier(7);    
testerPremier(25);   
testerPremier(2);    
