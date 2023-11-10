$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
}) 

$('#CPF').mask('000.000.000-00')

$('#CEP').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereço: {
            required: true
        },
        CPF: {
            required: true
        },
        CEP: {
            required: true
        },
    }, 
    messages: {
        nome: 'Por favor, insira o seu nome.',
        email: 'Por favor, insira seu email.',
        telefone: 'Por favor, insira o seu telefone',
        CPF: 'Por favor insira seu CPF.',
        CEP: 'Por favor insira o seu CEP',
        endereço: 'Por favor insira seu endereço'
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposInconrretos = validador.numberOfInvalids();
        if (camposInconrretos) {
            alert(`Existem ${camposInconrretos} campos incorretos.`)
        }
    }
})