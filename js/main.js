$('#telefone').mask('(00) 0000-0000')
$('#celular').mask('(00) 00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')

$('form').validate({

    rules:{
        nome: {
            required:true
        },
        sobrenome: {
            required:true
        },
        cpf: {
            required:true,
            minlength: 14
        },
        email: {
            required:true,
            email:true
        },
        celular: {
            required:true,
            minlength:15
        },
        telefone:{
            required:false,
        },
        endereco: {
            required:true
        },
        cidade: {
            required:true
        }, 
        cep:{
            required:true,
            minlength: 9
        }
    },
    messages: {
        nome: '<span class = "error">Por favor, digite seu primeiro nome</span>',
        sobrenome: '<span class = "error">Por favor, digite seu sobrenome</span>',
        cpf: '<span class = "error">Por favor, digite seu CPF (apenas números)</span>',
        email: '<span class = "error">Por favor, digite seu e-mail</span>',
        celular: '<span class= "error">Por favor, digite seu celular (apenas números)</span>',
        endereco: '<span class = "error">Por favor, digite seu endereço com número e bairro</span>',
        cidade: '<span class = "error">Por favor, digite a Cidade e o Estado</span>',
        cep: '<span class = "error">Por favor, digite seu CEP (apenas números)</span>'
    },
    submitHandler: function(form){
        alert('Cadastro ok!')
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids()
        if (camposIncorretos){
            alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
        }
    }
})
