import React from 'react';
import ActionButton from './ActionButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component: ActionButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = args => (
    <ActionButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    backgroundColor: '#000',
    color: '#fff',
    label: 'Button',
    size: 'md',
    float: false,
    onClick: action('clicked'),
};
