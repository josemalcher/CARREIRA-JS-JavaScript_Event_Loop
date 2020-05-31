# JAVASCRIPT EVENT LOOP

https://academy.especializati.com.br/curso/javascript-event-loop

NESTE CURSO 100% PRÁTICO VOCÊ VAI ENTENDER E APRENDER COMO FUNCIONA O EVENT LOOP DO JAVASCRIPT.

## <a name="indice">Índice</a>

1. [Teoria](#parte1)     
2. [Prática](#parte2)     
---

## <a name="parte1">1 - Teoria</a>

#### 01 - Introdução ao Event Loop JavaScript 

- Base

```html
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <title>Teoria</title>
</head>
<body>
<div class="container">
    <h1>Event Loop</h1>
    <button class="btn btn-success" onclick="start()">Start</button>

</div>
<script src="01-intro.js"></script>
</body>
</html>
```

```js
const start = () => {
    console.log("Start");

    second();

    console.log("End");
}

const second = () => {
    setTimeout(() => {
        console.log("SECOND");
    }, 2000);
}
/* 
Start
End
SECOND
 */


```

#### 02 - Exemplo Assíncrono no JavaScript
#### 03 - Promises no JavaScript
#### 04 - Preloader com Promises no JavaScript
#### 05 - JavaScript Async wait

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Prática</a>

#### 01 - Preparar Projeto JavaScript - stop event default
#### 02 - Consultar API com Ajax e Promises JavaScript
#### 03 - Consultar API com Ajax em JavaScript
#### 04 - Melhorias Projeto Busca CEP com AJAX no JavaScript
#### 05 - Consultar API com Ajax com async e await no JavaScript

[Voltar ao Índice](#indice)

---
