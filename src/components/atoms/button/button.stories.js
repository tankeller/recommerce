import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
    component: Button,
    title: 'Atoms/Button'
}

export const Default = () => <Button onClick={action('onClick')}>Button Text</Button>;

export const DefaultSmall = () => <Button size="small" onClick={action('onClick')}>Button Text</Button>;

export const DefaultMedium = () => <Button size="medium" onClick={action('onClick')}>Button Text</Button>;

export const DefaultLarge = () => <Button size="large" onClick={action('onClick')}>Button Text</Button>;

export const Disabled = () =>
 (<Button 
    onClick={action('onClick')}
    disabled='true'>
        Disabled Button
 </Button>)
