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
        imagem: 'https://m.media-amazon.com/images/I/41+jLq6yJKL._AC_SX679_.jpg',
        imagens: [
            'https://m.media-amazon.com/images/I/41+jLq6yJKL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/31jrTen3vUL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61JfjeFrqhL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/51k8c06WvdL._AC_SX679_.jpg'
        ]
    },
    {
        id: 2,
        nome: 'Samsung Galaxy S24',
        categoria: 'Celular',
        preco: 5999.00,
        descricao: 'Android de alta performance',
        imagem: 'https://m.media-amazon.com/images/I/61P12ycOI7L._AC_SL1500_.jpg',
        imagens: [
            'https://m.media-amazon.com/images/I/61P12ycOI7L._AC_SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71xptk3CltL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61ApxFEvTSL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61mfpvRrQBL._AC_SX679_.jpg'
        ]
    },
    {
        id: 3,
        nome: 'Xiaomi 14 Ultra',
        categoria: 'Celular',
        preco: 4499.00,
        descricao: 'Câmera profissional',
        imagem: 'https://i.ebayimg.com/images/g/QXwAAOSwI4lngknV/s-l1600.webp',
        imagens: [
            'https://i.ebayimg.com/images/g/QXwAAOSwI4lngknV/s-l1600.webp',
            'https://i.ebayimg.com/images/g/wD8AAeSwqKdoiiDB/s-l1600.webp',
            'https://i.ebayimg.com/images/g/P8UAAOSwWYZngknS/s-l1600.webp',
            'https://i.ebayimg.com/images/g/UiYAAeSwOSpocgMb/s-l1600.webp'
        ]
    },
    {
        id: 4,
        nome: 'iPad Pro 12.9"',
        categoria: 'Tablet',
        preco: 8999.00,
        descricao: 'Tablet premium com M2',
        imagem: 'https://m.media-amazon.com/images/I/61sEJ2+OAbL._AC_SX679_.jpg',
        imagens: [
            'https://m.media-amazon.com/images/I/61sEJ2+OAbL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/41NH-l7ctJL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/51hVyLLOebL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61LHiDQIGrL._AC_SX679_.jpg'
        ]
    },
    {
        id: 5,
        nome: 'Samsung Tab S9',
        categoria: 'Tablet',
        preco: 4999.00,
        descricao: 'Tablet AMOLED 120Hz',
         imagem: 'https://m.media-amazon.com/images/I/51Y09aVg80L._AC_SX679_.jpg',
        imagens: [
            'https://m.media-amazon.com/images/I/51Y09aVg80L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/51qA4PVOgTL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/41MfugP9b1L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/2107kSY+TzL._AC_SL1000_.jpg'
        ]
    },
    {
        id: 6,
        nome: 'MacBook Pro 16"',
        categoria: 'Notebook',
        preco: 15999.00,
        descricao: 'Laptop profissional M3 Max',
          imagem: '',
        imagens: [
            'https://m.media-amazon.com/images/I/51W6Tzbyu5L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61jS6KA-DJL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71r2uLmP3KL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/410IoxZEdkL._AC_SX679_.jpg'
        ]
    },
    {
        id: 7,
        nome: 'Dell XPS 15',
        categoria: 'Notebook',
        preco: 9999.00,
        descricao: 'Notebook ultrafino',
               imagem: 'https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SX679_.jpg',
        imagens: [
            'https://p1-ofp.static.pub//fes/cms/2024/07/05/5zlebnmd2r6qoijtnbdue8c59529q2840002.png?width=400&height=400',
            'https://p3-ofp.static.pub//fes/cms/2024/02/05/caqs1cskxq1zogc2bvou8lblvwuf09813272.jpg',
            'https://p3-ofp.static.pub//fes/cms/2024/02/01/nhvo402xlkwvhgnfe680j6395v9oht147022.jpg',
            'https://p3-ofp.static.pub//fes/cms/2024/02/01/mw0mjq0c20hp5402yoobcwppuast0b734865.jpg'
        ]
    },
    {
        id: 8,
        nome: 'Lenovo ThinkPad X1',
        categoria: 'Notebook',
        preco: 7499.00,
        descricao: 'Notebook corporativo',
                imagem: 'https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SX679_.jpg',
        imagens: [
            'https://acdn-us.mitiendanube.com/stores/002/015/492/products/1-4fa605cb749417068c17615666185862-1024-1024.webp',
            'https://acdn-us.mitiendanube.com/stores/002/015/492/products/2-aa194fd0640ad3c4ae17615666186750-1024-1024.webp',
            'https://acdn-us.mitiendanube.com/stores/002/015/492/products/4-7a7cf98b71c4fb15c017615666184782-1024-1024.webp',
            'https://acdn-us.mitiendanube.com/stores/002/015/492/products/3-b156a9e31515c3b34817615666184143-1024-1024.webp'
        ]
    },
    {
        id: 9,
        nome: 'ASUS ROG Gaming',
        categoria: 'Notebook',
        preco: 11999.00,
        descricao: 'Notebook gamer RTX 4090',
                 imagem: 'https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SX679_.jpg',
        imagens: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_644479-MLA95687171866_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_698372-MLA88118777585_072025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_814511-MLA88073299636_072025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_987820-MLA88413761065_072025-F.webp'
        ]
    },
    {
        id: 10,
        nome: 'Google Pixel 8 Pro',
        categoria: 'Celular',
        preco: 6499.00,
        descricao: 'Câmera com IA avançada',
                 imagem: 'https://images6.kabum.com.br/produtos/fotos/sync_mirakl/535146/xlarge/Smartphones-Google-Pixel-8-Pro-128GB-Obsidian_1753474490.jpg',
        imagens: [
            'https://images6.kabum.com.br/produtos/fotos/sync_mirakl/535146/xlarge/Smartphones-Google-Pixel-8-Pro-128GB-Obsidian_1753474490.jpg',
            'https://images5.kabum.com.br/produtos/fotos/sync_mirakl/592425/xlarge/Google-Pixel-8a-128GB-Bay-Desbloqueado_1758919779.png',
            'https://images0.kabum.com.br/produtos/fotos/sync_mirakl/535160/xlarge/Smartphone-Google-Pixel-8-Pro-512GB-Bay-Blue_1754071781.jpg',
            'https://img.odcdn.com.br/wp-content/uploads/2023/10/pixel-8-pro-e1701881358432.jpg'
        ]
    },
    {
        id: 11,
        nome: 'Xiaomi Modelo 2025-1',
        categoria: 'Celular',
        preco: 1009.00,
        descricao: 'Lançamento 2025',
                   imagem: 'https://images.openai.com/thumbnails/url/3rXZrnicDcntDkJQGADgK0Ixha21TMNKTlra8cc45Gt4j_O2uJ3uqrup5-_z_dSIICxFKQc2LYBlIWE-aHIlMMOGyWzsFVGPAM1Q7fnuf9bhUpgui3zwsySNzXdoRPiAegmoCcfpDrxPT3gL3F5KthvP9OM4AJ2Tp0QCY9K72el4e1PpmdqEhGutFXWyQszZq-upZ88ODTPkmcrL4UrAS_EHYlE6qQ',
        imagens: [
            'https://images.openai.com/thumbnails/url/3rXZrnicDcntDkJQGADgK0Ixha21TMNKTlra8cc45Gt4j_O2uJ3uqrup5-_z_dSIICxFKQc2LYBlIWE-aHIlMMOGyWzsFVGPAM1Q7fnuf9bhUpgui3zwsySNzXdoRPiAegmoCcfpDrxPT3gL3F5KthvP9OM4AJ2Tp0QCY9K72el4e1PpmdqEhGutFXWyQszZq-upZ88ODTPkmcrL4UrAS_EHYlE6qQ',
            'https://images.openai.com/thumbnails/url/iRRxC3icDcnbEoFAAADQLyIi2maMQaHrKk2qt9qi7bK2div-yu_4G87r-X4KzilTBCEnqHtTnmcTnpLF9MF4wjGaomcjsOJJKSaPbbv5n7JzMnBCnhjLg6fpoQ9cVHXrIjHWB7A8nOy4bI6gJWYRsNtcvMtm7TC504dO8i7Gy5JWYdnDzJFgEKg4nFQzS4xVFe1nVVrrQ3SlEPQ1c-05OS-g5UdHPOrX3IeDjz1t_AE4eT1-',
            'https://images4.kabum.com.br/produtos/fotos/sync_mirakl/885034/xlarge/Smartphone-Xiaomi-15-Ultra-5g-512gb-16gb-Global-Preto_1761698911.png',
            'https://images.openai.com/thumbnails/url/KiKV3XicDcnbDoIgAADQL_Ky0BVuraFt2UUr4yF8aQoMaUtB8dZH9T_9TZ3X8_1UxqgucBxe03ZWhjPLlDWwRWcKI6lNm5fTVY1SshYbvf5fgFIGd_QWX1o-ywinwpCtLr19Mhat8LEqyzHbU7Dix0GQB8QDTEKCDvJwRygF-MXxVCCWKj8K--vR6sliIn1eT-9-XHoui-BTZzEj7nzOTgaEMbTaXOexbFzt_QBPaD4V'
        ]
    },
    {
        id: 12,
        nome: 'Samsung Modelo 2025-2',
        categoria: 'Celular',
        preco: 1019.00,
        descricao: 'Lançamento 2025',
                     imagem: 'https://images.openai.com/thumbnails/url/rrqORnicDclLDoIwFADAE_GRzwITY0gjiCgSYhFXDbRIUYFXKRA4ldfxNjrb-X64lNCvNa1s6XsGWTJFFu1KrXqZy5qqtGu0nncAdVttxeZ_azdijk8TG_HeBDKYjWDcPYZdlhlGgEPdP2Fi4RHaxLPAswMlKnmqI1KtzMMuXp4X2KMAkVSYTXKeX3dRgPO2E4PzzLgOVh7LB0Mip9m0G-sqKrANL90it0XSG5l-ZxI-vQ',
        imagens: [
            'https://images.openai.com/static-rsc-1/6CuY4AryYu3hsedNkJW-d5lBq1IZleuMre5aBP67NLsMFaw7QMLv9VYNAInV9yMSbmzMCvA2lmJQrP1q_jPrm56oshtPXldmsJO4MmWnPwq-0Eo5ZGphDc_Cy7cv_bggvqFoXUrktiuIXSps__yZ55rRFLWb65uVN70kMsi7zjonJMwUEnzQYtwhbP4p7UwxYjbNmQ9GdbO2PB5HCygmmAUoeai_Llt8Nt4PU0QmpTBPldKkJF1UZmcoLG_wOCv5JTWiuUDY4Uxq7NiCPZhl_g',
            'https://images.openai.com/thumbnails/url/oYmYMXicDcnbCoIwAADQL1JnOZhCRFGsi5TTtPQlcuqm0Fxu4eWr-p3-ps7r-X641lJ5llUK2o1Sl4WhcwFMpvRD19Sk7dNSvJWyFmz5WvzPW50KF9MQNFHg5I8Y9adzmkSomCvkGOHldqcDK9HQszSosH0Uu5CefdfZt3nYJFPn6tkeks7OsngkbkSdFUQYS1ZMeFjbB8CRCrZTMpLZZaPfPDXgUPWAwpgLH17JD1TxPYY',
            'https://images7.kabum.com.br/produtos/fotos/magalu/876187/xlarge/Smartphone-Samsung-Galaxy-S25-Edge-512GB-Tit-nio-Prata-5G-12GB-RAM-6-7-C-m-Dupla-Selfie-12MP_1760462042.jpg',
            'https://images7.kabum.com.br/produtos/fotos/magalu/876187/xlarge/Smartphone-Samsung-Galaxy-S25-Edge-512GB-Tit-nio-Prata-5G-12GB-RAM-6-7-C-m-Dupla-Selfie-12MP_1760462046.jpg'
        ]
    },
    {
        id: 13,
        nome: 'Motorola Modelo 2025-3',
        categoria: 'Celular',
        preco: 1029.00,
        descricao: 'Lançamento 2025',
                 imagem: 'https://m.media-amazon.com/images/I/61fCuWd+6fL._AC_SX679_.jpg',
        imagens: [
            'https://m.media-amazon.com/images/I/61fCuWd+6fL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61pTqS1tMPL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61Qnuu3DH1L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61dOZuh80LL._AC_SX679_.jpg'
        ]
    },
  {
        id: 14,
        nome: 'Apple Modelo 2025-4',
        categoria: 'Celular',
        preco: 1039.00,
        descricao: 'Lançamento 2025',
                 imagem: 'https://m.media-amazon.com/images/I/41uMcSPiYAL._AC_SX679_.jpg',
        imagens: [
            'https://m.media-amazon.com/images/I/41uMcSPiYAL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/51nhjDNhsIL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/41k0Gekg9gL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61o8ae8BMpL._AC_SX679_.jpg'
        ]
    },
    {
        id: 15,
        nome: 'Xiaomi Modelo 2025-5',
        categoria: 'Celular',
        preco: 1049.00,
        descricao: 'Lançamento 2025',
                 imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_961060-MLA96126328845_102025-F.webp',
        imagens: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_961060-MLA96126328845_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_633336-MLA84186175324_052025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_824555-MLA84186175332_052025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_865705-MLA95664896378_102025-F.webp'
        ]
    },
    {
        id: 16,
        nome: 'Samsung Modelo 2025-6',
        categoria: 'Celular',
        preco: 1059.00,
        descricao: 'Lançamento 2025',
                 imagem: 'https://samsungbrshop.vtexassets.com/arquivos/ids/265019-600-auto?v=638919200618000000&width=600&height=auto&aspect=true',
        imagens: [
            'https://samsungbrshop.vtexassets.com/arquivos/ids/265019-600-auto?v=638919200618000000&width=600&height=auto&aspect=true',
            'https://m.media-amazon.com/images/I/61RPgXTQmVL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61nbT3HoeQL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/71UWP+YktoL._AC_SX679_.jpg'
        ]
    },
    {
        id: 17,
        nome: 'Motorola Modelo 2025-7',
        categoria: 'Celular',
        preco: 1069.00,
        descricao: 'Lançamento 2025',
                 imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_813783-MLB95994840710_102025-F.webp',
        imagens: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_813783-MLB95994840710_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_759489-MLA96419841402_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_930919-MLA96868687521_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_950626-MLA84480583525_052025-F.webp'
        ]
    },

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
function renderizarProdutos(lista = produtos) {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    lista.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        
        // Verificar se o produto tem múltiplas imagens
        const temGaleria = produto.imagens && produto.imagens.length > 1;
        const imagemPrincipal = temGaleria ? produto.imagens[0] : produto.imagem;
        
        // Criar HTML da galeria de miniaturas
        let galeriaHTML = '';
        if (temGaleria) {
            galeriaHTML = `
                <div class="produto-miniaturas">
                    ${produto.imagens.map((img, index) => `
                        <img src="${img}" 
                             alt="${produto.nome} - Imagem ${index + 1}" 
                             class="miniatura ${index === 0 ? 'active' : ''}"
                             onclick="trocarImagemProduto(${produto.id}, ${index})">
                    `).join('')}
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="produto-imagem-container">
                <div class="produto-imagem">
                    <img id="img-produto-${produto.id}" src="${imagemPrincipal}" alt="${produto.nome}">
                </div>
                ${galeriaHTML}
            </div>
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

// Trocar imagem do produto ao clicar na miniatura
function trocarImagemProduto(produtoId, imagemIndex) {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto || !produto.imagens) return;
    
    // Atualizar imagem principal
    const imgPrincipal = document.getElementById(`img-produto-${produtoId}`);
    imgPrincipal.src = produto.imagens[imagemIndex];
    
    // Atualizar classe active nas miniaturas
    const card = imgPrincipal.closest('.produto-card');
    const miniaturas = card.querySelectorAll('.miniatura');
    miniaturas.forEach((mini, index) => {
        if (index === imagemIndex) {
            mini.classList.add('active');
        } else {
            mini.classList.remove('active');
        }
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

// --- SISTEMA DE BUSCA DE PRODUTOS ---
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const termo = searchInput.value.toLowerCase();

        // Filtra produtos pelo nome ou descrição
       // Filtra produtos por nome, descrição OU categoria
const produtosFiltrados = produtos.filter(prod => 
    prod.nome.toLowerCase().includes(termo) ||
    prod.descricao.toLowerCase().includes(termo) ||
    prod.categoria.toLowerCase().includes(termo)
);


        // Renderiza somente os produtos filtrados
        renderizarProdutos(produtosFiltrados);
    });
}

