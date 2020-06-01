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