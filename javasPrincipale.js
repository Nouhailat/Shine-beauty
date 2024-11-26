// order.js

// Définition du prix unitaire
const unitPrice = 100;

// Fonction pour calculer et afficher le prix total
document.addEventListener('DOMContentLoaded', function () { // S'assure que le DOM est complètement chargé avant d'exécuter le script
    const quantityInput = document.getElementById('quantity');
    const totalPriceInput = document.getElementById('totalPrice');

    if (quantityInput && totalPriceInput) {
        quantityInput.addEventListener('input', function () {
            // Récupère la quantité, ou 0 si la valeur est invalide
            const quantity = parseInt(this.value) || 0;
            const totalPrice = quantity * unitPrice;  // Calcule le prix total

            // Affiche le prix total
            totalPriceInput.value = totalPrice.toFixed(2);
        });
    }

    // Gestion de la soumission du formulaire
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Empêche l'envoi réel du formulaire
            alert('Commande finalisée avec succès !');
            this.reset(); // Réinitialise le formulaire
            totalPriceInput.value = ''; // Réinitialise le champ du prix total
        });
    }

    // Fonction pour gérer le menu
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    }
});
// Exemple de données de commandes
const orders = [
    {
        orderId: "001",
        customerName: "Nour elhouda",
        product: "Fondation liquid",
        quantity: 2,
        unitPrice: 100,
        totalPrice: 200,
        orderDate: "2024-11-20"
    },
    {
        orderId: "002",
        customerName: "Nouhaila Touati",
        product: "Lipstick red from Dior",
        quantity: 1,
        unitPrice: 250,
        totalPrice: 250,
        orderDate: "2024-11-21"
    },
    {
        orderId: "003",
        customerName: "Nouha nouha",
        product: "Blush pink",
        quantity: 3,
        unitPrice: 150,
        totalPrice: 450,
        orderDate: "2024-11-22"
    }
];

// Fonction pour afficher les commandes dans le tableau
function displayOrders() {
    const tableBody = document.getElementById("orderTableBody");

    // Vider le tableau avant d'ajouter de nouvelles lignes
    tableBody.innerHTML = '';

    // Remplir le tableau avec les données des commandes
    orders.forEach(order => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.unitPrice}</td>
            <td>${order.totalPrice}</td>
            <td>${order.orderDate}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Appeler la fonction pour afficher les commandes dès que la page se charge
document.addEventListener("DOMContentLoaded", displayOrders);

