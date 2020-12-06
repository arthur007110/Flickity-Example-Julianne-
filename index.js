//declarando para que só leia nossa função quando a página estiver totalmente carregada(essêncial)
$(document).ready(function(){
    //declarando que ao clicar no elemento com o id google
    $("#google").click(function() {
        //redirecionar para a localização do link que está dentro do elemento que clicamos
        window.location = $(this).find("a").attr("href"); 
        //caso algo dê errado será retornado false
        return false;
    });
});