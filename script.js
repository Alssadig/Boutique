let panier = [];
let total = 0;

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(nomProduit, prix) {
    panier.push({ nom: nomProduit, prix });
    total += prix;
    afficherPanier();
}

// Fonction pour afficher les éléments du panier et le total
function afficherPanier() {
    const panierListe = document.getElementById("panier-liste");
    panierListe.innerHTML = '';  // Effacer l'ancien contenu
    panier.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nom} - ${item.prix}€`;
        panierListe.appendChild(li);
    });
    document.getElementById("total-panier").textContent = `Total : ${total}€`;
}

// Fonction pour filtrer les produits par catégorie
function filtrerProduits(categorie) {
    const produits = document.querySelectorAll(".produit");
    produits.forEach(produit => {
        produit.style.display = produit.dataset.categorie === categorie || categorie === 'all' ? 'block' : 'none';
    });
}

// Fonction pour afficher l'interface de paiement
function afficherPaiement() {
    document.getElementById("paiement-section").style.display = "flex";
    const recap = panier.map(item => `${item.nom} - ${item.prix}€`).join('<br>');
    document.getElementById("recap-panier").innerHTML = `<strong>Récapitulatif :</strong><br>${recap}<br><br><strong>Total : ${total}€</strong>`;
}

// Fonction pour fermer l'interface de paiement
function fermerPaiement() {
    document.getElementById("paiement-section").style.display = "none";
}

// Fonction pour confirmer le paiement
function confirmerPaiement() {
    alert("Merci pour votre achat ! Votre commande est confirmée.");
    panier = [];
    total = 0;
    afficherPanier();
    fermerPaiement();
}
