/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@utils/constants";
import "./style.css";
import { CardItem } from "@components/Cards";
import {
  DisplaySizeType,
  ProductType,
  SelectedFilterType,
  SortProductsType,
} from "@utils/types";
import Filter from "@components/Filter";

export function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);
  const [displaySize, setDisplaySize] = useState<DisplaySizeType>("base");
  const [showFilter, setShowFilter] = useState(false);
  const [sortOptions, setSortOptions] = useState<SortProductsType>("name");
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterType>({});

  useEffect(() => {
    const requestProducts = async () => {
      const response = await axios.get(`${API_URL}products`);
      if (response.status === 200 && response.data) {
        setProducts(response.data);
      }
    };
    requestProducts();
  }, []);

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
      return setFilteredProducts(sortedProducts);
    };
    filterProducts();
  }, [sortOptions, products]);

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
                <div key={item.name}>
                  <CardItem item={item} displaySize={displaySize} />
                </div>
              );
            })}
        </div>
      </div>
      <div id="pagination-site">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
