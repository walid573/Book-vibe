import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/book.png';
const Banner = () => {
    return (
        <section className="container mx-auto mt-8 px-4">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-50 via-white to-lime-50 px-6 py-12 shadow-sm sm:px-10 lg:px-16 lg:py-16">

                {/* Decorative circles */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-2xl" />
                <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-lime-200/30 blur-3xl" />

                <div className="relative flex flex-col items-center justify-between gap-10 md:flex-row">

                    {/* Content */}
                    <div className="max-w-xl text-center md:text-left">
                        <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                            📚 Discover your next read
                        </span>

                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Books to{' '}
                            <span className="text-emerald-600">
                                freshen up
                            </span>{' '}
                            your bookshelf
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                            Explore amazing books, discover new stories, and
                            find your next favorite read.
                        </p>

                        <button className="mt-8 rounded-xl bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-xl">
                            View The List
                            <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Image */}
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 rounded-full bg-emerald-200/40 blur-3xl" />

                        <Image
                            src={BannerImg}
                            alt="Books"
                            priority
                            className="relative w-56 drop-shadow-2xl transition-transform duration-500 hover:scale-105 sm:w-64 lg:w-80"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;

