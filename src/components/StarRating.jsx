import React, { useState } from 'react'

const StarRating = ({ totalStars }) => {

    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} 
                className={index < selectedStars ? "star selected" : "star"} onClick={() => handleStarClick(index)}>
                    &#9733;
                </span>
            ))}
            <p>{selectedStars} / {totalStars} Stars</p>
        </div>)
}

export default StarRating