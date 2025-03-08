function alterarQuantidade(botao, valor) {
    let linha = botao.closest("tr");
    let quantidadeCelula = linha.querySelector(".quantidade");
    let quantidadeAtual = parseInt(quantidadeCelula.textContent);

    if (quantidadeAtual + valor >= 0) {
        quantidadeCelula.textContent = quantidadeAtual + valor;
    }
}

function visualizarQRCode() {
    var modal = new bootstrap.Modal(document.getElementById('qrCodeModal'), {
        keyboard: true
    });
    var qrCodeImage = document.getElementById('qrCodeImage');
    qrCodeImage.src = '../img/frame.png';
    modal.show();
}