import { getQueriesForElement } from '@testing-library/react';
import React from 'react';

import { UserAvatar } from './UserAvatar';

export default {
  title: 'Example/UserAvatar',
  component: UserAvatar,
  argTypes: {
    name: 'User'
  },
};

const Template = (args) => <UserAvatar {...args} />;

export const User = Template.bind({});
User.args = {
  name: 'User'
};
