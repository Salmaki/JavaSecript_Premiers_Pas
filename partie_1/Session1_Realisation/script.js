// Liste des compétences
let competences = [
    { nom: "Collaboration et contrôle de version avec Git et GitHub", code: "C1" },
    { nom: "Structure des pages avec HTML", code: "C2" },
    { nom: "Mise en forme et design responsif avec CSS", code: "C3" },
    { nom: "Utiliser GitHub Desktop & gérer des issues", code: "C4" },
    { nom: "Utilisation des fonctions, boucles et conditions en JavaScript", code: "C5" },
    { nom:"Gestion du stockage local avec JavaScript" , code: "CC6" },
    { nom: "Application de styles personnalisés avec les propriétés CSS de base comme couleurs et polices", code:"C7"}
  
  ];
  let score = 0;
  for (let i = 0; i < competences.length; i++) {
    let answer = prompt("Quelle est le code de:  " +competences[i].nom +"  ? ");
    
    if (answer === competences[i].code) {
      alert("✅ Correct !");
      score++;
    } else {
      alert("❌ Faux ! La bonne réponse était"+  competences[i].code);
    }
  }

alert("🎉 Jeu terminé ! Ton score :"+ score +"/ "+ competences.length);
  
  