function confirmPayment() {

    // Mapeamento de links por ID do produto
    const links = {
        // iPhone 15 Pro (ID 1)
        1: {
            pix: "https://invoice.infinitepay.io/teste-nidi/3NH2FMhoSh",
            credit: "https://link.infinitepay.io/teste-nidi/VC1DLUMtSQ-HQMULlrTT-7999,00"
        },
        // Samsung Galaxy S24 (ID 2)
        2: {
            pix: "https://invoice.infinitepay.io/teste-nidi/6kYVmwRboJ",
            credit: "https://link.infinitepay.io/teste-nidi/VC1DLUMtSQ-6yVYZqr27-5999,00"
        },
        // Xiaomi 14 Ultra
        3: {
            pix: "",
            credit: ""
        },
        //iPad Pro 12.9"
        4: {
            pix: "",
            credit: ""
        },
        //Samsung Tab S9
        5: {
            pix: "",
            credit: ""
        },
        //MacBook Pro 16"
        6: {
            pix: "",
            credit: ""
        },
        //Dell XPS 15
        7: {
            pix: "",
            credit: ""
        },
        //Lenovo ThinkPad X1
        8: {
            pix: "",
            credit: ""
        },
        //ASUS ROG Gaming
        9: {
            pix: "",
            credit: ""
        },
        //Google Pixel 8 Pro
        10: {
            pix: "",
            credit: ""
        },
        //Xiaomi Modelo 2025-1
        11: {
            pix: "",
            credit: ""
        },
        //Samsung Modelo 2025-2
        12: {
            pix: "",
            credit: ""
        },
        //Motorola Modelo 2025-3
        13: {
            pix: "",
            credit: ""
        },
        //Apple Modelo 2025-4
        14: {
            pix: "",
            credit: ""
        },
        //Xiaomi Modelo 2025-5
        15: {
            pix: "",
            credit: ""
        },
        //Samsung Modelo 2025-6
        16: {
            pix: "",
            credit: ""
        },
        //Motorola Modelo 2025-7
        17: {
            pix: "",
            credit: ""
        }
    };

    // O produto selecionado é o primeiro (e único) item no carrinho,
    // conforme a lógica de um item por vez do app.js.
    const produtoNoCarrinho = JSON.parse(localStorage.getItem('carrinho'))[0];

    if (!produtoNoCarrinho) {
        alert("Seu carrinho está vazio. Por favor, adicione um produto.");
        return;
    }

    const produtoId = produtoNoCarrinho.id;
    const linksProduto = links[produtoId];

    if (!linksProduto) {
        alert("Links de pagamento não configurados para este produto.");
        return;
    }

    const metodo = document.querySelector('input[name="payment"]:checked').value;

    let linkFinal = "";

    if (metodo === "pix") linkFinal = linksProduto.pix;
    if (metodo === "credit") linkFinal = linksProduto.credit;
    if (metodo === "debit") {
        // Mantém o link de débito genérico ou usa o de crédito se não houver um específico
        linkFinal = linksProduto.credit; 
    }

    if (linkFinal) {
        window.location.href = linkFinal;
    } else {
        alert("Método de pagamento não suportado ou link não encontrado.");
    }
}
