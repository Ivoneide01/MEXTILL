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
