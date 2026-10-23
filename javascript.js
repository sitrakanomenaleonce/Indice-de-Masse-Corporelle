//function perimetreCarre(c) {
//    return c * 4 ;
//}

//function perimetreRectangle(l,L) {
//    return (l + L) * 2 ;
//}

//console.log(perimetreCarre(10));
//console.log(perimetreRectangle(2,5));

const poid = document.getElementById('poid');
const taille = document.getElementById('taille');
const ver = document.getElementById('ver');
const resultat = document.getElementById('resultat');
const resulta = document.getElementById('resulta');
const div = document.querySelector('.dive');

div.style.borderRadius = "10px";
resultat.style.textAlign = "center";
resulta.style.textAlign = "center";

calculimc =  () => {                                          //function calculimc() {   }  <==> calculimc = () => {}
   const p = +poid.value;
   const t = +taille.value;

   const res = (p / t**2);
   console.log(res);
   resultat.textContent = "Votre IMC est  " + res;

   if (res < 18.5) {
     resulta.textContent ="mince"; 
   } else if ( res > 18.5 && res < 24.999) {
    resulta.textContent ="normal";
   } else if ( res >= 25) {
    resulta.textContent ="'surpoid";
   }
};

ver.addEventListener('click',calculimc);