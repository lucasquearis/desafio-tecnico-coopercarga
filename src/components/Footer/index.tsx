export function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div id="footer-limiter">
        <section className="d-flex justify-content-center p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Entre em contato atraves de nossas redes:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="bi bi-gem me-3"></i>Company name
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, dignissimos quis consectetur voluptatem dicta
                  soluta ad quibusdam veritatis esse animi libero incidunt omnis
                  expedita molestias laboriosam reiciendis nisi enim aliquam.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="bi bi-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="bi bi-phone me-3"></i> + 01 234 567 88
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://www.lucasquearis.com.br/"
          >
            Lucas A. Santos
          </a>
        </div>
      </div>
    </footer>
  );
}
