import React from 'react';

import { Spinner } from './Spinner';

export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    color: 'purple'
  },
};

const Template = (args) => <Spinner {...args} />;

export const Loading = Template.bind({});
Loading.args = {};


