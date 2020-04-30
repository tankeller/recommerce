import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Atoms/Icon',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'SVG FontAwesome library (free icons)',
  },
};

export const Default = () => <Icon name={text('iconName', 'shopping-cart')} />;

export const iconOptionSpin = () => (
  /**
   * <Icon name="circle-notch" option="spin" />
   * <Icon name="circle-notch" option={["inverse", "spin"]} />
   */
  <Icon name={text('iconNameLoader', 'circle-notch')} option="spin" />
);

export const iconAttributeSize = () => (
  /**
   * <Icon name="circle-notch" size="xs" />
   * <Icon name="circle-notch" size="lg" />
   * <Icon name="circle-notch" size="6x" />
   */
  <Icon name={text('iconNameLoader', 'circle-notch')} option="spin" size="6x" />
);

export const iconAttributeColor = () => (
  /**
   * <Icon name="shopping-cart" color="lightblue" />
   * <Icon name="shopping-cart" color="#FE6B8B" />
   */
  <Icon name={text('iconName', 'shopping-cart')} color="#FE6B8B" />
);

export const iconAttributePull = () => (
  /**
   * <Icon name="shopping-cart" pull="left" />
   * <Icon name="shopping-cart" pull="right" />
   */
  <Icon name={text('iconName', 'shopping-cart')} pull="right" />
);
