import React from 'react';

import PriceLabel from './PriceLabel';

export default {
    component: PriceLabel,
    title: 'Atoms/PriceLabel'
}

let price = 15;

export const Default = () => <PriceLabel price={price} />

export const CrossedOut = () => <PriceLabel price={price} crossed={true} />

export const TrailingCurrency = () => <PriceLabel price={price} currencyPosition='trailing' />

export const LeadingCurrency = () => <PriceLabel price={price} currencyPosition='leading' />

export const DifferentCurrency = () => <PriceLabel price={price} currency='$' />