import { IBook } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiCalendar, FiFileText, FiUser } from 'react-icons/fi';

interface BookCardProps {
    book: IBook;
}

const BookListCard = ({ book }: BookCardProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md sm:p-4">

            <div className="flex gap-4">

                {/* Book Image */}
                <div className="flex h-32 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 sm:h-36 sm:w-32">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={120}
                        height={150}
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Book Information */}
                <div className="min-w-0 flex-1">

                    {/* Title */}
                    <h2 className="font-serif text-lg font-bold text-gray-900 sm:text-xl">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                        By : {book.author}
                    </p>

                    {/* Tags + Year */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">

                        <span className="text-xs font-bold text-gray-800">
                            Tag
                        </span>

                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-medium text-green-600 sm:text-xs"
                            >
                                #{tag}
                            </span>
                        ))}

                        <span className="flex items-center gap-1 text-[10px] text-gray-500 sm:text-xs">
                            <FiCalendar size={13} />
                            Year of Publishing: {book.yearOfPublishing}
                        </span>

                    </div>

                    {/* Publisher + Pages */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-[10px] text-gray-500 sm:text-xs">

                        <span className="flex items-center gap-1">
                            <FiUser size={13} />
                            Publisher: {book.publisher}
                        </span>

                        <span className="flex items-center gap-1">
                            <FiFileText size={13} />
                            Page {book.totalPages}
                        </span>

                    </div>

                    {/* Divider */}
                    <div className="my-3 border-t border-gray-200" />

                    {/* Bottom Buttons */}
                    <div className="flex flex-wrap items-center gap-2">

                        {/* Category */}
                        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-medium text-blue-500 sm:text-xs">
                            Category: {book.category}
                        </span>

                        {/* Rating */}
                        <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-medium text-orange-500 sm:text-xs">
                            Rating: {book.rating}
                        </span>

                        {/* View Details */}
                        <Link
                            href={`/books/${book.bookId}`}
                            className="rounded-full bg-green-500 px-4 py-1.5 text-[10px] font-semibold text-white transition hover:bg-green-600 sm:text-xs"
                        >
                            View Details
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookListCard;