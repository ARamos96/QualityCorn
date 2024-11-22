import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./ProcesadoData";

export default function CustomCarousel() {
  const [products, setProducts] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="carousel-card border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        {product.id !== 3 ? (
          <div>
            <h3 className="mb-1">{product.name}</h3>
          </div>
        ) : (
          <div>
            <h3 className="mb-1">{product.name}</h3>
            <p className="mt-0 mb-3">- Criba</p>
            <p className="mt-0 mb-3">- Despedregadora</p>
            <p className="mt-0 mb-3">- Densimétrica</p>
            <p className="mt-0 mb-3">- Colorimétrica</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={isHovering ? 0 : 3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
