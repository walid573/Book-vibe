'use client'

import { BookContext } from '@/context/BookContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}:{book: IBook}) => {

    const  {wishlist, setWishlist} = useContext(BookContext)

    const handleWishlistedBooks= ()=> {
        console.log("wishlist pressed");
        setWishlist((prevWishlist)=> [...prevWishlist,book])
        toast.success(`You have added ${book.bookName} to  your wishlist` )
    }

    return <button onClick={()=> handleWishlistedBooks()} className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                                Add to Wishlist ♡
                            </button>;
};

export default WishlistButton;