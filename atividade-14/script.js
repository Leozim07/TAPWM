function validar() {
      let nome = document.getElementById("nome").value.trim();
      let email = document.getElementById("email").value.trim();
      let comentario = document.getElementById("comentario").value.trim();
      let pesquisa = document.querySelector("input[name='pesquisa']:checked");

      // Nome deve ter pelo menos 10 caracteres
      if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
      }

      // Email é validado automaticamente pelo type="email"
      
      // Comentário deve ter pelo menos 20 caracteres
      if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
      }

      // Pesquisa obrigatória
      if (!pesquisa) {
        alert("Que bom que você voltou a visitar esta página!");
        return false;
      } else {
        alert("Volte sempre à esta página!");
        return true; // envia o formulário
      }
    }