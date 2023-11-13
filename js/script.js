document.addEventListener('DOMContentLoaded', function () {
    var contadorBtn = document.getElementById('contadorBtn');
    var contadorBtn2 = document.getElementById('contadorBtn2');
  
    var contadorDesign = 0;
    var contadorTexto = 0;
  
    function atualizarContadorDesign(botao) {
      contadorDesign++;
      botao.textContent = contadorDesign;
    }
    
    function atualizarContadorTexto(botao) {
      contadorTexto++;
      botao.textContent = contadorTexto;
    }
  
    contadorBtn.addEventListener('click', function () {
      atualizarContadorDesign(contadorBtn);
    });
  
    contadorBtn2.addEventListener('click', function () {
      atualizarContadorTexto(contadorBtn2);
    });
  });
