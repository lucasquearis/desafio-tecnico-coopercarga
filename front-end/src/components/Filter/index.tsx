import { ProductType, SelectedFilterType, FilterType } from "@utils/types";
import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { LIBRARY_FILTER } from "@utils/constants";

interface IFilterProps {
  products: ProductType[];
  selectedFilter: SelectedFilterType;
  setSelectedFilter: React.Dispatch<React.SetStateAction<SelectedFilterType>>;
}

export default function Filter({
  products,
  selectedFilter,
  setSelectedFilter,
}: IFilterProps) {
  const [sellers, setSellers] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const prepareFilters = useCallback(() => {
    let uniqueSellers: string[] = [];
    let uniqueSizes: string[] = [];
    let uniqueCategories: string[] = [];

    products.forEach((product) => {
      uniqueSellers.push(product.seller);
      product.available_sizes.forEach((size) => {
        uniqueSizes.push(size);
      });
      uniqueCategories.push(product.sport);
    });

    uniqueSellers = [...new Set(uniqueSellers)];
    uniqueSizes = [...new Set(uniqueSizes)];
    uniqueCategories = [...new Set(uniqueCategories)];

    setSellers(uniqueSellers);
    setSizes(uniqueSizes);
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    prepareFilters();
  }, [prepareFilters]);

  return Object.keys(selectedFilter).length > 0 ? (
    <div id="filter-applied-container">
      <div id="sticky-container">
        <div id="flex-properties">
          <p>Filtro aplicado:</p>
          <p>{LIBRARY_FILTER[Object.keys(selectedFilter)[0] as FilterType]}</p>
          <p className="badge bg-secondary" id="applied-filter">
            {selectedFilter[Object.keys(selectedFilter)[0] as FilterType]}
          </p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => setSelectedFilter({})}
          >
            Remover filtro
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div id="filter-applied-container">
      <div id="sticky-container">
        <p>Vendedor: </p>
        <div className="filter-category-container">
          {sellers.map((seller) => (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              key={seller}
              onClick={() =>
                setSelectedFilter({
                  seller,
                })
              }
            >
              {seller}
            </button>
          ))}
        </div>
        <hr></hr>
        <p>Tamanhos:</p>
        <div className="filter-category-container">
          {sizes.map((size) => (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              key={size}
              onClick={() =>
                setSelectedFilter({
                  size,
                })
              }
            >
              {size}
            </button>
          ))}
        </div>
        <hr></hr>
        <p>Categoria:</p>
        <div className="filter-category-container">
          {categories.map((category) => (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              key={category}
              onClick={() =>
                setSelectedFilter({
                  category,
                })
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
