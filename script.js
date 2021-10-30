<script>
  (function() {
    //Получаем данные, которые необходимо отправить
    var name = {{JS - Input text}};
    var phone = {{JS - Input tel}};
    var text = {{JS - Textarea text}};
    var formName = {{LT - Forms}};
    
    //Формируем сообщение из полученных данных
    var message = '<b>Форма:</b> ' + formName + '%0A' + '<b>Имя:</b> ' + name + '%0A' + '<b>Телефон:</b> ' + phone + '%0A' + '<b>Сообщение:</b> ' + text;
    
    var chat_id = <id>; //id получателя или группы
    var token = <token>;  //Ваш токен
    
    //Тут лучше ничего не трогать
    var url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='+message+'&parse_mode=html';
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
  })();
</script>
