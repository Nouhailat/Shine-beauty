// Définition des prix des produits
const productPrices = {
    "Fondation liquid": 150,
    "Lipstick red from Dior": 300,
    "Blush pink": 120,
    "Mascara": 100,
    "Eyeliner water proof": 200,
    "EyeShadow": 250,
};

// Fonction pour initialiser les événements
document.addEventListener('DOMContentLoaded', function () {
    const quantityInput = document.getElementById('quantity');
    const totalPriceInput = document.getElementById('totalPrice');
    const unitPriceField = document.getElementById('unitPrice');
    const productNameField = document.getElementById('productName');
    const orderForm = document.getElementById('orderForm');
    const tableBody = document.getElementById("orderTableBody");

    // Met à jour le prix unitaire lorsque le produit est changé
    if (productNameField && unitPriceField) {
        productNameField.addEventListener("change", function () {
            const selectedProduct = this.value;
            unitPriceField.value = productPrices[selectedProduct] || "";
        });
    }

    // Calcule le prix total lorsque la quantité est saisie
    if (quantityInput && totalPriceInput && unitPriceField) {
        quantityInput.addEventListener('input', function () {
            const quantity = parseInt(this.value) || 0;
            const unitPrice = parseInt(unitPriceField.value) || 0;
            const totalPrice = quantity * unitPrice;
            totalPriceInput.value = totalPrice.toFixed(2);
        });
    }

    // Gestionnaire de soumission du formulaire
    if (orderForm) {
        orderForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Commande finalisée avec succès !');
            orderForm.reset();
            totalPriceInput.value = '';
            unitPriceField.value = '';
        });
    }

    // Affiche les commandes dans le tableau
    function displayOrders() {
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

        tableBody.innerHTML = ''; // Vider le tableau
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

    displayOrders(); // Appel initial
});
// LES REGLES DE FORMULAIRE COMME EMAIL ET TEL
// Définition des prix des produits
// const productPrices = {
//     "Fondation liquid": 150,
//     "Lipstick red from Dior": 300,
//     "Blush pink": 120,
//     "Mascara": 100,
//     "Eyeliner water proof": 200,
//     "EyeShadow": 250,
// };

// Fonction pour initialiser les événements
document.addEventListener('DOMContentLoaded', function () {
    const quantityInput = document.getElementById('quantity');
    const totalPriceInput = document.getElementById('totalPrice');
    const unitPriceField = document.getElementById('unitPrice');
    const productNameField = document.getElementById('productName');
    const orderForm = document.getElementById('orderForm');
    const tableBody = document.getElementById("orderTableBody");

    // Met à jour le prix unitaire lorsque le produit est changé
    if (productNameField && unitPriceField) {
        productNameField.addEventListener("change", function () {
            const selectedProduct = this.value;
            unitPriceField.value = productPrices[selectedProduct] || "";
        });
    }

    // Calcule le prix total lorsque la quantité est saisie
    if (quantityInput && totalPriceInput && unitPriceField) {
        quantityInput.addEventListener('input', function () {
            const quantity = parseInt(this.value) || 0;
            const unitPrice = parseInt(unitPriceField.value) || 0;
            const totalPrice = quantity * unitPrice;
            totalPriceInput.value = totalPrice.toFixed(2);
        });
    }

    // Affiche les commandes dans le tableau
    function displayOrders() {
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

        tableBody.innerHTML = ''; // Vider le tableau
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

    // Affiche les commandes au chargement de la page
    displayOrders();

    // Gestionnaire de soumission du formulaire
    if (orderForm) {
        orderForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Validation simple du formulaire
            const customerName = document.getElementById('customerName').value;
            const productName = productNameField.value;
            const quantity = parseInt(quantityInput.value) || 0;
            const unitPrice = parseInt(unitPriceField.value) || 0;
            const totalPrice = quantity * unitPrice;
            const orderDate = new Date().toISOString().split('T')[0]; // Date au format YYYY-MM-DD

            if (phoneNumberInput.value.length !== 10) {
                alert('Le numéro de téléphone doit comporter 10 chiffres.');
                return;
            }

            if (emailInput.validity.valid) {
                // Ajouter la nouvelle commande dans le tableau
                const newOrder = {
                    orderId: `00${tableBody.rows.length + 1}`,
                    customerName: customerName,
                    product: productName,
                    quantity: quantity,
                    unitPrice: unitPrice,
                    totalPrice: totalPrice,
                    orderDate: orderDate
                };

                // Ajouter la nouvelle commande dans le tableau HTML
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${newOrder.orderId}</td>
                    <td>${newOrder.customerName}</td>
                    <td>${newOrder.product}</td>
                    <td>${newOrder.quantity}</td>
                    <td>${newOrder.unitPrice}</td>
                    <td>${newOrder.totalPrice}</td>
                    <td>${newOrder.orderDate}</td>
                `;
                tableBody.appendChild(row);

                alert('Commande finalisée avec succès!');
                orderForm.reset();
                totalPriceInput.value = '';
                unitPriceField.value = '';
            } else {
                alert('Veuillez entrer un email valide.');
            }
        });
    }
});

