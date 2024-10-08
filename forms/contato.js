// Inicialize o EmailJS com seu User ID
(function() {
    emailjs.init({
        publicKey: "vkVPvdnj9gg8jmDkc",
}); // Substitua "SEU_USER_ID" pelo seu User ID do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Formulário enviado'); // Para verificar se o formulário foi enviado

    const from_name = document.getElementById('name-field').value;
    const from_email = document.getElementById('email-field').value;
    const from_celular = document.getElementById('celular-field').value;
    const message = document.getElementById('message-field').value;

    // Envio do email
    emailjs.send("service_p6jdjpi", "template_ulklo4c", {
        from_name: from_name,
        from_email: from_email,
        from_celular: from_celular,
        message: message
    })
    .then(function(response) {
        console.log('Email enviado com sucesso!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.error('Falha ao enviar o email:', error);
        alert('Falha ao enviar a mensagem. Tente novamente mais tarde.');
    });
});

