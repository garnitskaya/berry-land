export const getCartFromLocalStorage = (name: string) => {
    const data = localStorage.getItem(name);
    return data ? JSON.parse(data) : [];
}