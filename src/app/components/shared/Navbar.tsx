
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'All Books', path: '/books' },
        { name: 'Listed Books', path: '/listed-books' },
        { name: 'Read Books', path: '/read-books' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
                    >
                        Book<span className="text-emerald-500">Vibe</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-2 rounded-2xl bg-slate-50 p-1.5 shadow-sm lg:flex">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                        isActive
                                            ? 'bg-white text-emerald-600 shadow-sm'
                                            : 'text-slate-600 hover:bg-white hover:text-emerald-600'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden items-center gap-3 sm:flex">
                        <button className="rounded-xl border border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-50">
                            Sign In
                        </button>

                        <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-xl">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-xl text-slate-700 hover:bg-slate-200"
                        >
                            ☰
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl"
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;

                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`rounded-xl py-3 font-medium ${
                                                isActive
                                                    ? 'bg-emerald-50 text-emerald-600'
                                                    : 'text-slate-600'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}

                            <div className="my-2 border-t border-slate-100" />

                            <li>
                                <button className="text-emerald-600">
                                    Sign In
                                </button>
                            </li>

                            <li>
                                <button className="rounded-xl bg-emerald-500 text-white hover:bg-emerald-600">
                                    Sign Up
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

