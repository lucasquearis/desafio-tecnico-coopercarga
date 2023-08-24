import { DisplaySizeType, ProductType } from "@utils/types";
import "./style.css";

interface ICardItem {
  item: ProductType;
  displaySize: DisplaySizeType;
}

const brazilianCurrency = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function CardItem({ item, displaySize }: ICardItem) {
  return (
    <div className={`card card-item ${displaySize} `}>
      <img src={item.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{brazilianCurrency.format(item.price)}</p>
        <a href="#" className="btn btn-secondary">
          Veja mais
        </a>
      </div>
    </div>
  );
}
