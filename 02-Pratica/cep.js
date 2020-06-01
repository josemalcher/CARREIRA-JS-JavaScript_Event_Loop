const searchCep = (event) => {

    /* Stop event default for all browsers*/
    event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.preventValue) event.preventValue();
    return false;


}