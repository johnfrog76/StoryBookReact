import React from 'react';

import { RecipeRating } from './Rating';

export default {
  title: 'Example/Rating',
  component: RecipeRating,
  argTypes: {
    rating: 0,
    inverse: false
  },
};

const Template = (args) => <RecipeRating {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true
};
