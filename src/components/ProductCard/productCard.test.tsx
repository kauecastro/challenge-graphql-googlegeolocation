import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import theme from "../../common/theme";
import { Product } from "../../services/graphql/types";
import ProductCard from './index';

const product: Product = {
  id: 1,
  title: 'Corona Extra 355ml - Pack com 6 unidades',
  images: [{url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008948_c04c82d7-6c1d-4f59-9e12-a33b5fecee47.jpg'}],
  productVariants: [
    {
      price: 10.20
    }
  ]
}

const indisponibleProduct: Product = {
  id: 1,
  title: 'Corona Extra 355ml - Pack com 6 unidades',
  images: [{url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008948_c04c82d7-6c1d-4f59-9e12-a33b5fecee47.jpg'}],
  productVariants: [
    {
      price: 0
    }
  ]
}

describe('[Component] - ProductCard', () => {
  it('Should render Product Card with props', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ProductCard product={product} />
      </ThemeProvider>
    );

    expect(container.querySelector('img')).toHaveAttribute("src", product.images[0].url)
    expect(container.querySelector('.productCard__card-title').textContent).toEqual(product.title)
    expect(container.querySelector('.productCard__card-price').textContent).toEqual("R$ 10,20")
  })

  it('Should render an indisponible peoduct for products without prices', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ProductCard product={indisponibleProduct} />
      </ThemeProvider>
    );

    expect(container.querySelector('.productCard__card-price').textContent).toEqual("Indisponível")
  })
});
