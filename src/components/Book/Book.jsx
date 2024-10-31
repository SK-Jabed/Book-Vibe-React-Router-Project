import React from 'react';

const Book = ({ book }) => {
    const { bookName, author, image, rating, category, publisher } = book;

    return (
      <div>
        <div className="card shadow-lg p-6">
          <figure className='bg-gray-200 py-8 rounded-2xl'>
            <img className='h-[166px]' src={image} alt={bookName} />
          </figure>
          <div className="mt-8">
            <div>
                {
                    
                }
                <span className='border-none px-4 py-2 rounded-full bg-green-100 text-green-500 font-semibold'>{publisher}</span>
            </div>
            <div className='border-b-2 border-dashed mt-6 pb-3'>
            <h2 className="text-xl font-semibold">{bookName}</h2>
            <p className='mt-3 text-base font-semibold text-gray-500'>By: {author}</p>           
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className=' text-base font-semibold text-gray-500'>{category}</p>
              <p className=' text-base font-semibold text-gray-500'>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Book;