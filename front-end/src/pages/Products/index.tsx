import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@utils/constants";
import "./style.css";
import { CardItem } from "@components/Cards";
import {
  DisplaySizeType,
  ProductType,
  SelectedFilterType,
  SortProductsType,
  FilterType,
} from "@utils/types";
import Filter from "@components/Filter";

export function ProductsPage() {
  const [isFetching, setIsFetching] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);
  const [displaySize, setDisplaySize] = useState<DisplaySizeType>("base");
  const [showFilter, setShowFilter] = useState(false);
  const [sortOptions, setSortOptions] = useState<SortProductsType>("name");
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterType>({});
  const [selectedProduct, setSelectedProduct] = useState<ProductType>();
  const [failFetchMessage, setFailFetchMessage] = useState("");

  const handleChangeSizeCards = (size: DisplaySizeType) => setDisplaySize(size);

  const handleShowFilter = () => setShowFilter((prevState) => !prevState);

  const handleSortFilter = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const value = target.value as SortProductsType;
    setSortOptions(value);
  };

  useEffect(() => {
    const filterProducts = () => {
      const sortedProducts = [...products].sort((a, b) => {
        if (sortOptions === "name") return a.name.localeCompare(b.name);
        if (sortOptions === "lowestPrice") return a.price - b.price;
        if (sortOptions === "highestPrice") return b.price - a.price;
        return 0;
      });

      const filterSortedProducts = sortedProducts.filter((product) => {
        const keySelectedFilter = Object.keys(selectedFilter)[0];

        if (!keySelectedFilter) {
          return true;
        }
        const valueSelectedFilter =
          selectedFilter[keySelectedFilter as FilterType];

        if (keySelectedFilter === "seller") {
          return product.seller === valueSelectedFilter;
        }

        if (keySelectedFilter === "size") {
          return product.available_sizes.includes(
            valueSelectedFilter as string
          );
        }

        if (keySelectedFilter === "category") {
          return product.sport === valueSelectedFilter;
        }
      });
      return setFilteredProducts(filterSortedProducts);
    };
    filterProducts();
  }, [sortOptions, products, selectedFilter]);

  useEffect(() => {
    const requestProducts = async () => {
      try {
        setIsFetching(true);
        const response = await axios.get(`${API_URL}products`);
        console.log(response);
        if (response.status === 200 && response.data.data.length > 0) {
          setProducts(response.data.data);
        } else {
          setFailFetchMessage("Parece que não temos mais produtos a venda! :(");
        }
      } catch (error) {
        setFailFetchMessage(
          "Falha ao carregar produtos, tente novamente em instantes..."
        );
      } finally {
        setIsFetching(false);
      }
    };
    requestProducts();
  }, []);

  return (
    <div id="products-container">
      <div id="header-products">
        <div id="counter-products">
          <p>Produtos e coleções exclusivas ({products.length})</p>
        </div>
        <div id="filter-options">
          <div id="display-size">
            <button
              name="xl"
              onClick={() => handleChangeSizeCards("xl")}
              className={`btn btn-${
                displaySize === "xl" ? "secondary" : "light"
              } btn-sm`}
            >
              <i className="bi bi-app"></i>
              <i className="bi bi-app"></i>
            </button>
            <button
              name="base"
              onClick={() => handleChangeSizeCards("base")}
              className={`btn btn-${
                displaySize === "base" ? "secondary" : "light"
              } btn-sm`}
            >
              <i className="bi bi-app"></i>
              <i className="bi bi-app"></i>
              <i className="bi bi-app"></i>
            </button>
            <button
              name="small"
              onClick={() => handleChangeSizeCards("small")}
              className={`btn btn-${
                displaySize === "small" ? "secondary" : "light"
              } btn-sm`}
            >
              <i className="bi bi-app"></i>
              <i className="bi bi-app"></i>
              <i className="bi bi-app"></i>
              <i className="bi bi-app"></i>
            </button>
          </div>
          <div id="toggle-filter">
            <button
              onClick={handleShowFilter}
              className={`btn btn-${showFilter ? "secondary" : "light"}`}
            >
              Filtros
              <i className="bi bi-funnel"></i>
            </button>
          </div>
          <div id="sort-filter">
            <select
              value={sortOptions}
              className="form-select"
              onChange={handleSortFilter}
            >
              <option value="lowestPrice">Menor preço</option>
              <option value="highestPrice">Maior preço</option>
              <option value="name">Nome</option>
            </select>
          </div>
        </div>
      </div>
      <div id="products-items-container">
        {isFetching ? (
          <div id="loading-container">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : failFetchMessage ? (
          <div>{failFetchMessage}</div>
        ) : (
          <>
            {showFilter && (
              <div id="filters-container" className="card">
                <Filter
                  products={filteredProducts}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={setSelectedFilter}
                />
              </div>
            )}
            <div id="cards-display">
              {filteredProducts?.length > 0 &&
                filteredProducts.map((item) => {
                  return (
                    <React.Fragment key={item.name}>
                      <CardItem
                        setSelectedProduct={setSelectedProduct}
                        selectedProduct={selectedProduct}
                        item={item}
                        displaySize={displaySize}
                      />
                    </React.Fragment>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
