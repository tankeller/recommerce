import { addDecorator } from '@storybook/react';
import themeDecorator from './decorators/themeDecorator';
import './styles.css';

addDecorator(themeDecorator);
