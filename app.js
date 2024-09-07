function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa")
  // Obtém o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa == "") {
    // Se o campo estiver vazio, exibe uma mensagem com dicas de pesquisa
    section.innerHTML = `
        <div class="item-resultado">
        <h2>Não encontrou o que estava procurando?</h2>
        <p class="descricao-meta">
          Então se liga nas dicas do SherlockDog:<br><br>
          <b>Atados:</b> Essa plataforma reúne diversas ONGs que atuam na área de proteção animal em todo o Brasil. Você pode filtrar por estado e encontrar outras opções além das mencionadas aqui: <a href="https://www.atados.com.br/causa/protecao-animal">https://www.atados.com.br/causa/protecao-animal</a><br><br>
          <b>DogHero:</b> O site DogHero possui uma lista com algumas das maiores ONGs brasileiras, com informações de contato e áreas de atuação: <a href="https://love.doghero.com.br/dicas/ong-de-animais/">https://love.doghero.com.br/dicas/animais/</a><br><br>
          <b>Busca online:</b> Uma simples pesquisa no Google utilizando termos como "ONG de proteção animal + nome do estado" pode te levar a outras organizações locais.
        </p>
        <img class="imagem" src="doglupa.png" alt="Dog Lupa" width="250" height="250">
      `
    return; // Interrompe a função
  }

  // Converte o termo de pesquisa para letras minúsculas para facilitar a comparação
  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    // Converte o título, descrição e tags para letras minúsculas para facilitar a comparação
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      // Se encontrar um resultado, adiciona o HTML do resultado à variável resultados
      resultados += `
    <div class="item-resultado">
    <h2>${dado.titulo}</h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <img src="instagram.png" alt="Ícone do Instagram" width="20" height="20"><a href=${dado.link} target="_blank"> Instagram</a>
    </div>
    `;
    }
  }

  // Se não houver resultados, exibe a mesma mensagem de antes
  if (!resultados) {
    resultados = section.innerHTML = `
    <div class="item-resultado">
    <h2>Não encontrou o que estava procurando?</h2>
    <p class="descricao-meta">
      Então se liga nas dicas do SherlockDog:<br><br>
      <b>Atados:</b> Essa plataforma reúne diversas ONGs que atuam na área de proteção animal em todo o Brasil. Você pode filtrar por estado e encontrar outras opções além das mencionadas aqui: <a href="https://www.atados.com.br/causa/protecao-animal">https://www.atados.com.br/causa/protecao-animal</a><br><br>
      <b>DogHero:</b> O site DogHero possui uma lista com algumas das maiores ONGs brasileiras, com informações de contato e áreas de atuação: <a href="https://love.doghero.com.br/dicas/ong-de-animais/">https://love.doghero.com.br/dicas/animais/</a><br><br>
      <b>Busca online:</b> Uma simples pesquisa no Google utilizando termos como "ONG de proteção animal + nome do estado" pode te levar a outras organizações locais.
    </p>
    <img class="imagem" src="doglupa.png" alt="Dog Lupa" width="250" height="250">
  `
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados
}

// Função para simular um clique no botão
function simularClique(elemento) {
  var event = new MouseEvent('click');
  elemento.dispatchEvent(event);
}

// Função para verificar se a tecla pressionada é Enter
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    var botao = document.getElementById('btnPesquisar');
    simularClique(botao);
  }
});
