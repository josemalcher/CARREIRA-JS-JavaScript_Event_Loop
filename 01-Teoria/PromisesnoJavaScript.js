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