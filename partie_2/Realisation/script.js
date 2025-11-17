let bibliothéque = [
  { code: 1, titre: "La boîte à merveilles", auteur: "Ahmed Sefrioui", annee: 2008, disponible: true, prix: 40 },
  { code: 2, titre: "Antigone", auteur: "Mohamed Jamal", annee: 1999, disponible: false, prix: 60 },
  { code: 5, titre: "Derrière le silence", auteur: "Amine Berak", annee: 2000, disponible: true, prix: 50 },
];

//  Afficher les livres

function afficherLivres(liste = bibliothéque) {
  const container = document.getElementById("livresContainer");
  container.innerHTML = "";

  liste.forEach(livre => {
    const card = document.createElement("div");
    card.classList.add("livre-card");

    card.innerHTML = `
      <h3>${livre.titre}</h3>
      <p>Auteur: ${livre.auteur}</p>
      <p>Année: ${livre.annee}</p>
      <p>Prix: ${livre.prix} DH</p>
      <p>
        Disponible: 
        <span style="color:${livre.disponible ? 'green' : 'red'};">
          ${livre.disponible ? "oui" : "réservé"}
        </span>
      </p>
    `;

    // Bouton réserver si disponible
    if (livre.disponible) {
      const reserveBtn = document.createElement("button");
      reserveBtn.textContent = "Réserver";
      reserveBtn.addEventListener("click", () => {
        livre.disponible = false;
        afficherLivres();
      });
      card.appendChild(reserveBtn);
    }

    // Bouton supprimer
    const btn = document.createElement("button");
    btn.textContent = "Supprimer";
    btn.addEventListener("click", () => supprimerlivre(livre.code));
    card.appendChild(btn);

    container.appendChild(card);
  });

  mettreAJourStats();
  afficherLivrePlusCher();
}

let ordre = true; // true = A-Z , false = Z-A

document.getElementById("btn-trier").addEventListener("click", function () {
  ordre = !ordre;

  const copie = [...bibliothéque];

  copie.sort((a, b) => {
    if (ordre) return a.titre.localeCompare(b.titre);
    else return b.titre.localeCompare(a.titre);
  });

  afficherLivres(copie);
});
//livre plus cher
function afficherLivrePlusCher() {
  if (bibliothéque.length === 0) return;

  const max = bibliothéque.reduce((a, b) => (a.prix > b.prix ? a : b));
  document.getElementById("plusCher").innerHTML =
    ` Le livre le plus cher : <b>${max.titre}</b> (${max.prix} DH)`;
}

//  Supprimer un livre
function supprimerlivre(code) {
  bibliothéque = bibliothéque.filter(livre => livre.code !== code);
  afficherLivres();
}

//  Ajouter un livre
document.getElementById("formLivre").addEventListener("submit", function (e) {
  e.preventDefault();
  const nouveauLivre = {
    code: Number(document.getElementById("code").value),
    titre: document.getElementById("titre").value,
    auteur: document.getElementById("auteur").value,
    annee: Number(document.getElementById("annee").value),
    prix: Number(document.getElementById("prix").value),
    disponible: document.getElementById("disponible").checked // ← كان خطأ هنا: .Checked غلط و"dispinible" فيها خطأ مطبعي
  };
  bibliothéque.push(nouveauLivre);
  afficherLivres();
  this.reset();
});

// Rechercher un livre
function rechercherLivre(titre) {
  return bibliothéque.filter(livre =>
    livre.titre.toLowerCase().includes(titre.toLowerCase())
  );
}

document.getElementById("btn-rechercher").addEventListener("click", function () {
  const texte = document.getElementById("rechercher").value.trim();
  if (texte === "") {
    afficherLivres(); // afficher tout si la recherche est vide
  } else {
    const resultat = rechercherLivre(texte);
    afficherLivres(resultat);
  }
});

// Mettre à jour les stats
function mettreAJourStats() {
  const total = bibliothéque.length;
  const dispo= bibliothéque.filter(livre=>livre.disponible).length;
  const totallivre=document.getElementById("totalLivres");
  totallivre.innerHTML=`Total des livres : ${total}`;
  document.getElementById("livresDisponibles").innerHTML=`Les livres disponibles : ${dispo}`;
}

// Initialisation
afficherLivres();
