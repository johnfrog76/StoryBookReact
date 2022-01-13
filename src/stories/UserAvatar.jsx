import React from 'react';
import PropTypes from 'prop-types';

import { StyledAvatar } from './user-avatar.styles';

export const UserAvatar = ({ name, color=undefined }) => (
    <StyledAvatar color={color}>{name.slice(0, 1)}</StyledAvatar>
);

UserAvatar.propTypes = {
    /**
     * required name of user
     */
    name: PropTypes.string.isRequired,
     /**
     * background color of the avatar
     */
    color: PropTypes.string,
  };
  
  UserAvatar.defaultProps = {
    name: 'User',
    color: null
  };