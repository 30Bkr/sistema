
export const precioTotal = (products) => {
    let sum = 0
    products.forEach(product => sum += product.precio)
    return sum
}

export const lista = (product) => {
    const observar = product.map(product => product.productos);
    const contar = observar.flat();
    const contador = contar
    .map(item => item.id)
    .reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] =1;
        }else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    }, {});
    const final = Object.entries(contador)
    return final;
}