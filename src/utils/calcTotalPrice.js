export const calcTotalPrice = (item) => {
    const sum = item.reduce((acc, item) => item.newPrice ?
        acc += +item.newPrice * item.quantity :
        acc += +item.price * item.quantity, 0);
    return sum.toFixed(2);
}

export const calcTotalQuantity = (item) => {
    const sum = item.reduce((acc, item) => acc += +item.quantity, 0);
    return sum;
}