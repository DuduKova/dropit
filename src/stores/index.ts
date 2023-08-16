import { createContext, useContext } from 'react';
import {ProductStore} from './productStore'
import {ModalStore} from "./modalStore";

export interface IStore {
    productStore: ProductStore;
    modalStore: ModalStore;
}
export const store: IStore = {
    productStore: new ProductStore(),
    modalStore: new ModalStore()
};
export const StoreContext = createContext(store);
export const useStore = () => {
    return useContext(StoreContext);
};
