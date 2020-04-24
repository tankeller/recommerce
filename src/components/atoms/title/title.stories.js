import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Title from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
  decorators: [withKnobs],
};

export const Default = () => (
  <Title>{text('Title Text', 'Herrenjacke aus Baumwolle grün')}</Title>
);

export const TruncatedTitle = () => (
  <Title truncateAfter="30">
    Herrenjacke aus Baumwolle mit Reißverschluss, Frühlingskollektion
  </Title>
);
