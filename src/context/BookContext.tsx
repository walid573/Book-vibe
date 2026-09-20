'use client'

import { IBook } from '@/types/bookType';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface BookContextType {
  readBooks: IBook[];
  wishlist: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedBooks = {
    readBooks,
    wishlist,
    setReadBooks,
    setWishlist,
  };

  return (
    <BookContext.Provider value={sharedBooks}>
      {children}
    </BookContext.Provider>
  );
};

export default BooksProvider;