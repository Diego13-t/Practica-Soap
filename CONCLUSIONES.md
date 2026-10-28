# Conclusiones

SOAP sirve para intercambiar información entre aplicaciones mediante mensajes XML con una estructura fija. El sobre (Envelope) separa el encabezado del cuerpo, de modo que los datos viajan de forma ordenada e independiente del lenguaje de cada sistema. En la práctica, las respuestas como `<fahrenheit>77</fahrenheit>` llegaron dentro de un sobre completo, no como un simple valor.

WSDL es el contrato del servicio. Describe operaciones, tipos de datos, mensajes, vinculación con SOAP y la dirección del endpoint. Gracias a él, otra persona o aplicación puede consumir el servicio sin leer el código; herramientas como SoapUI pueden construir peticiones a partir de ese archivo. Para que funcionara, los nombres del WSDL debieron coincidir exactamente con los de la implementación.

Consultar un WSDL e invocar una operación son acciones distintas. Lo primero es una petición GET con `?wsdl` que devuelve la descripción del servicio; lo segundo es un POST con un sobre XML que ejecuta la operación y devuelve un resultado. Los registros del middleware lo mostraron claramente, con GET para los contratos y POST para las operaciones.

Separar las rutas en un Router mantiene `app.js` limpio y concentra el registro de endpoints en un solo lugar. Cuando la aplicación crece, agregar un servicio nuevo no obliga a modificar la configuración general, y el código resulta más fácil de mantener.

El registro de peticiones es una responsabilidad transversal. Implementarlo como middleware permite escribirlo una vez, ejecutarlo antes de todas las rutas y registrar tanto los WSDL como las operaciones sin repetir código ni alterar el XML.

SOAP con WSDL conviene en integraciones entre sistemas empresariales, como bancos o instituciones, donde se necesita un contrato estricto, validación de tipos y clientes generados automáticamente. Una API REST con JSON es más sencilla en una aplicación web o móvil que solo consulta datos, porque el formato es ligero, tiene menos sobrecarga y es fácil de probar desde el navegador.