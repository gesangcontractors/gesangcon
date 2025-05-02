import { Element } from "react-scroll";
import { useState } from "react";
import { galleryProducts } from "../constants/index.jsx";
// Data contoh produk gallery

const Gallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Mencegah scrolling di background
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Mengembalikan scrolling
  };

  return (
    <section>
      <Element
        name="gallery"
        className="relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="text-center mb-12">
            <div className="mb-6">
              <img
                src="/images/gesangcon.png"
                width={160}
                height={55}
                alt="xora"
                className="mx-auto"
              />
            </div>
            <h2 className="text-4xl font-bold mb-4">Gallery Kami</h2>
          </div>

          <div className="grid grid-cols-4 gap-1 max-lg:grid-cols-2 max-md:grid-cols-1">
            {galleryProducts.map((product) => (
              <div
                key={product.id}
                className="gallery-item relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(product)}
              >
                <div className="download_tech-link_last-before download_tech-link_last-after rounded-xl border-2 border-s5">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                      <div className="w-full p-4 bg-gradient-to-t from-black to-transparent">
                        <h3 className="text-white text-lg font-semibold">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="download_preview-before download_preview-after relative w-full max-w-4xl bg-s1 rounded-3xl border-2 border-s5 p-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-s3 text-white text-2xl z-10"
              >
                &times;
              </button>

              <div className="flex flex-col gap-6">
                <div className="">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold mb-4">
                    {selectedProduct.title}
                  </h3>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Review Customer
                    </h4>
                    <div className="flex items-center mb-2">
                      {/* 5 Bintang Review */}
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-yellow-400 fill-current mr-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm">(5.0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Element>
    </section>
  );
};

export default Gallery;
