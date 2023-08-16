import {action, computed, makeAutoObservable} from "mobx"
import {IProduct} from "../types";
import {findIndex, forEach, sortBy, uniqBy} from "lodash";
import {persist} from 'mobx-persist';

export class ProductStore {
    products: IProduct[] = [];
    @persist selectedProducts: IProduct[] = [];
    isLoading: boolean = false;
    searchItem: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    @action setProducts = (products: IProduct[]) => {
        this.products = products;
    }

    @action setSelectedProducts = (products: IProduct[]) => {
        this.selectedProducts = products;
    }

    @action searchProduct = (text: string) => {
        this.searchItem = text;
    }

    @computed
    showSearchedProducts = (): IProduct[] => {
        if (!this.searchItem) {
           return this.products;
        }
        return this.products.map((product) => product.title.toLowerCase().includes(this.searchItem.toLowerCase()) ? product : null).filter(Boolean) as IProduct[];
    }

    @action clearCart = () => {
        this.selectedProducts = [];
        localStorage.removeItem('products');
    }

    @action addProduct = (product: IProduct) => {
        this.selectedProducts.push(product);
        localStorage.setItem('products', JSON.stringify(this.selectedProducts))
    }

    @action
    removeProduct = (product: IProduct) => {
        this.selectedProducts = this.selectedProducts.filter(item => item.id !== product.id);
    };

    @action setIsLoading = () => {
        this.isLoading = !this.isLoading;
    }

    @computed
    hideBadge = () => !this.selectedProducts.length

    @computed
    selectedProductsByType = () => sortBy(uniqBy(this.selectedProducts, 'id'), ['id'])

    @computed
    numberOfProducts = () => uniqBy(this.selectedProducts, 'id').length

    @computed
    calcQuantity = (id: number) => {
        return this.selectedProducts.filter(item => item.id === id).length;
    }

    @computed
    calcTotalForProduct = (id: number) => {
        let total = 0;
        forEach(this.selectedProducts, (selectedProduct) => {
            if (selectedProduct.id === id) {
                total += selectedProduct.price;
            }
        })
        return total;
    }

    @computed
    calcTotal = () => {
        let total = 0;
        forEach(this.selectedProducts, (selectedProduct) => {
            total += selectedProduct.price;
        })
        return total;
    }

    @computed
    getProductById = (id: number) => {
        return this.selectedProducts.find(item => item.id === id);
    }

    @action
    decrementProductQuantity = (id: number) => {
        const indexToRemove = findIndex(this.selectedProducts, (product) => {
            return product.id === id;
        })
        this.selectedProducts.splice(indexToRemove, 1);
    }

    @action
    incrementProductQuantity = (id: number) => {
        const product = this.getProductById(id);
        this.addProduct(product!);
    }
}
