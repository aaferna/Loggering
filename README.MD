Paquete para NodeJS para poder crear un registro organizado.

## Instalacion

Lo realizara mediante `npm i loggering`

## Utilizacion

Indicando directorio, nombre de la aplicacion y el dato que usted quiere almacenar.

```js

    loggering(app, data, directory)

```

Por ejemplo

```js

    const c = require("./logger.js")
    c.loggering('Demo', "Data is Saved", './data/')

```

Este creara un archivo .sol en el directorio indicado, usando el ejemplo anterior seria ./data/Demo
El archivo se organizara por la hora en que se crea el registro. En este ejemplo se guarda como un String, pero puede almacenar un JSON Stringfy.

```json
    {
        "date": {
            "year": 2021,
            "month": 9,
            "day": 6,
            "hour": 22,
            "minute": 55,
            "second": 17,
            "millisecond": 8
        },
        "data": "Data is Saved"
    }
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
