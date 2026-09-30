function createcounter(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = createcounter()
counter();
counter();