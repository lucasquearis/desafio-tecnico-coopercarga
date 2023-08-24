import "./style.css";
import jordanLogo from "@assets/jordan.svg";
import snkrLogo from "@assets/snkrs.svg";
import nikeLogo from "@assets/nikeLogo.svg";

export function Header() {
  return (
    <header id="site-header">
      <div id="brand">
        <div className="header-container">
          <div id="logos-container">
            <img src={jordanLogo} alt="jordan" />
            <img src={snkrLogo} alt="snkr" />
          </div>
          <div id="helpers">
            <p>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Ajuda
              </a>
            </p>
            <div className="vr" />
            <p>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Entrar
              </a>
            </p>
            <div className="vr" />
            <p>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Junte-se a nós
              </a>
            </p>
          </div>
        </div>
      </div>
      <div id="navbar">
        <div className="header-container">
          <img src={nikeLogo} />
          <nav id="nav">
            <ul>
              <li>
                <p className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Lançamentos
                </p>
              </li>
              <li>
                <p className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Masculino
                </p>
              </li>
              <li>
                <p className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Feminino
                </p>
              </li>
              <li>
                <p className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Infantil
                </p>
              </li>
              <li>
                <p className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Ofertas
                </p>
              </li>
              <li>
                <p className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  SNKRS
                </p>
              </li>
            </ul>
          </nav>
          <div id="input-container">
            <div className="input-group input-group-sm">
              <i className="bi bi-search input-group-text"></i>
              <input type="text" className="form-control" />
            </div>
            <i className="bi bi-heart"></i>
            <i className="bi bi-bag"></i>
          </div>
        </div>
      </div>
      <div id="brand">
        <div id="announcment">
          <div
            id="carousel-announcment"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div id="carousel-item-container">
                  <i className="bi bi-gift"></i>
                  <p>CARTÃO PRESENTE</p>
                  <p>para presentes de última hora.</p>
                  <a
                    href="#"
                    className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Saiba Mais.
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <div id="carousel-item-container">
                  <i className="bi bi-forward"></i>
                  <p>GUIA TÊNIS DE CORRIDA</p>
                  <p>Encontre o seu tênis ideal.</p>
                  <a
                    href="#"
                    className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Saiba Mais.
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-announcment"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel-announcment"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
