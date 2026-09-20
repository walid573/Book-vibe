
import Image from 'next/image';
import React, { Suspense } from 'react';

import { IBook } from '@/types/bookType';
import BookCard from '../components/shared/BookCard';
const getBooks = async () => {
    try{

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        return res.json();
    }
    catch(error){
        console.error("error fetching data", error);
        return [];
        
    }
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto px-4 py-12">

            {/* Section Heading */}
            <div className="mb-10 text-center">
                <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                    📚 Explore Collection
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Discover Your Next Book
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-slate-500">
                    Explore our collection of amazing books and find your
                    next favorite story.
                </p>
            </div>

            {/* Book Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<p>Loading..</p>}>
                {booksData.map((book: IBook) => (
                  
                    <BookCard key={book.bookId} book={book}></BookCard> 
                ))}
                  </Suspense> 

            </div>
        </section>
    );
};

export default Books;

