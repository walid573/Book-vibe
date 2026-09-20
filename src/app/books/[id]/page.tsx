
import ReadButton from '@/app/components/shared/bookDetials/ReadButton';
import WishlistButton from '@/app/components/shared/bookDetials/WishlistButton';
import { IBook } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface bookdetailsType {
    params: Promise<{
        id: string;
    }>;
}


const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

    if (!res.ok) {
        throw new Error('Failed to fetch books');
    }

    return res.json();
};

const BookDetailsPage = async ({ params }: bookdetailsType) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id)
    );

    // If book doesn't exist
    if (!book) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-4xl font-bold text-slate-900">
                    Book Not Found 📚
                </h2>

                <p className="mt-3 text-slate-500">
                    Sorry, we couldnot find the book your are looking for.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
                >
                    ← Back to Books
                </Link>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-10">

            {/* Back Button */}
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-500 transition hover:text-emerald-600"
            >
                ← Back to Books
            </Link>

            {/* Main Card */}
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">

                <div className="grid lg:grid-cols-2">

                    {/* Book Image */}
                    <div className="flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-lime-50 p-8 sm:p-12 lg:p-16">

                        <div className="relative h-105 w-70 overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:scale-105">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                    </div>

                    {/* Book Details */}
                    <div className="p-6 sm:p-10 lg:p-14">

                        {/* Category */}
                        <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                            {book.category}
                        </span>

                        {/* Title */}
                        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="mt-3 text-lg text-slate-500">
                            By{' '}
                            <span className="font-bold text-slate-800">
                                {book.author}
                            </span>
                        </p>

                        {/* Rating */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">

                            <div className="rounded-xl bg-amber-50 px-4 py-2">
                                <span className="font-bold text-amber-500">
                                    ⭐ {book.rating}
                                </span>
                            </div>

                            <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                                📖 {book.totalPages} Pages
                            </div>

                            <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                                📅 {book.yearOfPublishing}
                            </div>

                        </div>

                        {/* Review */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-slate-900">
                                About This Book
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                {book.review}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-7">
                            <h3 className="mb-3 font-bold text-slate-900">
                                Tags
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {book.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <ReadButton book={book}></ReadButton>

                            <WishlistButton book={book}></WishlistButton>
                        </div>

                    </div>
                </div>

                {/* Additional Information */}
                <div className="border-t border-slate-100 p-6 sm:p-10 lg:p-14">

                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                        Book Information
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-400">
                                Publisher
                            </p>
                            <p className="mt-2 font-bold text-slate-800">
                                {book.publisher}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-400">
                                Published
                            </p>
                            <p className="mt-2 font-bold text-slate-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-400">
                                Total Pages
                            </p>
                            <p className="mt-2 font-bold text-slate-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-5">
                            <p className="text-sm text-slate-400">
                                Category
                            </p>
                            <p className="mt-2 font-bold text-slate-800">
                                {book.category}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
};

export default BookDetailsPage;

