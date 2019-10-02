function initKommunicate(appId, conversationTitle, userId, userName, isGeneric){
  (function(d, m){
    var msgTriggerTimeout = 1000;
    var openConversationOnNewMessage = true;
    var askUserDetails = ['name', 'email'];
    var kommunicateSettings = {"appId": appId, "conversationTitle": conversationTitle, "userId": userId,
      "userName": userName, "msgTriggerTimeout": msgTriggerTimeout,
      "openConversationOnNewMessage": openConversationOnNewMessage
    };
    if (isGeneric == "True") {
      kommunicateSettings.askUserDetails = askUserDetails;
      kommunicateSettings.labels = {
        'lead.collection': {
          'name': 'Nombre',
          'email': 'Correo',
          'heading': 'Antes de comenzar, necesitamos solo dos detalles para poder comunicarnos mejor',
          'submit': 'Hablar con soporte'
        },
        'input.message': 'Escribe tu mensaje...',
        'conversations.title': 'Conversaciones',
        'start.new': 'Nueva conversación',
        'search.faq': 'Buscar en las preguntas frecuentes...',
        'looking.for.something.else': '¿Buscando otra cosa?',
        'no-faq-found': 'Vamos a ayudarte.',
        'talk.to.agent': 'Habla con nosotros',
        'closed.conversation.message': 'Esta conversación se ha marcado como resulta. Si tienes más preguntas simplemente envía un mensaje aquí o inicia una nueva conversación.',
        'email.error.alert': 'Parece que has introducido un email incorrecto',
        'typing': 'escribiendo...',
        'is.typing': 'está escribiendo...',
        'send': 'Enviar',
        'send.message': 'Enviar mensaje',
        'smiley': 'Seleccionar Emoji',
        'close': 'Cerrar',
        'edit': 'Editar',
        'save': 'Guardar',
        'file.attachment': 'Subir fichero adjunto',
        'file.attach.title': 'Adjuntar fichero',
      }
    }
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://api.kommunicate.io/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
}
