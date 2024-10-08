
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const from_name = document.getElementById('name-field').value;
    const from_email = document.getElementById('email-field').value;
    const from_celular = document.getElementById('celular-field').value;
    const message = document.getElementById('message-field').value;

    // Envia o email usando EmailJS
    emailjs.send("service_p6jdjpi", "template_ulklo4c", {
        from_name: from_name,
        from_email: from_email,
        from_celular: from_celular,
        message: message
    })
    .then(function(response) {
        console.log('Email enviado com sucesso!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
    }, function(error) {
        console.error('Falha ao enviar o email:', error);
        alert('Falha ao enviar a mensagem. Tente novamente mais tarde.');
    });
});
