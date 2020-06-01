const config = {
    method: 'GET'
}
const result = document.getElementById('results');
const searchCep = (event) => {
    startPreloader()

    result.style.display = 'none';
    const cep = document.getElementById('cep').value || '0000000';

    fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json` , config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);

            if (data.status === 400) throw data.message;

            showResult(data);
        })
        .catch(error => {
            console.log(error);
            showError(error)
        })
        .finally(()=> endPreloader());


    /* Stop event default for all browsers*/
    event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.preventValue) event.preventValue();
    return false;

}


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
const showError = (error) => {
    result.style.display = 'block';

    const html = `
        <ul class="list-group">
            <li class="list-group-item" style="color: red"><strong>${error}</strong></li>
        </ul>
    `;

    result.innerHTML = html;

}