document.getElementById("botaoFinalizar").addEventListener("click", function () {
    const total = localStorage.getItem("valor-total"); // ou a variável que já tem o total

    // Converter para centavos → Ex.: 59.90 vira 5990
    const totalCentavos = Math.round(parseFloat(total) * 100);

    // Dados do produto (pode personalizar)
    const nome = "Compra na Mextill Store";
    const orderNsu = "PED-" + Date.now();
    const redirectUrl = encodeURIComponent("https://seusite.com/obrigado");

    // COLOQUE O SEU HANDLE GERADO PELA INFINITYPAY
    const handle = "SEU_HANDLE_AQUI";

    const link = `https://checkout.infinitepay.io/${handle}?items=[{"name":"${encodeURIComponent(nome)}","price":${totalCentavos},"quantity":1}]&order_nsu=${orderNsu}&redirect_url=${redirectUrl}`;

    // redirecionar usuário
    window.location.href = link;
});
