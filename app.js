const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hola Mundo de los servidores Web Miguel Alejandro Rodríguez Cruz')
})
const port = process.env.PORT || 80;
app.listen(port,()=>{
    console.log('el servidor express esta ejecutandose en el puerto: ' + port);

})

