import { IBook } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps{
    book:IBook
}


const BookCard = ({book}:IBookCardProps) => {
    return (
        <div
                        key={book.bookId}
                        className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                        {/* Image */}
                        <div className="relative h-72 overflow-hidden rounded-xl bg-slate-100">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Rating */}
                            <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-800 shadow backdrop-blur-sm">
                                ⭐ {book.rating}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="pt-5">

                            {/* Category */}
                            <div className="mb-3 flex flex-wrap gap-2">
                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                    {book.category}
                                </span>

                                {book.tags?.slice(0, 1).map(
                                    (tag: string) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                                {book.bookName}
                            </h3>

                            {/* Author */}
                            <p className="mt-2 text-sm text-slate-500">
                                By{' '}
                                <span className="font-semibold text-slate-700">
                                    {book.author}
                                </span>
                            </p>

                            {/* Bottom */}
                            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                                <div>
                                    <p className="text-xs text-slate-400">
                                        Rating
                                    </p>

                                    <p className="font-bold text-slate-800">
                                        ⭐ {book.rating}/5
                                    </p>
                                </div>

                                <Link href={`/books/${book.bookId}`}>
                                <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg">
                                    View Details →
                                </button>
                                </Link>
                            </div>

                        </div>
                    </div>
    );
};

export default BookCard;