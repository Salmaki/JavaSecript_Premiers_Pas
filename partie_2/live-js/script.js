let bibliothéque=[
  { code: 1 , titre: "La boite à mrveille" , auteur: "Ahmed sefrioui", annee: 2008 , dispinible: true , prix: 40 },
  { code: 2 , titre: "Antigone" , auteur: "Mohamed jamal" , annee: 1999 , disponible: true , prix: 60 },
];
//afficher les livres
function afficherLivres() {
const container= document.getElementById("livresContainer");
container.innerHTML="";
bibliothéque.forEach(livre => {
  const card = document.createElement("div");
  card.classList.add ("livre-card");
  card.innerHTML=`;
<h3>${livre.titre}</h3>
<p> Auteur : ${livre.auteur}</p>
<p> Annee : ${livre.annee} </p>
<p> Prix : ${livre.prix} </p>
<p> Disponible : ${livre.disponibl? "oui" : "non"} </p>
`;
const btn = document.createElement("button");
btn.textContent = "supprimer";
btn.addEventListener("click", () => supprimerlivre (livre.code));

card.appendChild(btn);
container.appendChild(card);
 
});

}
//Supprimer un livre