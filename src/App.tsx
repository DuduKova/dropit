import React, {useEffect} from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useStore} from "./stores";
import {fetchProducts} from "./api";
import {Home} from "./routes/Home";
import {Cart} from "./routes/Cart";
import {observer} from "mobx-react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
]);

export const App = observer(() => {
    const {
        productStore: {
            setProducts,
            setIsLoading,
            setSelectedProducts
        },
        modalStore: {setErrorMessage}
    } = useStore();

    const getProducts = async () => {
        setIsLoading();
        try {
            const data = await fetchProducts();
            setProducts(data);
        } catch (e) {
            console.log(e);
            setErrorMessage('Unable to connect to store, please try again later.')

        }
        setIsLoading();
    }
    useEffect(() => {
        getProducts();
        const res = localStorage.getItem('products');
        if (res) {
            setSelectedProducts(JSON.parse(res))
        }
    }, [])
    return (
        <RouterProvider router={router}/>
    );
})
