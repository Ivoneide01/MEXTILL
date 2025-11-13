// /home/ubuntu/mextill-loja/mextill-loja/js/payment.js

// 1. Configuração Inicial
// ATENÇÃO: Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública do Mercado Pago
const MP_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; 
const mp = new MercadoPago(MP_PUBLIC_KEY);

// Variável global para armazenar o CardForm
let cardFormInstance;

// 2. Função para carregar o formulário de pagamento
function loadCardFormHTML() {
    // Carrega o HTML do formulário de pagamento
    fetch('payment_form.html')
        .then(response => response.text())
        .then(html => {
            const cardSection = document.getElementById('cardSection');
            if (cardSection) {
                cardSection.innerHTML = html;
                initializeCardForm();
            }
        })
        .catch(error => console.error('Erro ao carregar o formulário de pagamento:', error));
}

// 3. Inicializar o CardForm
function initializeCardForm() {
    const totalAmountElement = document.getElementById('checkoutTotal');
    // Remove "R$ " e substitui "," por "." para obter o valor numérico
    const amountText = totalAmountElement ? totalAmountElement.innerText.replace('R$ ', '').replace(',', '.') : "100.00";
    const amount = parseFloat(amountText).toFixed(2);

    cardFormInstance = mp.cardForm({
        amount: amount, 
        autoMount: true,
        form: {
            id: "card-payment-form",
            cardholderName: { id: "card-holder-input", placeholder: "Nome no Cartão" },
            cardNumber: { id: "card-number-container" },
            cardExpirationDate: { id: "card-expiration-date-container" },
            securityCode: { id: "card-cvv-container" },
            installments: { id: "installments-input" },
            identificationType: { id: "doc-type-input" },
            identificationNumber: { id: "doc-number-input" },
            issuer: { id: "issuer-input" },
        },
        callbacks: {
            onFormMounted: error => {
                if (error) return console.warn("Form Mounted Error: ", error);
                console.log("Formulário de pagamento montado com sucesso!");
                document.getElementById('pay-button').disabled = false;
            },
            onCardTokenReceived: (error, token) => {
                if (error) {
                    console.error("Erro ao receber o token do cartão:", error);
                    document.getElementById('payment-status').innerText = "Erro no pagamento. Verifique os dados do cartão.";
                    document.getElementById('pay-button').disabled = false;
                } else {
                    console.log("Token do cartão recebido com sucesso:", token);
                    document.getElementById('payment-status').innerText = "Token gerado. Enviando para processamento...";
                    
                    // 4. Enviar o token para o seu backend para processamento
                    processPayment(token);
                }
            },
            onInstallmentsReceived: (error, installments) => {
                if (error) return console.warn('installmentsReceived handler: ', error);
                const selectInstallments = document.getElementById('installments-input');
                selectInstallments.innerHTML = '';
                installments[0].payer_costs.forEach(payerCost => {
                    const opt = document.createElement('option');
                    opt.value = payerCost.installments;
                    opt.text = payerCost.recommended_message;
                    selectInstallments.appendChild(opt);
                });
            },
            // Outros callbacks como onPaymentMethodsReceived, onBinChange, etc.
        }
    });

    // 5. Adicionar listener para submissão do formulário
    document.getElementById('card-payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('pay-button').disabled = true;
        document.getElementById('payment-status').innerText = "Processando pagamento...";
        
        // O CardForm irá interceptar a submissão e chamar onCardTokenReceived
        cardFormInstance.createCardToken();
    });
}

// 6. Função para enviar o token para o backend (AQUI ESTÁ O PONTO CRÍTICO)
function processPayment(token) {
    // **ATENÇÃO**: Esta função DEVE ser implementada em um servidor seguro (backend).
    // O Mercado Pago exige que a criação do pagamento (chamada à API /v1/payments)
    // seja feita com sua **Access Token (Secret Key)**, que NUNCA deve ser exposta no frontend.
    
    const paymentData = {
        token: token.id,
        issuer_id: token.card_number_id,
        payment_method_id: token.payment_method_id,
        transaction_amount: parseFloat(cardFormInstance.getCardFormData().amount),
        installments: parseInt(cardFormInstance.getCardFormData().installments),
        description: "Compra na Mextill - Loja Virtual",
        payer: {
            email: "email_do_cliente@exemplo.com", // **IMPORTANTE**: Email do cliente logado
            identification: {
                type: document.getElementById('doc-type-input').value,
                number: document.getElementById('doc-number-input').value
            }
        }
    };

    // Exemplo de chamada para um endpoint de backend (que você precisará criar)
    fetch("YOUR_BACKEND_ENDPOINT_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(paymentResponse => {
        document.getElementById('pay-button').disabled = false;
        if (paymentResponse.status === "approved") {
            document.getElementById('payment-status').innerText = "Pagamento APROVADO! ID: " + paymentResponse.id;
            // Chamar a função de sucesso do seu app.js
            window.finalizarCompra('CARD', paymentResponse.id); 
        } else {
            document.getElementById('payment-status').innerText = "Pagamento RECUSADO. Status: " + paymentResponse.status_detail;
            // Mostrar erro
        }
    })
    .catch(error => {
        document.getElementById('pay-button').disabled = false;
        document.getElementById('payment-status').innerText = "Erro de comunicação com o servidor.";
        console.error("Erro ao processar pagamento:", error);
    });
}

// 7. Integração com o app.js para alternar a seção de pagamento
// A lógica de alternância de seção foi movida para o app.js.
// Apenas a função loadCardFormHTML é chamada pelo app.js.
// Não é necessário adicionar um listener aqui.

