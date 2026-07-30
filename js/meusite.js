// PONTO DE PARTIDA - Seleção dos elementos do HTML
const form = document.getElementById("form-feedback"); //quero pegar alguém do html pelo id para mexer no js e guardar em uma variável
const inputNome = document.getElementById("nome"); // id se chama nome, guardo o que eu fizer na constante(ou variavel) chamada inputNome, nome que eu quiser
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");


//Etapa 1 - Interceptando o Envio do Formulário
form.addEventListener("submit", function(event){
    event.preventDefault(); //impede o recarregamento da página

   // Etapa 2 - Pegando os Valores Digitados
   const nomeDigitado = inputNome.value.trim(); //value captura o conteúdo inserido na caixa nome , trim - limpa espaços ao início e fim
   const comentarioDigitado = inputComentario.value.trim();
   //console.log(nomeDigitado);

   //Etapa 3 - Criando a Validação
   if(nomeDigitado === "" || comentarioDigitado === "") {
    //Regra de erro
    // Etapa 4 - Feedback de erro
    mensagem.textContent = "Erro: Preencha todos os campos!";
    mensagem.style.color = "red";

   } else {
    //Regra de sucesso
    // Etapa 4 - Feedback de sucesso
    mensagem.textContent = "Feedback enviado com sucesso!";
    mensagem.style.color = "green";

   }

   //Etapa 5 - Renderizando o Novo Item na Tela
   // criando tag html li
   const novoItem = document.createElement("li"); 
   // inserido texto no li
   novoItem.textContent = nomeDigitado + " disse: " + comentarioDigitado;
   // adiciona o li como filho da ul do html
   listaComentarios.appendChild(novoItem); 

   // Limpeza dos campos
   inputNome.value = "";
   inputComentario.value = "";

});