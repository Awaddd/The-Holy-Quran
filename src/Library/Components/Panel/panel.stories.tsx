import React from 'react';
import { Story, Meta } from '@storybook/react';
import Panel, { PanelProps } from './Panel'

export default {
  title: 'Panel',
  component: Panel,
} as Meta;

const Template: Story<PanelProps> = (args) => {
  return (
    <Panel name="Al Furqan" description='The Criterion' />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
