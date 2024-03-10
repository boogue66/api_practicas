import app from "./app";

app.listen(app.get('port'));
console.log(`el servidor esta ejecitandose en el puerto :${app.get('port')}`);