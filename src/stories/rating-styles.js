import styled from 'styled-components';

import { StarBorder, Star } from "@material-ui/icons";

export const StyledRatingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90px;
    padding: 1rem;
    background-color: ${props => props.inverse ? 'green' : 'transparent'};
`;

export const StarFilled = styled(Star)`
    ${props => props.inverse ?
        'color: #fff;' : 'color: #000;'
    };
`;

export const StarOutlined = styled(StarBorder)`
    color: #fff;
    ${props => props.inverse ?
        'color: #fff;' : 'color: #000;'
    };
`;

