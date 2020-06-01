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