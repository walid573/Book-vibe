'use client'

import { BookContext } from '@/context/BookContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';




const ReadButton = ({book}:{book: IBook}) => {

    const { setReadBooks} = useContext(BookContext)

    const handleReadBook = () =>{
        console.log("read btn clicked");
        setReadBooks((prevBooks)=>[...prevBooks,book] )
        toast.success(`You have added ${book.bookName} to  your List` )
    }

    return <button onClick={()=> handleReadBook()} className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-600">
                                Read Now →
                            </button>;
};

export default ReadButton;