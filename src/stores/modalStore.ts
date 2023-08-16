import {action, makeAutoObservable} from "mobx"

export class ModalStore {
    isOpen: boolean = false;
    errorMessage: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    @action setIsOpen = (isOpen: boolean) => {
        this.isOpen = isOpen;
    }

    @action setErrorMessage = (error: string) => {
        this.errorMessage = error;
        setTimeout(() => {
            this.errorMessage = '';
        },5000)
    }
}
