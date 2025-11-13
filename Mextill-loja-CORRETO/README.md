# Mextill - Loja Virtual

Uma loja virtual moderna e responsiva com tema neon laranja e preto, desenvolvida com HTML, CSS e JavaScript puro.

## 🎨 Características

- **Design Neon**: Tema visual com laranja neon (#ff8800) e preto (#0a0a0a)
- **10 Produtos**: Celulares, tablets e notebooks com preços reais
- **Carrinho de Compras**: Funcional com persistência em localStorage
- **Sistema de Checkout**: Fluxo completo de compra
- **Pagamento PIX**: Integrado com duas chaves PIX
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Sem Dependências**: Apenas HTML, CSS e JavaScript puro

## 📦 Estrutura do Projeto

```
mextill-loja/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos com tema neon
├── js/
│   └── app.js          # Lógica da aplicação
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Extraia o arquivo ZIP** em seu computador
2. **Abra o arquivo `index.html`** no seu navegador (duplo clique)
3. **Navegue pela loja**:
   - Veja os produtos disponíveis
   - Clique em "Adicionar ao Carrinho"
   - Abra o carrinho (ícone 🛒)
   - Ajuste quantidades conforme necessário
   - Clique em "Ir para Pagamento"

## 💳 Métodos de Pagamento

### PIX (Ativo)
- **Chave CPF**: 63455081000134
- **Chave Telefone**: 11932539543

### Cartão de Crédito e Débito
- Funcionalidade será implementada em breve
- Por enquanto, use PIX para completar suas compras

## 🛒 Carrinho de Compras

- **Adicionar produtos**: Clique no botão "Adicionar ao Carrinho"
- **Ajustar quantidade**: Use os botões + e - no carrinho
- **Remover itens**: Clique em "Remover"
- **Persistência**: Seu carrinho é salvo automaticamente no navegador

## 📱 Responsividade

A loja funciona perfeitamente em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (até 480px)

## 🎯 Produtos Disponíveis

1. iPhone 15 Pro - R$ 7.999,00
2. Samsung Galaxy S24 - R$ 5.999,00
3. Xiaomi 14 Ultra - R$ 4.499,00
4. iPad Pro 12.9" - R$ 8.999,00
5. Samsung Tab S9 - R$ 4.999,00
6. MacBook Pro 16" - R$ 15.999,00
7. Dell XPS 15 - R$ 9.999,00
8. Lenovo ThinkPad X1 - R$ 7.499,00
9. ASUS ROG Gaming - R$ 11.999,00
10. Google Pixel 8 Pro - R$ 6.499,00

## 🔧 Personalização

### Mudar Cores
Edite o arquivo `css/style.css` e altere as variáveis CSS:
```css
:root {
    --primary-orange: #ff8800;
    --primary-black: #0a0a0a;
    /* ... outras cores ... */
}
```

### Adicionar Produtos
Edite o arquivo `js/app.js` e adicione novos itens ao array `produtos`:
```javascript
{
    id: 11,
    nome: 'Seu Produto',
    categoria: 'Categoria',
    preco: 1999.00,
    descricao: 'Descrição do produto',
    emoji: '📱'
}
```

### Alterar Chaves PIX
Edite o arquivo `index.html` e procure pela seção "Dados para Pagamento PIX":
```html
<span id="pixKey1">SUA_CHAVE_PIX_AQUI</span>
```

## 💡 Dicas

- O carrinho persiste mesmo se você fechar o navegador
- Copie as chaves PIX com um clique no botão "Copiar"
- A loja usa localStorage para armazenar o carrinho
- Todos os preços estão em Real (R$)

## 📝 Notas

- Esta é uma versão de demonstração
- Os pagamentos não são processados automaticamente
- Implemente um backend para processar pagamentos reais
- Adicione SSL/TLS para segurança em produção

## 🎓 Tecnologias

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript ES6+
- localStorage API

## 📧 Suporte

Para dúvidas ou sugestões sobre a loja, entre em contato!

---

**Desenvolvido com ❤️ para Mextill**
