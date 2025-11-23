function confirmPayment() {

    const linkPix = "https://invoice.infinitepay.io/teste-nidi/3NH2FMhoSh";
    const linkCredito = "https://link.infinitepay.io/teste-nidi/VC1DLUMtSQ-HQMULlrTT-7999,00";
    const linkDebito = "https://link.infinitepay.io/teste-nidi/DEBITO-PRODUTO";

    const metodo = document.querySelector('input[name="payment"]:checked').value;

    let linkFinal = "";

    if (metodo === "pix") linkFinal = linkPix;
    if (metodo === "credit") linkFinal = linkCredito;
    if (metodo === "debit") linkFinal = linkDebito;

    window.location.href = linkFinal;
}
