import { DisplaySizeType, ProductType } from "@utils/types";
import "./style.css";
import { useEffect } from "react";

interface ICardItem {
  item: ProductType;
  displaySize: DisplaySizeType;
  selectedProduct: ProductType | undefined;
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<ProductType | undefined>
  >;
}

const brazilianCurrency = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function CardItem({
  item,
  displaySize,
  setSelectedProduct,
  selectedProduct,
}: ICardItem) {
  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");

    const handleModalHidden = () => {
      setSelectedProduct(undefined);
    };

    if (modalElement) {
      modalElement.addEventListener("hidden.bs.modal", handleModalHidden);

      return () => {
        modalElement.removeEventListener("hidden.bs.modal", handleModalHidden);
      };
    }
  }, [setSelectedProduct]);

  return (
    <>
      <div className={`card card-item ${displaySize} `}>
        <img src={item.image_url} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{brazilianCurrency.format(item.price)}</p>
          <button
            onClick={() => setSelectedProduct(item)}
            className="btn btn-secondary button-card"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Veja mais
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedProduct?.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <img
                  src={selectedProduct?.image_url}
                  className="card-img-top"
                  alt={selectedProduct?.name}
                />
              </div>
              <div id="product-infos">
                <p>
                  Tipo: <span>{selectedProduct?.type}</span>
                </p>
                <p>
                  Preço:{" "}
                  <span>
                    {brazilianCurrency.format(selectedProduct?.price || 0)}
                  </span>
                </p>
                <p>
                  Vendedor: <span>{selectedProduct?.seller}</span>
                </p>
                <p>
                  Detalhes: <span>{selectedProduct?.details}</span>
                </p>
                <p>
                  Categoria: <span>{selectedProduct?.sport}</span>
                </p>
                {selectedProduct?.available_sizes &&
                  selectedProduct?.available_sizes.length > 0 && (
                    <div>
                      Tamanhos disponíveis:{" "}
                      <div id="sizes-container">
                        {selectedProduct?.available_sizes.map((size) => (
                          <span key={size} className="badge bg-secondary">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
