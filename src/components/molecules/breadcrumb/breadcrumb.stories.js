import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../../assets/theme';

import Breadcrumb from './Breadcrumb';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  decorators: [withKnobs],
};

const category = {
  id: 78,
  picture: 'https://www.fillmurray.com/640/360',
  name: 'Nostrud proident',
  seotext:
    'Ex consequat non ea culpa enim. Mollit est et commodo voluptate veniam cupidatat aute elit mollit magna do. Proident sunt nostrud cillum ipsum tempor labore do enim. Consectetur sunt excepteur eu aliqua velit sit et fugiat Lorem pariatur nostrud. Aute cupidatat sit officia laboris laborum nisi.\r\nDolor sint incididunt irure nisi sit Lorem eu consectetur nostrud irure cillum. Commodo laboris exercitation consectetur adipisicing dolor velit veniam. Lorem amet voluptate dolore enim nisi aliquip.\r\nProident eu pariatur ea aliquip Lorem commodo in est. Duis non commodo aliqua dolore irure tempor in esse incididunt. Pariatur cillum irure dolor exercitation sit culpa. Mollit est velit voluptate est aliquip. Commodo aute mollit tempor labore enim eiusmod excepteur ea eiusmod.\r\nDolor id consectetur magna duis eu sint cillum irure. Pariatur anim et ipsum nulla exercitation non nisi exercitation exercitation. Culpa sunt ut nisi enim deserunt aliqua. Magna aute qui id fugiat ad. Labore ex enim sit eiusmod aliqua in aliqua labore nostrud occaecat sint fugiat. Magna nisi exercitation proident culpa ea enim ad esse eiusmod non.\r\nReprehenderit velit adipisicing officia fugiat fugiat non minim ullamco quis. Nisi in labore consequat aliqua incididunt in sit ex sunt. Commodo cillum cillum eiusmod pariatur commodo cupidatat et sunt. Eiusmod exercitation fugiat sunt id esse. Quis do do quis ad deserunt laborum Lorem pariatur. Nostrud dolor in ut sit Lorem laborum laboris fugiat sint occaecat.\r\n',
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb category={category} />
  </ThemeProvider>
);
