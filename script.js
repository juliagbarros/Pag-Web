
let data_atual=new Date()

function troca_pagina(){
   window.location.href="teste.html"
}

function escolha_casa(){
   let pontos_grifinoria =0
   let pontos_sonserina =0
   let pontos_lufa_lufa =0
   let pontos_corvinal =0

   if (
      !document.querySelector('input[name="admiracao"]:checked')||
      !document.querySelector('input[name="papel"]:checked')||
      !document.querySelector('input[name="motivacao"]:checked')||
      !document.querySelector('input[name="problema"]:checked')||
      !document.querySelector('input[name="ambiente"]:checked')||
      !document.querySelector('input[name="habilidade"]:checked')||
      !document.querySelector('input[name="misterio"]:checked')
   ){
      alert("Responda todas as perguntas para que o chapéu decida sua casa!")
      return
   }

   // Lógica p pergunta 1: (com peso 2 pra tentar evitar empate entre casas)
   if (document.getElementById("coragem").checked){
      pontos_grifinoria+=2
   }
   else if (document.getElementById("inteligencia").checked){
      pontos_corvinal+=2
   }
   else if (document.getElementById("lealdade").checked){
      pontos_lufa_lufa+=2
   }
   else if(document.getElementById("ambicao").checked){
      pontos_sonserina+=2
   }

   //Lógica p perguna 2:
   if(document.getElementById("decide").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("planeja").checked){
      pontos_corvinal++
   }
   else if(document.getElementById("escuta").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("arquiteta").checked){
      pontos_sonserina++
   }

   //Lógica p terceira pergunta:
   if(document.getElementById("desafios").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("aprendizado").checked){
      pontos_corvinal++
   }
   else if(document.getElementById("ajudar").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("reconhecimento").checked){
      pontos_sonserina++
   }

   //Lógica p quarta pergunta:
   if(document.getElementById("destemido").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("analista").checked){
      pontos_corvinal++
   }
   else if (document.getElementById("pedir").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("independente").checked){
      pontos_sonserina++
   }

   //Lógica p quinta pergunta:
   if(document.getElementById("aventuras").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("biblioteca").checked){
      pontos_corvinal++
   }
   else if(document.getElementById("amigos").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("luxo").checked){
      pontos_sonserina++
   }

  //Lógica p sexta pergunta:
   if(document.getElementById("invisivel").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("ler").checked){
      pontos_corvinal++
   }
   else if(document.getElementById("curar").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("persuadir").checked){
      pontos_sonserina++
   }

//Lógica p ultima pergunta:
   if(document.getElementById("adrenalina").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("verdade").checked){
      pontos_corvinal++
   }
   else if(document.getElementById("ajudarComunidade").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("vantagem").checked){
      pontos_sonserina++
   }

   //resultados:
   if (pontos_grifinoria> pontos_corvinal && pontos_grifinoria>pontos_lufa_lufa && pontos_grifinoria >pontos_sonserina){
       window.location.href="grifinoria.html"
   }
   else if(pontos_corvinal> pontos_grifinoria && pontos_corvinal>pontos_lufa_lufa && pontos_corvinal >pontos_sonserina){
       window.location.href="corvinal.html"
   }
   else if (pontos_lufa_lufa> pontos_grifinoria && pontos_lufa_lufa>pontos_corvinal && pontos_lufa_lufa >pontos_sonserina){
       window.location.href="lufa.html"
   }
   else if (pontos_sonserina> pontos_grifinoria && pontos_sonserina>pontos_corvinal && pontos_sonserina >pontos_lufa_lufa){
       window.location.href="sonserina.html"
   }

   else{
      localStorage.setItem("pontos_grifinoria", pontos_grifinoria)
      localStorage.setItem("pontos_corvinal", pontos_corvinal)
      localStorage.setItem("pontos_lufa_lufa", pontos_lufa_lufa)
      localStorage.setItem("pontos_sonserina", pontos_sonserina)
      window.location.href="desempate_teste.html"
   }
}

function desempatar(){
   if(!document.querySelector('input[name="desempate"]:checked')){
      alert("Escolha uma das opções!")
      return
   }

   let pontos_grifinoria= Number(localStorage.getItem("pontos_grifinoria"))
   let pontos_corvinal=Number(localStorage.getItem("pontos_corvinal"))
   let pontos_lufa_lufa=Number(localStorage.getItem("pontos_corvinal"))
   let pontos_sonserina=Number(localStorage.getItem("pontos_sonserina"))

   if(document.getElementById("gloria").checked){
      pontos_grifinoria++
   }
   else if(document.getElementById("conhecimento").checked){
      pontos_corvinal++
   }
   else if(document.getElementById("harmonia").checked){
      pontos_lufa_lufa++
   }
   else if(document.getElementById("triunfo").checked){
      pontos_sonserina++
   }

   localStorage.clear()

   if (pontos_grifinoria> pontos_corvinal && pontos_grifinoria>pontos_lufa_lufa && pontos_grifinoria >pontos_sonserina){
       window.location.href="grifinoria.html"
   }
   else if(pontos_corvinal> pontos_grifinoria && pontos_corvinal>pontos_lufa_lufa && pontos_corvinal >pontos_sonserina){
       window.location.href="corvinal.html"
   }
   else if (pontos_lufa_lufa> pontos_grifinoria && pontos_lufa_lufa>pontos_corvinal && pontos_lufa_lufa >pontos_sonserina){
       window.location.href="lufa.html"
   }
   else if (pontos_sonserina> pontos_grifinoria && pontos_sonserina>pontos_corvinal && pontos_sonserina >pontos_lufa_lufa){
       window.location.href="sonserina.html"
   }

}

function refazer_teste(){
      window.location.href="teste.html"
}

function mostra_data(){
   document.getElementById("data").innerHTML =data_atual.toLocaleDateString()
}
mostra_data()
