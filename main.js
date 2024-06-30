function tocaSom(seletorAudio) {
    // Essa função recebe um seletor de áudio como parâmetro
    const elemento = document.querySelector(seletorAudio);
    // Ela usa o método document.querySelector() para selecionar o elemento de áudio correspondente ao seletor fornecido
  
    if (elemento && elemento.localName === 'audio') {
      // Verifica se o elemento foi encontrado e se é realmente um elemento de áudio
      elemento.play();
      // Se for, chama o método play() para reproduzir o som
    } else {
      console.log('Elemento não encontrado ou seletor inválido');
      // Caso contrário, exibe uma mensagem de erro no console
    }
  }
  
  const listaDeTeclas = document.querySelectorAll('.tecla');
  // Seleciona todos os elementos HTML com a classe 'tecla' e armazena na variável listaDeTeclas
  
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Itera sobre cada elemento da listaDeTeclas
    const tecla = listaDeTeclas[contador];
    // Armazena a tecla atual do loop na variável tecla
    
    const instrumento = tecla.classList[1];
    // Obtém o segundo nome da classe CSS da tecla atual, que representa o instrumento associado a essa tecla
    
    const idAudio = `#som_${instrumento}`;
    // Cria um seletor de áudio usando uma template string, que inclui o nome do instrumento
  
    tecla.onclick = function() {
      // Atribui uma função anônima ao evento de clique da tecla
      tocaSom(idAudio);
      // Quando a tecla é clicada, chama a função tocaSom() com o seletor de áudio correspondente
    }
  
    tecla.onkeydown = function(evento) {
      // Atribui uma função anônima ao evento de pressionar a tecla
      if (evento.code === 'Space' || evento.code === 'Enter') {
        // Verifica se a tecla pressionada é a barra de espaço ou a tecla Enter
        tecla.classList.add('ativa');
        // Se for, adiciona a classe CSS 'ativa' à tecla, indicando que ela está ativa
      }
    }
  
    tecla.onkeyup = function() {
      // Atribui uma função anônima ao evento de soltar a tecla
      tecla.classList.remove('ativa');
      // Remove a classe CSS 'ativa' da tecla, indicando que ela não está mais ativa
    }
  }