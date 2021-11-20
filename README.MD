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

    const { loggering } = require('loggering')
    loggering('Demo', "Data is Saved", './data/')

```

Este creara un archivo .log en el directorio indicado, usando el ejemplo anterior seria ./data/Demo
El archivo se organizara por la hora en que se crea el registro. En este ejemplo se guarda como un String, pero puede almacenar un JSON Stringfy.

```json
    {
    "app": "a",
    "date": {
        "year": 2021,
        "month": 11,
        "day": 20,
        "hour": 7,
        "minute": 26,
        "second": 55,
        "millisecond": 396
    },
    "data": "b"
    }
```


<p align="center">
  <br>
  <bR>
    <img src="https://img.shields.io/github/downloads/gusgeek/Loggering/total">  
    <img src="https://img.shields.io/github/v/release/gusgeek/Loggering">  
    <img src="https://img.shields.io/github/release-date/gusgeek/Loggering">  
    <img src="https://img.shields.io/github/languages/code-size/gusgeek/Loggering">
    <img src="https://img.shields.io/npm/dt/loggering?label=NPM%20Downloads">
      
      
  <br><br>
  <strong>:pencil2: con :heart:</strong>
</p>
