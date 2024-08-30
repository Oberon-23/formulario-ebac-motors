$(document).ready(function () {
    
    $('#telefone').mask('(00) 0000-00009');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 10
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo.",
                minlength: "O nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "O telefone deve ter pelo menos 10 dígitos."
            },
            cpf: {
                required: "Por favor, insira seu CPF.",
                cpfBR: "Por favor, insira um CPF válido."
            },
            endereco: {
                required: "Por favor, insira seu endereço."
            },
            cep: {
                required: "Por favor, insira seu CEP.",
                minlength: "O CEP deve ter 8 dígitos."
            }
        }
    });
});
