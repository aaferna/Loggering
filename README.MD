Paquete para NodeJS para poder crear un registro organizado.

## Instalacion

Lo realizara mediante `npm i loggering`

## Utilizacion

Indicando directorio, nombre de la aplicacion y el dato que usted quiere almacenar.

```js

    loggering(directory, app, data)

```

Por ejemplo

```js

    const c = require("loggering")
    c.loggering('./','Test', JSON.stringify({"msg" :"Data is Saved"}))

```

Este creara un archivo .log ordenado por Nombre de App - Dia de creacion : Test-2021-08-02.log
El archivo se organizara por la hora en que se crea el registro. En este ejemplo se guarda como un JSON Stringfy, pero puede almacenar un String crudo.

```json
    0:26:44 > {"msg":"Data is Saved"}
```

podra almacenar la informacion sin el Timer, simplemente indicandolo en la funcion

```js

    const c = require("loggering")
    c.loggering('./','Test', JSON.stringify({"msg" :"Data is Saved"}), false)

```

quedando de la siguiente forma 

```json
    {"msg":"Data is Saved"}
```

<p align="center">
  <br>
  <bR>
    <img src="https://img.shields.io/github/downloads/gusgeek/Loggering/total">  
    <img src="https://img.shields.io/github/v/release/gusgeek/Loggering">  
    <img src="https://img.shields.io/github/release-date/gusgeek/Loggering">  
    <img src="https://img.shields.io/github/languages/code-size/gusgeek/Loggering">
  <br><br>
  <strong>:pencil2: con :heart:</strong>
</p>
