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
