import React from 'react';

const BooksCard = ({ book }) => {
    const { title, price, author, image_url, details } = book;
    console.log(book)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Author: {author.name}</p>
                {/* <p>{details}.slice(1,100)</p> */}
                <p>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;