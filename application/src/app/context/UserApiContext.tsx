'use client'

import axios from "axios";
import { Faster_One } from "next/font/google";
import React, { createContext, useState, useEffect } from "react";


export const UserApiContext = createContext({});


interface ChildrenType {
    children: React.ReactNode
}

export const UserApiContextProvider = ({ children }: ChildrenType) => {
    const BASE_URL = "http://localhost:4000/api/user"

    const [currentSelectedId, setCurrentSelectedId] = useState('');
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [cartProductList, setCartProductList] = useState<any[]>([]);
    const [isCartVisible, setIsCartVisible] = useState(false);



    //user registration call using POST method.
    const registerUserCall = async (_data: Object) => {
        const { pharmacyName, name, email, phone, licenseNumber, password } = _data;
        setIsLoading(true);
        await axios.post(BASE_URL + '/register', {
            "pharmacyName": pharmacyName,
            "name": name,
            "email": email,
            "phone": phone,
            "licenseNumber": licenseNumber,
            "password": password
        }).then((response) => {
            setShowLogin(response.data.response);
        })
            .catch((error) => {
                console.log(error);
            });
    }


    //make POST request for user login
    const loginCall = async (_data) => {
        const { email, password } = _data;
        setIsLoading(true);
        await axios.post(BASE_URL + '/login', {
            "email": email,
            "password": password
        })
            .then((response) => {
                if (response.data.response) {

                    const data = JSON.stringify({
                        token: response.data.token,
                        id: response.data.user_id
                    })
                    localStorage.setItem("userData", data);
                }
            }).catch((error) => {
                setIsLoading(false);
                console.log(error);
            })
    }


    //GET Request to Fetch all Products data 
    const allProductsCall = async () => {
        setIsLoading(true);
        await axios.get(BASE_URL + '/products')
            .then((response) => {
                if (response.data) {
                    setAllProducts(response.data.products);
                    setIsLoading(false);
                }
            }).catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }



    //add to cart product
    const addToCart = async (data) => {
        let status = true;
        let cartData = {
            id: data?._id,
            name: data?.name,
            price: data?.price,
            url: data?.url,
            quantity: 1
        }
        cartProductList.map((cart, index) => {
            if (cartData.id == cart.id) {
                status = false;
                if ((cart.quantity < 5)) {
                    cartData = {
                        ...cartData,
                        quantity: cart.quantity + 1
                    }
                    cartProductList.splice(index, 1);
                    return setCartProductList([
                        ...cartProductList,
                        cartData
                    ])
                } else {
                    return 0;
                }
            }
        })
        if (status) {
            setCartProductList([
                ...cartProductList,
                cartData
            ])
        }

    }

    const removeFromCart = (productId) => {
        cartProductList.map((cart, index) => {
            if (productId == cart.id) {
                setCartProductList(cartProductList.splice(index, 1))
            }
        })
    }


    const placeOrder = () => {

    }

    return <UserApiContext.Provider value={{
        showLogin,
        setShowLogin,
        isLoading,
        registerUserCall,
        loginCall,
        allProducts,
        allProductsCall,
        currentSelectedId,
        setCurrentSelectedId,
        cartProductList,
        setCartProductList,
        setIsCartVisible,
        isCartVisible,
        addToCart,
        removeFromCart
    }}>
        {children}
    </UserApiContext.Provider>

}