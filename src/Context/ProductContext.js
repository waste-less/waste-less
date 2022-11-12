import React, {useState, useEffect} from "react"
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore"; 

export const ProductContext = React.createContext();

export function ProductProvider({children}) {
    const [products, setProducts] = useState([])

    const handleGetProductsFromDb = async() => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsInDb = []
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            productsInDb.push(data)
            
        });
        setProducts(productsInDb)
    }

    useEffect(() => {
        handleGetProductsFromDb()
    },[])
    
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )

}