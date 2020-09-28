import React, { useState } from "react";
import ReactResizeDetector from "react-resize-detector";
import { useQuery } from "@apollo/client";
import { Address } from "@Store/address/types";
import ProductCard from "@Components/ProductCard";
import {
  Message,
  ProductListontainer,
  ProductCardContainer,
} from "./ListOfProducts.styled";
import { GET_PRODUCTS, GET_DISTRIBUTOR } from "@Services/graphql/queries";
import {
  ProductData,
  ProductVars,
  DistributorData,
  DistributorVars,
} from "@Services/graphql/types";

export interface ProductsByDistributorProps {
  distributorId: Number;
}

export interface Props {
  address: Address;
}

const ProductsByDistributor = (props: ProductsByDistributorProps) => {
  const [qtdToShow, setQtdToShow] = useState<number>(0);

  const { data, error, loading } = useQuery<ProductData, ProductVars>(
    GET_PRODUCTS,
    {
      variables: {
        id: props.distributorId.toString(),
        search: "",
        categoryId: null,
      },
    }
  );

  const onResize = (width: number) => {
    let qtdToShow = Math.floor(width / 250);
    if (qtdToShow == 0) qtdToShow = 1;

    setQtdToShow(qtdToShow);
  };

  return (
    <div>
      {error && (
        <Message>
          Putz, ocorreu um erro em nossos servidores e não foi possível
          pesquisar esse produto :(
        </Message>
      )}

      {loading && <Message>Carregando...</Message>}

      {!error &&
        !loading &&
        data.poc.products.length &&
        data.poc.products.length > 0 && (
          <ProductListontainer>
            {data.poc.products.map((product) => (
              <ProductCardContainer qtdToShow={qtdToShow}>
                <ProductCard product={product} />
              </ProductCardContainer>
            ))}
          </ProductListontainer>
        )}
      <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
    </div>
  );
};

const ListOfProducts = (props: Props) => {
  const { latitude, longitude } = props.address;
  const { data, error, loading } = useQuery<DistributorData, DistributorVars>(
    GET_DISTRIBUTOR,
    {
      variables: {
        now: "2020-09-04T13:46:26.035Z",
        lat: latitude,
        long: longitude,
        algorithm: "NEAREST",
      },
    }
  );

  if (!latitude || !longitude) {
    return (
      <Message>
        Informe um endereço na barra de pesquisa para buscarmos as bebidas
        disponíveis na região :)
      </Message>
    );
  }

  return (
    <>
      {error && (
        <Message>
          Putz, ocorreu um erro em nossos servidores e não foi possível
          pesquisar esse produto :(
        </Message>
      )}

      {loading && <Message>Carregando...</Message>}

      {!error && !loading && !data.pocSearch.length ? (
        <div>
          <Message>
            Putz, infelizmente não há distribuidores nessa região :(
          </Message>
          <Message>
            Mas não fique triste! Ficaremos felizes caso conheça e queira
            indicar algum comércio da sua região. Entre em contato e saiba mais!
            :D
          </Message>
        </div>
      ) : (
        <div />
      )}

      {!error &&
      !loading &&
      data.pocSearch.length &&
      data.pocSearch.length > 0 ? (
        <ProductsByDistributor distributorId={data.pocSearch[0].id} />
      ) : (
        <div />
      )}
    </>
  );
};

export default ListOfProducts;
