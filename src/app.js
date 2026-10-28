const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const soapRoutes = require('./routes/soap.routes');

const app = express();

// 1) Registro de peticiones: ANTES de las rutas SOAP
app.use(logger);

// 2) body-parser en modo raw: entrega el XML intacto (Buffer) a node-soap
app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));

// 3) Router con los servicios SOAP
app.use(soapRoutes);

module.exports = app;