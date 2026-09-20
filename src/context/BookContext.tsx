'use client'

import React, { createContext, ReactNode,  useState } from 'react';


export const BookContext = createContext({})



const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState([])
    const [wishlist, setWishlist] = useState([])

    const sharedBooks = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }


    return <BookContext.Provider value={sharedBooks}>
        {children}
    </BookContext.Provider>
};

export default BooksProvider;