# Servicios SOAP con Express y WSDL

Dos servicios SOAP (ConversionesService y GeometriaService) con Node.js y Express.

## Requisitos
- Node.js 18 o superior
- npm
- Postman, SoapUI o PowerShell (para las pruebas)

## Instalación
```bash
git clone <URL-DEL-REPOSITORIO>
cd Practica-Soap
npm install
```

## Ejecución
```bash
npm start
```
El servidor escucha en http://localhost:3000 (puerto configurable con la variable PORT).

## Endpoints y WSDL
| Servicio | Endpoint (POST) | WSDL (GET) |
| --- | --- | --- |
| ConversionesService | /soap/conversiones | /soap/conversiones?wsdl |
| GeometriaService | /soap/geometria | /soap/geometria?wsdl |

## Operaciones
- CelsiusAFahrenheit, KilometrosAMillas
- AreaRectangulo, PerimetroRectangulo

## Cómo reproducir las pruebas
Envía cada archivo de `pruebas/` con POST, el encabezado `Content-Type: text/xml; charset=utf-8` y el `SOAPAction` indicado.

| Operación | URL | SOAPAction | Archivo | Resultado esperado |
| --- | --- | --- | --- | --- |
| CelsiusAFahrenheit | /soap/conversiones | "http://practica.soap/conversiones/CelsiusAFahrenheit" | pruebas/celsius-a-fahrenheit.xml | 77 |
| KilometrosAMillas | /soap/conversiones | "http://practica.soap/conversiones/KilometrosAMillas" | pruebas/kilometros-a-millas.xml | 6.21371 |
| AreaRectangulo | /soap/geometria | "http://practica.soap/geometria/AreaRectangulo" | pruebas/area-rectangulo.xml | 40 |
| PerimetroRectangulo | /soap/geometria | "http://practica.soap/geometria/PerimetroRectangulo" | pruebas/perimetro-rectangulo.xml | 26 |

En Postman: método POST, Body → raw → XML, pegando el contenido del archivo.

## Estructura del proyecto
```text
src/server.js              arranque
src/app.js                 configuración y montaje del Router
src/routes/soap.routes.js  registro de los servicios SOAP
src/middleware/logger.js   registro de peticiones
src/services/              lógica de las operaciones
src/wsdl/                  contratos WSDL
pruebas/                   peticiones XML
evidencias/                capturas
```

## Evidencias
Capturas de los WSDL, de las respuestas SOAP y del log del middleware en `evidencias/`.
