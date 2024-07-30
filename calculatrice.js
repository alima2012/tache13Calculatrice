// DOM
const touches = [...document.querySelectorAll('.bouton')];
// recuperer les TOUCHES de la calculatrice
// la fonction map prend chaque élément de notre tableau 
// et retourne sous forme d'un nouveau tableau
const listekeycode = touches.map(touche => touche.dataset.key);
// recupérer la touche écran du DOM
const ecran = document.querySelector('.fond_ecran');
// creer un événement lors d'un clique sur une touche
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

// créer une fonction calculer
const calculer = (valeur) => {
    if(listekeycode.includes(valeur)){
        switch(valeur){
            // recupérer le texte si on appuie sur la touche C
            case '8':
                ecran.textContent = "";
                break;
            // recuperer le contenu de l'écran si on appuie sur la touce =
            case '13':
                // utiliser eval() pour rerourner la valeur d'une opération
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
            // recuperer la valeur si on appuie sur un chiffre
                const indexKeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
// gérer les erreurs si l'utilisateur effectue sur une opération incorrecte
window.addEventListener('error', (e) => {
    alert('Erreur: Veuillez vérifier votre opération: ' +e.message);
})