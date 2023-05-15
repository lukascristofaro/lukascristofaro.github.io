function openModal(projectName) {
    document.getElementById("myModal").style.display = "block";
    console.log(projectName);
    switch (projectName) {
        case "groupie tracker":
            document.getElementById("project-name").innerHTML = "Groupie Tracker <br> <br>Groupie Tracker est un projet de groupe réalisé dans le cadre mes études. Il s'agit d'un site web permettant de suivre les concerts de quelque artistes. Il est possible de rechercher des artisque ou des groupes en fonction de plusieurs critères comme par exemple leurs noms, leurs années de creation, de lieu de concert, etc..."
            break;
        case "boxxle":
            document.getElementById("project-name").innerHTML = "Boxxle <br> <br>Boxxle est un projet réalisé dans le cadre de mon apprentissage du JavaScript. Réalisé en groupe de 2, il s'agit d'un jeu de puzzle où le joueur doit déplacer des caisses afin de les placer sur des emplacements définis. Le jeu est composé de plusieurs niveaux, de difficulté croissante.";
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