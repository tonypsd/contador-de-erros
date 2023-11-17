document.addEventListener('DOMContentLoaded', function () {
  var contadorBtn = document.getElementById('contadorBtn');
  var contadorBtn2 = document.getElementById('contadorBtn2');
  var imagem = document.getElementById('imagemTroca');

  var contadorDesign = 0;
  var contadorTexto = 0;

  function atualizarContadorDesign(botao) {
    contadorDesign++;
    botao.textContent = contadorDesign;
    mudarImagem('./img/mont.png');
  }
  
  function atualizarContadorTexto(botao) {
    contadorTexto++;
    botao.textContent = contadorTexto;
    mudarImagem('./img/mont2.png');
  }

  contadorBtn.addEventListener('click', function () {
    atualizarContadorDesign(contadorBtn);
  });

  contadorBtn2.addEventListener('click', function () {
    atualizarContadorTexto(contadorBtn2);
  });

  function mudarImagem(novaSrc) {
    imagem.src = novaSrc;
  }
});
