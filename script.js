console.log("-Fonctionnalité 1 : Lorsque l'on clique sur le footer (portant le tag <footer>), le mot clique s'affiche en console");

// 1. Find and store the element we want to listen to events on.
let footer = document.getElementsByTagName("footer")[0]
// 2. Define the function that will respond to the event.
let onFooterClick = function() {  
    console.log("clique") 
};
// 3. Add the event listener for the element and function
footer.addEventListener("click", onFooterClick);



console.log("-Fonctionnalité 1bis: Lorsque l'on clique sur le footer, 'clic numéro x' (avec x commençant à 1 et s'incrémentant de +1 à chaque clic) va s'afficher.");

let footerCounter = 0;    

document.getElementsByTagName("footer")[0].addEventListener("click", function() {  
    footerCounter++;
    console.log(`Clic numéro ${footerCounter}`);
});


console.log("-Fonctionnalité 2 : Le menu hamburger apparaît quand on clique dessus puis disparaît si on clique à nouveau")

let navbarToggler = document.getElementsByClassName("navbar-toggler")[0]
let navbarHeader = document.getElementById("navbarHeader")

let collapse = function() {
    navbarHeader.classList.toggle("collapse")
    
};

navbarToggler.addEventListener("click", collapse)



console.log("-Fonctionnalité 3 : Si on clique sur le bouton 'Edit' de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)")

//Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé)
let card1 = document.getElementsByClassName("card-body")[0];
//console.log(card1)

//Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
let editCard1Button = card1.getElementsByTagName("button")[1]
//console.log(editCard1Button)

//Une fois que c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

editCard1Button.addEventListener("click", function(){
  card1.style = "color:red"
});


console.log("-Fonctionnalité 4 : Si on clique sur le bouton 'Edit' de la 2ième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !")



let card2 = document.getElementsByClassName("card-body")[1];
let editCard2Button = card2.getElementsByTagName("button")[1];

i=1
editCard2Button.addEventListener("click", function(){
i++   
//Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener
if (card2.style.color === 'green'){
    card2.style.color = '' ;
    } else 
    
    card2.style.color = 'green'
    
});


console.log("-Fonctionnalité 5 : Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Un nouveau double-clic fait tout revenir à la normale")

    let navbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
    let cdnLink = document.getElementsByTagName("link")[0];
    let body = document.getElementsByTagName("body")[0];
    
    // doublie-click on navbar ==> no more CSS
    navbar.addEventListener("dblclick",function(){
      cdnLink.disabled = true;}
    );
    
    // click anywhere ==> CSS is Back
    body.addEventListener("click",function(){
      cdnLink.disabled = false;}
    );


    console.log("-Fonctionnalité 6 : Si un utilisateur passe sa souris sur le bouton 'View' d'une card, celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons 'Edit / 'View restent visibles. S'il repasse sa souris, la card redevient normale !")

    let cards = document.getElementsByClassName("card");
    let button_view = document.getElementsByClassName("btn-success");
    
    for(let i = 0; i < cards.length; i++)
{
    function view()
    {
        if (cards[i].getElementsByClassName("card-text")[0].style.display != "none")
        {
            cards[i].getElementsByClassName("card-text")[0].style.display = "none";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "20%";
        }
        else
        {
            cards[i].getElementsByClassName("card-text")[0].style.display = "block";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "100%";
        }
    }
    button_view[i].addEventListener("mouseover", view);
}

console.log("-Fonctionnalité 7 : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !")
//Indice : Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

let buttonNext = document.getElementsByClassName("btn btn-secondary my-2")[0];
let onButtonNextClick = function() {
        let cards = document.getElementsByClassName("col-md-4")[0].parentElement;
        let card1 = cards.children[0]
        let card6 = cards.children[5]
        cards.insertBefore(card6, card1);
    };
    buttonNext.addEventListener("click", onButtonNextClick);



    console.log("-Fonctionnalité 8 : Si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier")
//Indice 1 : Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus, une page s'ouvre ! Il faut que tu bloques ce comportement par défaut (via l'objet event

//Indice 2 : Deuxième piège : tu as utilisé "insertBefore" pour la fonctionnalité précédente mais il n'y a pas de "insertAfter". Une solution est de considérer qu'un "insertAfter un élément A" serait, s'il existait, équivalent à faire un "insertBefore sur le nœud APRES l'élément A". Et tu peux pointer sur un noeud APRES un élément en faisant "lastCard.nextSibling".
let buttonPrevious = document.getElementsByClassName("btn btn-primary my-2")[0];
let onButtonPreviousClick = function(event) {
    event.preventDefault();
    let cards = document.getElementsByClassName("col-md-4")[0].parentElement;
    let card1 = cards.children[0]
    let card6 = cards.children[5]
    cards.insertBefore(card1, card6.nextSibling);
};
buttonPrevious.addEventListener("click", onButtonPreviousClick);

console.log("-Fonctionnalité 9 : La fonctionnalité se déclenchera si le logo de la page 'JS & Events' est sélectionné et qu'on appuie sur une touche spécifique du clavier.")
console.log("-->Si l'utilisateur presse la touche 'a', l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.")
console.log("-->Si l'utilisateur presse la touche 'y', l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.")
console.log("-->Si l'utilisateur presse la touche 'p', l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.")
console.log("-->Si l'utilisateur presse la touche 'b', tout redevient normal.")
    
let logo = document.getElementsByClassName('navbar-brand')[0];
logo.addEventListener('keypress', function(event) {
  let body = document.getElementsByTagName('body')[0];
  body.classList = "";
  switch (event.key) {
    case 'a':
      body.classList.add("col-4");
      break;
    case 'b':
      body.classList = "";
      break;
    case 'y':
      body.classList.add("col-4", "offset-4");
      break;
    case 'p':
      body.classList.add("col-4", "offset-8");
      break;
    };     
  });