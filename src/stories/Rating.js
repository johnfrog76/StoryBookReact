import React from "react";
import PropTypes from 'prop-types';

import { StyledRatingContainer, StarFilled, StarOutlined } from './rating-styles';

export const RecipeRating = ({ rating = 0, inverse = false }) => {
    let stars = [true, true, true, true];

    return (
        <StyledRatingContainer inverse={inverse} title={`rated ${rating} stars`}>
            {stars.map((item, idx) => idx < rating ?
                (<StarFilled inverse={inverse} key={idx} />)
                :
                (<StarOutlined inverse={inverse} key={idx} />)
            )}
        </StyledRatingContainer>
    );
}

RecipeRating.propTypes = {
    /**
     * is the rating to display as number of stars 0 - 4.
     */
    rating: PropTypes.number,
    /**
     * is inverted color to display over different backgrounds.
     */
    inverse: PropTypes.bool,
};

RecipeRating.defaultProps = {};
