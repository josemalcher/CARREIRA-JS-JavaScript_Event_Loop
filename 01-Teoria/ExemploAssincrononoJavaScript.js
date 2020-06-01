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