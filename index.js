function openModal(projectName) {
    document.getElementById("myModal").style.display = "block";
    console.log(projectName);
    switch (projectName) {
        case "groupie tracker":
          document.getElementById("project-name").innerHTML = "Groupie Tracker";
          var imageContainer = document.getElementById("image-container");
          
          // Créez une chaîne de caractères HTML avec les balises <img> et leurs attributs
          var imagesHTML = "Groupie Tracker est un projet de groupe réalisé dans le cadre mes études. Il s'agit d'un site web permettant de suivre les concerts de quelque artistes. Il est possible de rechercher des artisque ou des groupes en fonction de plusieurs critères comme par exemple leurs noms, leurs années de creation, de lieu de concert, etc..."+
                            '<img src="/img/groupie-tracker/gpt1.png" alt="Page d\'acceuil">' +
                           '<img src="/img/groupie-tracker/gpt2.png" alt="Page d\'une artiste">' +
                           '<img src="/img/groupie-tracker/gpt3.png" alt="Partie localisation avec l\'API de google maps">' ;
          
          // Insérez la chaîne de caractères HTML dans l'élément imageContainer
          imageContainer.innerHTML = imagesHTML;            
            break;
        case "boxxle":
          var imageContainer = document.getElementById("image-container");
          
          // Créez une chaîne de caractères HTML avec les balises <img> et leurs attributs
          var imagesHTML = "Boxxle est un projet réalisé dans le cadre de mon apprentissage du JavaScript. Réalisé en groupe de 2, il s'agit d'un jeu de puzzle où le joueur doit déplacer des caisses afin de les placer sur des emplacements définis. Le jeu est composé de plusieurs niveaux, de difficulté croissante."+
                            '<br><img src="/img/boxxle/boxxle1.png" >' +
                           '<img src="/img/boxxle/boxxle2.png" >' +
                           '<img src="/img/boxxle/boxxle3.png" >' ;
          
          // Insérez la chaîne de caractères HTML dans l'élément imageContainer
          imageContainer.innerHTML = imagesHTML;    
            break;
        case "hangman web":
          var imageContainer = document.getElementById("image-container");
          
          // Créez une chaîne de caractères HTML avec les balises <img> et leurs attributs
          var imagesHTML = "hangman web <br> <br>Hangman web est un projet réalisé dans le cadre du golang avec lier avec les langage html/css. Réalisé en groupe de 2, il s'agit du jeu du pendu où le joueur doit trouver le mot caché. Le jeu est composé de plusieurs niveaux, de difficulté croissante."+
                            '<br><img src="/img/hangman-web/hmw1.png" alt="Selection d\'un niveau">' +
                            '<img src="/img/hangman-web/hmw2.png" alt="Point de vue en jeu">'
          
          // Insérez la chaîne de caractères HTML dans l'élément imageContainer
          imageContainer.innerHTML = imagesHTML;    
            break;

        case "cookie cliker":
          var imageContainer = document.getElementById("image-container");
          
          // Créez une chaîne de caractères HTML avec les balises <img> et leurs attributs
          var imagesHTML = "Cookie Cliker <br> <br>Cookie Cliker est un projet réalisé dans le cadre de l'apprentissage du java dans la creation d'une application android. il s'agit d'un jeu Cliker ou le but est de cliker sur l'ecran pour avoir le plus de point afin de pouvoir acheter different item dans l'application."+
                            '<br><img src="/img/cookieCliker/cC1.png" alt="Selection d\'un niveau">' +
                            '<img src="/img/cookieCliker/cC2.png" alt="Point de vue en jeu">'
          
          // Insérez la chaîne de caractères HTML dans l'élément imageContainer
          imageContainer.innerHTML = imagesHTML;    
            break;

    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
var modal = document.getElementById("myModal");

// Lorsque l'utilisateur clique en dehors du modal, fermez-le
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}