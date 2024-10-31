import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, tags, category, rating, publisher, bookName, author, review, totalPages, yearOfPublishing } = book;

    return (
      <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="p-20 bg-gray-100 rounded-2xl">
          <img className="w-[425px] h-[564px]" src={image} alt={bookName} />
        </div>
        <div className="">
          <h2 className="text-4xl font-bold">{bookName}</h2>
          <p className="text-lg font-semibold text-gray-500 mt-4 border-b-2 pb-4">
            By: {author}
          </p>
          <p className="text-lg font-semibold text-gray-500 mt-4 border-b-2 pb-4">
            {category}
          </p>
          <p className="text-base font-semibold text-gray-500 mt-4">
            <span className="font-bold text-black">Review:</span> {review}
          </p>
          <div className="flex items-center gap-2 mt-6 border-b-2 pb-4">
            <p className="text-xl font-bold">Tags:</p>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="border-none px-4 py-2 rounded-full bg-green-100 text-green-500 font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-b-2 pb-4">
            <div className="flex items-center gap-2">
              <p className="text-base text-gray-500 font-medium">
                Number of Pages:
              </p>
              <span className="text-black font-semibold">{totalPages}</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base text-gray-500 font-medium">Publisher:</p>
              <span className="text-black font-semibold">{publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base text-gray-500 font-medium">
                Year of Publishing:
              </p>
              <span className="text-black font-semibold">
                {yearOfPublishing}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base text-gray-500 font-medium">Rating:</p>
              <span className="text-black font-semibold">{rating}</span>
            </div>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <button className='border-2 border-gray-300 py-4 px-7 text-black text-lg font-bold rounded-lg hover:bg-cyan-500'>Read</button>
            <button className='border-none py-4 px-7 text-white text-lg font-bold rounded-lg bg-cyan-500 hover:text-black hover:bg-cyan-600'>Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;