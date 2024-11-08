import React from 'react';
import bannerImage from '../../assets/Book-Vibe-Banner.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-[554px] mb-24 rounded-3xl mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImage} className="" />
          <div>
            <h1 className="text-4xl font-bold w-2/3">
              Books to freshen up your bookshelf
            </h1>
            <Link to={"/listedBooks"}>
              <button className="btn btn-primary mt-8">View The List</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;