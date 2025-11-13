// ============================================
// MEXTILL - LOJA VIRTUAL
// Lógica de Produtos, Carrinho e Checkout
// ============================================

// Depoimentos de clientes
const depoimentos = [
    {
        nome: 'Carlos Silva',
        profissao: 'Desenvolvedor',
        texto: 'Excelente qualidade nos produtos! Entrega rápida e atendimento de primeira. Recomendo muito!',
        estrelas: 5,
        emoji: '👨‍💻'
    },
    {
        nome: 'Maria Santos',
        profissao: 'Empresária',
        texto: 'Melhor loja de tecnologia que já comprei. Preços competitivos e produtos originais garantidos.',
        estrelas: 5,
        emoji: '👩‍💼'
    },
    {
        nome: 'João Oliveira',
        profissao: 'Estudante',
        texto: 'Comprei meu notebook aqui e chegou perfeito! Suporte técnico muito atencioso.',
        estrelas: 5,
        emoji: '👨‍🎓'
    },
    {
        nome: 'Ana Costa',
        profissao: 'Designer',
        texto: 'Produtos de qualidade com preços justos. Voltaria a comprar com certeza!',
        estrelas: 5,
        emoji: '👩‍🎨'
    },
    {
        nome: 'Pedro Ferreira',
        profissao: 'Consultor',
        texto: 'Confiável, seguro e com ótimas opções de pagamento. Muito satisfeito com minha compra.',
        estrelas: 5,
        emoji: '👨‍💼'
    },
    {
        nome: 'Lucia Mendes',
        profissao: 'Professora',
        texto: 'Adorei a experiência de compra! Fácil, rápido e seguro. Parabéns Mextill!',
        estrelas: 5,
        emoji: '👩‍🏫'
    }
];

// Produtos disponíveis
const produtos = [
    {
        id: 1,
        nome: 'iPhone 15 Pro',
        categoria: 'Celular',
        preco: 7999.00,
        descricao: 'Smartphone topo de linha',
        emoji: '📱'
    },
    {
        id: 2,
        nome: 'Samsung Galaxy S24',
        categoria: 'Celular',
        preco: 5999.00,
        descricao: 'Android de alta performance',
        emoji: '📱'
    },
    {
        id: 3,
        nome: 'Xiaomi 14 Ultra',
        categoria: 'Celular',
        preco: 4499.00,
        descricao: 'Câmera profissional',
        emoji: '📱'
    },
    {
        id: 4,
        nome: 'iPad Pro 12.9"',
        categoria: 'Tablet',
        preco: 8999.00,
        descricao: 'Tablet premium com M2',
        emoji: '📱'
    },
    {
        id: 5,
        nome: 'Samsung Tab S9',
        categoria: 'Tablet',
        preco: 4999.00,
        descricao: 'Tablet AMOLED 120Hz',
        emoji: '📱'
    },
    {
        id: 6,
        nome: 'MacBook Pro 16"',
        categoria: 'Notebook',
        preco: 15999.00,
        descricao: 'Laptop profissional M3 Max',
        emoji: '💻'
    },
    {
        id: 7,
        nome: 'Dell XPS 15',
        categoria: 'Notebook',
        preco: 9999.00,
        descricao: 'Notebook ultrafino',
        emoji: '💻'
    },
    {
        id: 8,
        nome: 'Lenovo ThinkPad X1',
        categoria: 'Notebook',
        preco: 7499.00,
        descricao: 'Notebook corporativo',
        emoji: '💻'
    },
    {
        id: 9,
        nome: 'ASUS ROG Gaming',
        categoria: 'Notebook',
        preco: 11999.00,
        descricao: 'Notebook gamer RTX 4090',
        emoji: '💻'
    },
    {
        id: 10,
        nome: 'Google Pixel 8 Pro',
        categoria: 'Celular',
        preco: 6499.00,
        descricao: 'Câmera com IA avançada',
        emoji: '📱'
    }
];

// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    renderizarDepoimentos();
    renderizarProdutos();
    atualizarCarrinho();
});

// Renderizar depoimentos na página
function renderizarDepoimentos() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = '';

    depoimentos.forEach(depoimento => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        const estrelas = '⭐'.repeat(depoimento.estrelas);
        card.innerHTML = `
            <div class="testimonial-stars">${estrelas}</div>
            <div class="testimonial-text">"${depoimento.texto}"</div>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${depoimento.emoji}</div>
                <div class="testimonial-info">
                    <h4>${depoimento.nome}</h4>
                    <p>${depoimento.profissao}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Renderizar produtos na página
function renderizarProdutos() {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-imagem">${produto.emoji}</div>
            <div class="produto-nome">${produto.nome}</div>
            <div class="produto-descricao">${produto.descricao}</div>
            <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
            <button class="produto-btn" onclick="adicionarAoCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        `;
        grid.appendChild(card);
    });
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const itemCarrinho = carrinho.find(item => item.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    salvarCarrinho();
    atualizarCarrinho();
    
    // Feedback visual
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Remover produto do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho();
    atualizarCarrinho();
}

// Aumentar quantidade
function aumentarQuantidade(produtoId) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade++;
        salvarCarrinho();
        atualizarCarrinho();
    }
}

