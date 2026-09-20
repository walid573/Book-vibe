
'use client'

import { BookContext } from '@/context/BookContext';
import React, { useContext, useState } from 'react';
import BookListCard from '@/app/components/shared/BookListCard';
import { IBook } from '@/types/bookType';

const ListedBooksPage = () => {
    const { readBooks, wishlist } = useContext(BookContext)!;

    const [sortBy, setSortBy] = useState<"rating" | "number" | "year">("rating");

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } 
        else if (sortBy === "number") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } 
        else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;
    };

    const sortedListBook = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishlist);

    return (
        <div>
            <div className='container mx-auto my-2 bg-slate-400 py-[30px] rounded-xl'>
                <h2 className='text-center text-[28px] font-bold'>
                    Books
                </h2>
            </div>

            <div className='text-center'>
                <select
                    className="select select-success"
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as "rating" | "number" | "year"
                        )
                    }
                >
                    <option value="rating">Rating</option>
                    <option value="number">Number of pages</option>
                    <option value="year">Publisher year</option>
                </select>
            </div>

            <div className='container mx-auto'>
                <div className="tabs tabs-border">

                    {/* Read Books */}
                    <input
                        type="radio"
                        name="my_tabs_2"
                        className="tab"
                        aria-label={`Read Book (${readBooks.length})`}
                        defaultChecked
                    />

                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {readBooks.length > 0 ? (
                            sortedListBook.map((book) => (
                                <BookListCard
                                    key={book.bookId}
                                    book={book}
                                />
                            ))
                        ) : (
                            <p>Books not found</p>
                        )}
                    </div>

                    {/* Wishlist */}
                    <input
                        type="radio"
                        name="my_tabs_2"
                        className="tab"
                        aria-label={`Wishlist Books (${wishlist.length})`}
                    />

                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {wishlist.length > 0 ? (
                            sortedWishlist.map((book) => (
                                <BookListCard
                                    key={book.bookId}
                                    book={book}
                                />
                            ))
                        ) : (
                            <p>Wishlist books not found</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;

