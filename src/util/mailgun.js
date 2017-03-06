import { Mailgun } from "mailgun-js";

var api_key = 'key-617nsyfc1wr4mzd6uf9wcznhkle4zl51';
var domain = 'www.meraas.com';


var mailgun = Mailgun({apiKey: api_key, domain: domain});

export default ({to, subject, body}) => {
    
    var data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'serobnic@mail.ru',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    };
    
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
};