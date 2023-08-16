export const priceFormat = (price: number) => {
    return `$${price.toFixed(2)}`;
};

export const textFormat = (text: string) => {
    return text.slice(0,50);
}