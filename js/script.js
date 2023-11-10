document.addEventListener('DOMContentLoaded', function () {
    var contadorBtn = document.getElementById('contadorBtn');
    var contadorBtn2 = document.getElementById('contadorBtn2');
  
    var contador = 0;
  
    function atualizarContador(botao) {
      contador++;
      botao.textContent = contador;
    }
  
    contadorBtn.addEventListener('click', function () {
      atualizarContador(contadorBtn);
    });
  
    contadorBtn2.addEventListener('click', function () {
      atualizarContador(contadorBtn2);
    });
  });