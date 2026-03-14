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








//exerice 4
function triangle1(taille) {
  console.log(`\nTriangle1 (avec while) - taille = ${taille}:`);
  
  let ligne = 1;
  while (ligne <= taille) {
    let motif = '';
    let colonne = 1;
    
    while (colonne <= ligne) {
      motif += '*';
      colonne = colonne + 1;
    }
    
    console.log(motif);
    ligne = ligne + 1;
  }
}
 
function triangle2(taille) {
  console.log(`\nTriangle2 (avec for) - taille = ${taille}:`);
  
  for (let ligne = 1; ligne <= taille; ligne++) {
    let motif = '';
    
    
    for (let colonne = 1; colonne <= ligne; colonne++) {
      motif += '*';
    }
    
    console.log(motif);
  }
}
 
const taille = 7;
 
triangle1(taille);
triangle2(taille);






//exercice 4bis
function pyramide(taille) {
  console.log(`\nPyramide - taille = ${taille}:`);
  
  
  for (let ligne = 1; ligne <= taille; ligne++) {
    let nombreAsteri = 2 * ligne - 1;  
    let motif = '';
    
    for (let colonne = 1; colonne <= nombreAsteri; colonne++) {
      motif += '*';
    }
    
    console.log(motif);
  }
}
 
function pyramidecentree(taille) {
  console.log(`\nPyramide centrée - taille = ${taille}:`);
  
  for (let ligne = 1; ligne <= taille; ligne++) {
    let nombreAsteri = 2 * ligne - 1;
    let espaces = taille - ligne;  
    let motif = '';
    
    for (let e = 0; e < espaces; e++) {
      motif += ' ';
    }
    
    for (let a = 0; a < nombreAsteri; a++) {
      motif += '*';
    }
    
    console.log(motif);
  }
}
 
console.log('========== EXERCICE 4-BIS ==========');
 
const tailleUtilisateur = 7;
console.log(`donnez taille du motif : ${tailleUtilisateur}`);
 
pyramide(tailleUtilisateur);
 
console.log('\n--- Version centrée ---');
pyramidecentree(tailleUtilisateur);











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






//exercice 6
function fibo1(n) {
  console.log(`\nCalcul du terme de rang ${n} de la suite de Fibonacci:`);
  
  
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  
 
  let u0 = 0;  
  let u1 = 1;  
  let resultat = 0;
  
  let rang = 2;
  while (rang <= n) {
    
    resultat = u1 + u0;
    
  
    u0 = u1;
    u1 = resultat;
    
    rang = rang + 1;
  }
  
  return u1;
}
 

function fibo2(valeurLimite) {
  console.log(`\nRecherche du premier terme de Fibonacci supérieur à ${valeurLimite}:`);
  
  let u0 = 0;      
  let u1 = 1;      
  let rang = 1;    
  
  
  if (u0 > valeurLimite) {
    console.log(`Terme trouvé: rang=${0}, valeur=${u0}`);
    return { rang: 0, valeur: u0 };
  }
  
  
  if (u1 > valeurLimite) {
    console.log(`Terme trouvé: rang=${1}, valeur=${u1}`);
    return { rang: 1, valeur: u1 };
  }
  

  while (true) {
    let uSuivant = u0 + u1;
    rang = rang + 1;
    
    if (uSuivant > valeurLimite) {
      console.log(`Terme trouvé: rang=${rang}, valeur=${uSuivant}`);
      return { rang: rang, valeur: uSuivant };
    }
    
   
    u0 = u1;
    u1 = uSuivant;
  }
}

console.log('--- PARTIE A : Calcul du nième terme ---');
 
console.log('\nTest 1: n = 0');
let resultat = fibo1(0);
console.log(`Résultat: u(0) = ${resultat}`);
 
console.log('\nTest 2: n = 1');
resultat = fibo1(1);
console.log(`Résultat: u(1) = ${resultat}`);
 
console.log('\nTest 3: n = 6');
resultat = fibo1(6);
console.log(`Résultat: u(6) = ${resultat}`);
 
console.log('\nTest 4: n = 10');
resultat = fibo1(10);
console.log(`Résultat: u(10) = ${resultat}`);
 
console.log('\nTest 5: n = 15');
resultat = fibo1(15);
console.log(`Résultat: u(15) = ${resultat}`);


 
console.log('\n--- PARTIE B : Premier terme supérieur à une valeur ---');
 
console.log('\nTest 1: valeur limite = 10');
fibo2(10);
 
console.log('\nTest 2: valeur limite = 100');
fibo2(100);
 
console.log('\nTest 3: valeur limite = 1000');
fibo2(1000);





//exercice 7
function raca1(A) {
  console.log(`\nCalcul de la racine carrée approchée de ${A}:`);
  
  
  if (A < 1 || A > 100) {
    console.log('Erreur: A doit être compris entre 1 et 100');
    return null;
  }
  

  let u = A / 2;
  let iteration = 0;
  let epsilon = Math.pow(10, -6);  
  
  console.log(`u(${iteration}) = ${u}`);
  console.log(`|u² - A| = ${Math.abs(u * u - A)}`);
  
  
  while (Math.abs(u * u - A) >= epsilon) {
    
    u = 0.5 * (u + A / u);
    iteration = iteration + 1;
    
    console.log(`u(${iteration}) = ${u}`);
    console.log(`|u² - A| = ${Math.abs(u * u - A)}`);
  }
  
  console.log(`\nValeur approchée trouvée après ${iteration} itérations:`);
  console.log(`Résultat: √${A} ≈ ${u}`);
  
  return u;
}
 

function raca1simple(A) {
  console.log(`Pour un nombre A entre 1 et 100: ${A}`);
  
 
  if (A < 1 || A > 100) {
    console.log('Erreur: A doit être compris entre 1 et 100');
    return null;
  }
  

  let u = A / 2;
  let epsilon = Math.pow(10, -6);  
  
  
  while (Math.abs(u * u - A) >= epsilon) {
    
    u = 0.5 * (u + A / u);
  }
  
  console.log(`Valeur approchée de la racine carrée = ${u}`);
  
  return u;
}
 

console.log('\n--- Test 1 : Exemple détaillé (A = 19.23) ---');
raca1(19.23);
 

console.log('\n--- Test 2 : Version simple ---');
raca1simple(19.23);
 

console.log('\n--- Test 3 : A = 4 (√4 = 2 exactement) ---');
raca1simple(4);
 
console.log('\n--- Test 4 : A = 9 (√9 = 3 exactement) ---');
raca1simple(9);
 
console.log('\n--- Test 5 : A = 2 (√2 ≈ 1.414...) ---');
raca1simple(2);
 
console.log('\n--- Test 6 : A = 50 ---');
raca1simple(50);
 
console.log('\n--- Test 7 : A = 100 (√100 = 10 exactement) ---');
raca1simple(100);