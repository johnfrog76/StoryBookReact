import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerWrapper, StyledCircularProgress } from './spinner-styles';


export const Spinner = ({ color = null }) => (
    <SpinnerWrapper>
        <StyledCircularProgress changeColor={color} />
    </SpinnerWrapper>
);

Spinner.propTypes = {
    /**
     * is override color of the spinner.
     */
    color: PropTypes.string,
};

Spinner.defaultProps = {};
