import {IProduct} from "../types";

const URL = 'https://mocki.io/v1/9f345655-d334-4ac6-adc8-e44e53272e1f'

export const fetchProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await fetch(URL);
        return response.json();
    } catch (e) {
        throw e;
    }
}