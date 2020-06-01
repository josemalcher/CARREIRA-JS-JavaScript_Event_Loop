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

```js
const start = () => {
    setTimeout(()=>{
        const store = {id:1, name: "Magazine XPTO"}
        console.log(store);

        setTimeout((idstore) => {
            const category = {id: 1, title: "Promoções", store_id: idstore};
            console.log(category);

            setTimeout(idCategory =>{
                const products = [
                    {id: 1, name: "TV 32", category_id: idCategory},
                    {id: 2, name: "TV 24", category_id: idCategory},
                    {id: 3, name: "TV 350", category_id: idCategory},
                ];
                console.log(products);
            }, 2000, category.id)
        }, 2000, store.id);
    }, 2000)
}

/*
{id: 1, name: "Magazine XPTO"}
{id: 1, title: "Promoções", store_id: 1}
(3) [{…}, {…}, {…}]
0: {id: 1, name: "TV 32", category_id: 1}
1: {id: 2, name: "TV 24", category_id: 1}
2: {id: 3, name: "TV 350", category_id: 1}
length: 3
__proto__: Array(0)
* */
```

#### 03 - Promises no JavaScript

```js
const store = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const store = {id:1, name: "Magazine XPTO"}

            resolve(store);
        }, 2000)
    })
}

const category = (idStore) => {
    return new Promise((resolve, reject)=>{
        setTimeout((idstore) => {
            const category = {id: 1, title: "Promoções", store_id: idstore};

            resolve(category);
        }, 2000)
    })
}

const products = (idCategory)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const products = [
                {id: 1, name: "TV 32", category_id: idCategory},
                {id: 2, name: "TV 24", category_id: idCategory},
                {id: 3, name: "TV 350", category_id: idCategory},
            ];

            resolve(products);
        }, 2000)
    })
}

const start = () =>{
    store()
        .then(store=>{
            console.log(store);

            return category(store.id)
        })
        .then(category => {
            console.log(category);

            return products(category.id);
        })
        .then(products => {
            console.log(products);
        })
        .catch(error => {
            console.log(error);
        })
}

/*
{id: 1, name: "Magazine XPTO"}
{id: 1, title: "Promoções", store_id: undefined}
(3) [{…}, {…}, {…}]
0: {id: 1, name: "TV 32", category_id: 1}
1: {id: 2, name: "TV 24", category_id: 1}
2: {id: 3, name: "TV 350", category_id: 1}
length: 3
__proto__: Array(0)
* */
```

#### 04 - Preloader com Promises no JavaScript

```js
const preloader = document.getElementById('preloader');
const startPreloader = () =>{
    preloader.style.display = 'block';
}
const endPreloader = ()=>{
    preloader.style.display = "none";
}
```

#### 05 - JavaScript Async wait

```js
const getstore = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const store = {id: 1, name: "Magazine XPTO"}

            resolve(store);
        }, 2000)
    })
}

const getcategory = (idStore) => {
    return new Promise((resolve, reject) => {
        setTimeout((idstore) => {
            const category = {id: 1, title: "Promoções", store_id: idstore};

            resolve(category);
        }, 2000)
    })
}

const getproducts = (idCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                {id: 1, name: "TV 32", category_id: idCategory},
                {id: 2, name: "TV 24", category_id: idCategory},
                {id: 3, name: "TV 350", category_id: idCategory},
            ];

            resolve(products);
        }, 2000)
    })
}

const start = async () => {

    startPreloader();

    const store = await getstore()
    console.log(store);

    const category = await getcategory(store.id);
    console.log(category);

    const products = await getproducts(category.id);
    console.log(products);

    endPreloader();

};
```

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Prática</a>

#### 01 - Preparar Projeto JavaScript - stop event default
#### 02 - Consultar API com Ajax e Promises JavaScript

```js
const config = {
    method: 'GET'
}

const searchCep = (event) => {

    const cep = document.getElementById('cep').value || '0000000';

    fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json` , config)

        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            if(data.status === 400) throw data.message;

        })
        .catch(error => {
            console.log(error);
        });


    /* Stop event default for all browsers*/
    event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.preventValue) event.preventValue();
    return false;


}
```

#### 03 - Consultar API com Ajax em JavaScript

```js
const result = document.getElementById('results');
const showResult = (addressJSON) => {
    result.style.display = 'block';

    const html = `
        <ul class="list-group">
            <li class="list-group-item"><strong>CEP: ${addressJSON.code}</strong></li>
            <li class="list-group-item"><strong>Cidade: ${addressJSON.city}</strong></li>
            <li class="list-group-item"><strong>Estado: ${addressJSON.state}</strong></li>
            <li class="list-group-item"><strong>Rua: ${addressJSON.district}</strong></li>
        </ul>
    `;

    result.innerHTML = html;

}
```

#### 04 - Melhorias Projeto Busca CEP com AJAX no JavaScript
#### 05 - Consultar API com Ajax com async e await no JavaScript

[Voltar ao Índice](#indice)

---
