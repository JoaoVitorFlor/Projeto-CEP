var express = require('express');
app = express();
app.listen(300);


app.get('/ceps', function(request, response){


    var json = {
        nome:"João Vitor",
        idade:"22"
    }

    response.json(json);

});