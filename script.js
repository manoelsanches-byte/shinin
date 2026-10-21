   const Botoes = document.querySelectorAll("button");
        
        Botoes.forEach( function(Botao) {
            let curtiu = false;
         Botao.addEventListener("click", BotaoClicado);
         function BotaoClicado(){
             console.log("fui clicado");
             let texto = Botao.querySelector("span");
             if (curtiu === false){
                 texto.textContent++;
                 curtiu = true;
             } else {
              texto.textContent --;
              curtiu = false;
             }

            }
        })
        