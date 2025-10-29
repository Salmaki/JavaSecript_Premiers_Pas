let competences = ["C1", "C3", "C2", "C1", "C8", "C2", "C1"];
let compteurs = {};
for( let i = 0; i <competences.length; i++){
     let code = competences[i];
     if( compteurs [code]=== undefined){
        compteurs [code]= 1;
     }else{
        compteurs [code]++;
     }
}
console.log(compteurs);
