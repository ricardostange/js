


//var lista = [4,3,4,6,8,9,8,7,5,4]

swap = function(lista, change){
    let temp = lista[change[0]]
    lista[change[0]] = lista[change[1]]
    lista[change[1]] = temp
}

bubble = function(lista){

    for(i = 0; i < lista.length; i++){
        for(j = 0; j < lista.length-i-1; j++){
            if(lista[j] > lista[j+1]){
                return([j, j+1]);
                //temp = lista[j]
                //lista[j] = lista[j+1]
                //lista[j+1] = temp
            }
        }
    }
    return -1;
}
shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}