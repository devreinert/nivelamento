// document = é a pagina html
// getElementById = pega o id que esta entre os ()
// addEventListener(submit) = é o gatilho
// function(e) = cria a função que vai rodar a logica
// e = contem as informações  
document.getElementById("frmCadastro").addEventListener("submit", function (e) {

    // e.preventDefault = cancela o recarregamento da pagina
    e.preventDefault();

    // to pegando as informações colocadas no input do html e armazenando nas variaveis
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    // dando valores as minhas variaveis para compara-las aos valor colocados no input
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // locasStorage = é  como se fosse a memoria da pagina
        // salva a chave logado como true
        localStorage.setItem("logado", "true");
        window.location.href = "home.html";
    }

    else {
        erro.textContent = "Usuário ou senha incorretos!";
    }
});



    