// Diminuir quantidade
function diminuirQuantidade(produtoId) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        if (item.quantidade > 1) {
            item.quantidade--;
        } else {
            removerDoCarrinho(produtoId);
            return;
        }
        salvarCarrinho();
        atualizarCarrinho();
    }
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Atualizar exibição do carrinho
function atualizarCarrinho() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    // Contar itens
    const totalItems = carrinho.reduce((total, item) => total + item.quantidade, 0);
    cartCount.textContent = totalItems;

    // Calcular total
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    totalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Renderizar itens
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    } else {
        cartItems.innerHTML = carrinho.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nome}</div>
                    <div class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="diminuirQuantidade(${item.id})">−</button>
                    <span style="color: #ff8800; font-weight: bold; min-width: 30px; text-align: center;">${item.quantidade}</span>
                    <button class="qty-btn" onclick="aumentarQuantidade(${item.id})">+</button>
                </div>
                <button class="remove-btn" onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
        `).join('');
    }
}

// Toggle carrinho
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
}

// Ir para checkout
function goToCheckout() {
    if (carrinho.length === 0) {
        mostrarNotificacao('Adicione produtos ao carrinho primeiro!');
        return;
    }

    // Fechar sidebar
    document.getElementById('cartSidebar').classList.remove('active');

    // Abrir modal de checkout
    abrirCheckout();
}

// Abrir modal de checkout
function abrirCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.add('active');

    // Renderizar resumo do pedido
    const orderSummary = document.getElementById('orderSummary');
    const checkoutTotal = document.getElementById('checkoutTotal');

    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);

    orderSummary.innerHTML = carrinho.map(item => `
        <div class="order-item">
            <span class="order-item-name">${item.nome} (x${item.quantidade})</span>
            <span class="order-item-price">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
        </div>
    `).join('');

    checkoutTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Resetar seleção de pagamento
    document.querySelector('input[name="payment"][value="pix"]').checked = true;
    mostrarMetodoPagamento('pix');
}

// Fechar modal de checkout
function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

// Mostrar método de pagamento
function mostrarMetodoPagamento(metodo) {
    const pixSection = document.getElementById('pixSection');
    const cardSection = document.getElementById('cardSection');
    const confirmButton = document.querySelector('.btn-confirm');

    // Esconde todas as seções e o botão principal
    pixSection.style.display = 'none';
    cardSection.style.display = 'none';
    confirmButton.style.display = 'none';

    if (metodo === 'pix') {
        pixSection.style.display = 'block';
        confirmButton.style.display = 'block';
    } else if (metodo === 'credit' || metodo === 'debit') {
        cardSection.style.display = 'block';
        // O botão de pagamento do cartão está dentro do formulário carregado pelo payment.js
        // O botão principal "Confirmar Pagamento" deve ser escondido
        
        // Se o formulário do cartão ainda não foi carregado, o payment.js fará isso.
        // Se já foi carregado, ele apenas será exibido.
        if (typeof loadCardFormHTML === 'function') {
            loadCardFormHTML();
        }
    }
}

// Listener para mudança de método de pagamento
document.addEventListener('DOMContentLoaded', function() {
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            mostrarMetodoPagamento(this.value);
        });
    });
});

// Copiar para clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        mostrarNotificacao('Chave PIX copiada!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Confirmar pagamento
function confirmPayment() {
    const metodo = document.querySelector('input[name="payment"]:checked').value;

    if (metodo === 'pix') {
        // PIX confirmado
        finalizarCompra('PIX');
    } else if (metodo === 'credit' || metodo === 'debit') {
        // Para cartão, o pagamento é acionado pelo botão dentro do formulário do CardForm (no payment.js)
        mostrarNotificacao('Preencha os dados do cartão e clique em "Pagar com Cartão".');
    } else {
        mostrarNotificacao('Selecione um método de pagamento válido.');
    }
}

// Finalizar compra
// Esta função agora é chamada pelo payment.js (em caso de sucesso do cartão) ou pelo confirmPayment (em caso de PIX)
window.finalizarCompra = (metodo, paymentId = null) => {
    // Fechar modal de checkout
    closeCheckout();

    // Limpar carrinho
    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();

    // Mostrar modal de sucesso
    const successModal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    
    if (metodo === 'PIX') {
        successMessage.textContent = 'Obrigado por sua compra! Você receberá um e-mail com os dados do PIX. Sua compra será confirmada assim que o pagamento for recebido.';
    } else if (metodo === 'CARD') {
        successMessage.textContent = `Pagamento com Cartão APROVADO! ID da Transação: ${paymentId}. Você receberá um e-mail de confirmação em breve.`;
    } else {
        successMessage.textContent = 'Obrigado por sua compra! Você receberá um e-mail de confirmação em breve.';
    }

    successModal.classList.add('active');
}

// Fechar modal de sucesso
function closeSuccess() {
    document.getElementById('successModal').classList.remove('active');
}

// Scroll para produtos
function scrollToProdutos() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

// Mostrar notificação
function mostrarNotificacao(mensagem) {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #ff8800;
        color: #0a0a0a;
        padding: 15px 25px;
        border-radius: 5px;
        font-weight: 600;
        z-index: 400;
        animation: slideIn 0.3s ease;
        box-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
    `;
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);

    // Remover após 3 segundos
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
