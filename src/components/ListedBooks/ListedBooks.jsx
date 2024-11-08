import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';
import { Helmet } from 'react-helmet-async';

const ListedBooks = () => {
    const allBooks = useLoaderData();

    const [readList, setReadList] = useState([]);

    const [sort, setSort] = useState("");

    useEffect(() => {
        const storedReadList = getStoredReadList();

        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
        
    }, []);

    const handleSort = sortType => {
        setSort(sortType);

        if (sortType === "Rating") {
            const sortedReadList = [...readList].sort(
              (a, b) => a.rating - b.rating
            );
            setReadList(sortedReadList);
        };
    };

    return (
      <div>
        <Helmet>
          <title>Listed Books | Book Vibe</title>
        </Helmet>

        <h3 className="text-4xl my-6 text-center">Listed Books</h3>

        <div className="dropdown mb-8">
          <div tabIndex={0} role="button" className="btn m-1">
            {sort ? `Sort by: ${sort}` : "Sort by"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("Number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSort("Publish Year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-12">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ListedBooks;