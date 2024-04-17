$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancelar-botao').click(function(){
        $('form').slideUp()
    })
})

$('form').on('submit', function(e){
    e.preventDefault()
    const novaTarefa = $('#nova-tarefa').val()
    const novoItem = $(`
        <li>
            ${novaTarefa}
            <div class="botoes">
                <button type="button" class="botao-concluir">
                    <img src="./imagens/check.png" alt="Botão Concluir">
                </button>
                <button type="button" class="botao-excluir">
                    <img src="./imagens/botao-x.png" alt="Botão Excluir">
                </button>
            </div>
        </li>
    `)
    novoItem.appendTo('ul').fadeIn(5000)
    $('#nova-tarefa').val('').focus()
    
})

$("ul").on("click", ".botao-excluir", function () {
    $(this).parents("li").fadeOut(200)
})

$("ul").on("click", ".botao-concluir", function () {
    $(this).parents("li").toggleClass("checked")
})



