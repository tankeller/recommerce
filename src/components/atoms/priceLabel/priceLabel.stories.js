import React from 'react';

import PriceLabel from './PriceLabel';

export default {
    component: PriceLabel,
    title: 'PriceLabel'
}

export const Default = () => <PriceLabel/>

let price = 15;
export const TrailingCurrency = () => <PriceLabel price={price} currencyPosition='trailing' />

export const LeadingCurrency = () => <PriceLabel price={price} currencyPosition='leading' />

export const DifferentCurrency = () => <PriceLabel price={price} currency='$' />