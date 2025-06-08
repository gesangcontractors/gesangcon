import { Element } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import CountUp from "react-countup";

// Interior product data
const jabodetabekPricing = [
  {
    id: "product-1",
    title: "Meja Direksi",
    logo: "/images/direksi1.png",
    caption: "Meja Direksi",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/direksi/1.jpeg",
      "/images/direksi/2.png",
      "/images/direksi/3.jpeg",
      "/images/direksi/4.jpeg",
      "/images/direksi/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Dimensi Meja silahkan check di varian atau deskripsi Marketplace",
      "Ukuran Custom Chat Kami Terlebih Dahulu",
    ],
    orderLinks: {
      tokopedia: "https://tokopedia.com/store/jabodetabek/meja-direksi",
      shopee: "https://shopee.com/store/jabodetabek/meja-direksi",
      tiktokShop: "https://tiktokshop.com/store/jabodetabek/meja-direksi",
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Meja%20Direksi%20untuk%20wilayah%20JABODETABEK",
    },
  },
  {
    id: "product-2",
    title: "Meja Meeting",
    logo: "/images/plan-logo2.png",
    caption: "Meja Meeting",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/meeting/1.jpeg",
      "/images/meeting/2.jpeg",
      "/images/meeting/3.jpeg",
      "/images/meeting/4.jpeg",
      "/images/meeting/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Dimensi Meja silahkan check di varian atau deskripsi Marketplace",
      "Ukuran Custom Chat Kami Terlebih Dahulu",
    ],
    orderLinks: {
      tokopedia: "https://tokopedia.com/store/jabodetabek/meja-meeting",
      shopee: "https://shopee.com/store/jabodetabek/meja-meeting",
      tiktokShop: "https://tiktokshop.com/store/jabodetabek/meja-meeting",
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Meja%20Meeting%20untuk%20wilayah%20JABODETABEK",
    },
  },
  {
    id: "product-3",
    title: "Meja Receptionist",
    logo: "/images/plan-logo3.png",
    caption: "Meja Receptionist",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/resepsionis/1.jpeg",
      "/images/resepsionis/2.jpeg",
      "/images/resepsionis/3.jpeg",
      "/images/resepsionis/4.jpeg",
      "/images/resepsionis/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Dimensi Meja silahkan check di varian atau deskripsi Marketplace",
      "Ukuran Custom Chat Kami Terlebih Dahulu",
    ],
    orderLinks: {
      tokopedia: "https://tokopedia.com/store/jabodetabek/meja-resepsionis",
      shopee: "https://shopee.com/store/jabodetabek/meja-resepsionis",
      tiktokShop: "https://tiktokshop.com/store/jabodetabek/meja-resepsionis",
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Meja%20Resepsionis%20untuk%20wilayah%20JABODETABEK",
    },
  },
  {
    id: "product-4",
    title: "Ruang Kantor",
    logo: "/images/plan-logo4.png",
    caption: "Ruang Kantor",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/kantor/1.jpeg",
      "/images/kantor/2.jpeg",
      "/images/kantor/3.jpeg",
      "/images/kantor/4.jpeg",
      "/images/kantor/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Untuk Survei Silahkan Chat Kami",
      "Termasuk konsultasi desain",
    ],
    orderLinks: {
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Ruang%20Kantor%20Modern%20untuk%20wilayah%20JABODETABEK",
    },
  },
];

// Luar JABODETABEK pricing - excluding Ruang Kantor product
const luarJabodetabekPricing = [
  {
    id: "product-1",
    title: "Meja Direksi",
    logo: "/images/direksi1.png",
    caption: "Meja Direksi",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/direksi/1.jpeg",
      "/images/direksi/2.png",
      "/images/direksi/3.jpeg",
      "/images/direksi/4.jpeg",
      "/images/direksi/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Dimensi Meja silahkan check di varian atau deskripsi Marketplace",
      "Ukuran Custom Chat Kami Terlebih Dahulu",
    ],
    orderLinks: {
      tokopedia: "https://tokopedia.com/store/luar-jabodetabek/meja-direksi",
      shopee: "https://shopee.com/store/luar-jabodetabek/meja-direksi",
      tiktokShop: "https://tiktokshop.com/store/luar-jabodetabek/meja-direksi",
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Meja%20Direksi%20untuk%20wilayah%20luar%20JABODETABEK",
    },
  },
  {
    id: "product-2",
    title: "Meja Meeting",
    logo: "/images/plan-logo2.png",
    caption: "Meja Meeting",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/meeting/1.jpeg",
      "/images/meeting/2.jpeg",
      "/images/meeting/3.jpeg",
      "/images/meeting/4.jpeg",
      "/images/meeting/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Dimensi Meja silahkan check di varian atau deskripsi Marketplace",
      "Ukuran Custom Chat Kami Terlebih Dahulu",
    ],
    orderLinks: {
      tokopedia: "https://tokopedia.com/store/luar-jabodetabek/meja-meeting",
      shopee: "https://shopee.com/store/luar-jabodetabek/meja-meeting",
      tiktokShop: "https://tiktokshop.com/store/luar-jabodetabek/meja-meeting",
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Meja%20Meeting%20untuk%20wilayah%20luar%20JABODETABEK",
    },
  },
  {
    id: "product-3",
    title: "Meja Receptionist",
    logo: "/images/plan-logo3.png",
    caption: "Meja Receptionist",
    icon: "/images/icon-arrow.svg",
    images: [
      "/images/resepsionis/1.jpeg",
      "/images/resepsionis/2.jpeg",
      "/images/resepsionis/3.jpeg",
      "/images/resepsionis/4.jpeg",
      "/images/resepsionis/5.jpeg",
    ],
    specs: [
      "Material Multi + Bb",
      "Finishing HPL TACO",
      "Dimensi Meja silahkan check di varian atau deskripsi Marketplace",
      "Ukuran Custom Chat Kami Terlebih Dahulu",
    ],
    orderLinks: {
      tokopedia:
        "https://tokopedia.com/store/luar-jabodetabek/meja-resepsionis",
      shopee: "https://shopee.com/store/luar-jabodetabek/meja-resepsionis",
      tiktokShop:
        "https://tiktokshop.com/store/luar-jabodetabek/meja-resepsionis",
      whatsapp:
        "https://wa.me/6287889522464?text=Saya%20tertarik%20dengan%20Meja%20Resepsionis%20untuk%20wilayah%20luar%20JABODETABEK",
    },
  },
];

const Pricing = () => {
  const [isJabodetabek, setIsJabodetabek] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [products, setProducts] = useState(jabodetabekPricing);

  // Update products when location changes
  useEffect(() => {
    setProducts(isJabodetabek ? jabodetabekPricing : luarJabodetabekPricing);

    // Reset image indices when products change
    const initialIndices = {};
    const currentProducts = isJabodetabek
      ? jabodetabekPricing
      : luarJabodetabekPricing;
    currentProducts.forEach((product) => {
      initialIndices[product.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, [isJabodetabek]);

  // Initialize current image index for each product
  useEffect(() => {
    const initialIndices = {};
    products.forEach((product) => {
      initialIndices[product.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  const handleNextImage = (productId) => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[productId] || 0;
      const product = products.find((p) => p.id === productId);
      const nextIndex = (currentIndex + 1) % product.images.length;
      return { ...prev, [productId]: nextIndex };
    });
  };

  const handlePrevImage = (productId) => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[productId] || 0;
      const product = products.find((p) => p.id === productId);
      const prevIndex =
        (currentIndex - 1 + product.images.length) % product.images.length;
      return { ...prev, [productId]: prevIndex };
    });
  };

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-12 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Produk Kami
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", isJabodetabek && "text-p4")}
                onClick={() => setIsJabodetabek(true)}
              >
                JABODETABEK
              </button>
              <button
                className={clsx(
                  "pricing-head_btn",
                  !isJabodetabek && "text-p4"
                )}
                onClick={() => setIsJabodetabek(false)}
              >
                LUAR JABODETABEK
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !isJabodetabek && "translate-x-full"
                )}
              />
            </div>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* Interior products section with dynamic cards based on location */}
          <div
            className={clsx(
              "grid gap-6 relative z-2 -mt-4 max-xl:overflow-auto max-xl:pt-6",
              isJabodetabek
                ? "grid-cols-4 max-xl:flex"
                : "grid-cols-3 max-xl:flex"
            )}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card relative border-2 rounded-3xl p-2 max-xl:min-w-72 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              >
                <div className="relative flex flex-col items-center pt-2">
                  {/* Image slider */}
                  <div className="w-full mb-6 relative">
                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-300 ${
                            (currentImageIndex[product.id] || 0) === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.title} - gambar ${index + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ))}

                      {/* Navigation buttons */}
                      <button
                        onClick={() => handlePrevImage(product.id)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors"
                      >
                        ❮
                      </button>
                      <button
                        onClick={() => handleNextImage(product.id)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors"
                      >
                        ❯
                      </button>

                      {/* Pagination dots */}
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {product.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [product.id]: index,
                              }))
                            }
                            className={`w-2 h-2 rounded-full transition-colors ${
                              (currentImageIndex[product.id] || 0) === index
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="body-1 relative z-2 mb-4 w-full border-b border-b-s2 pb-4 text-center text-p4">
                  {product.caption}
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-center font-medium mb-4">Spesifikasi</h4>
                  <ul className="mx-auto space-y-3">
                    {product.specs.map((spec, index) => (
                      <li
                        key={index}
                        className="relative flex items-center gap-3"
                      >
                        <img
                          src={"/images/check.png"}
                          alt="check"
                          className="size-6 object-contain"
                        />
                        <p className="flex-1 text-sm">{spec}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <h4 className="text-center font-medium mb-2">Order Disini</h4>
                {/* Order buttons */}
                <div className="mt-2 mb-2 flex flex-col w-full gap-3">
                  {product.title === "Ruang Kantor" ? (
                    <a
                      href={product.orderLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button className="flex items-center justify-center gap-2 w-full border border-p1 text-p1 hover:bg-p1/10 py-2 px-3 rounded-lg transition-colors text-sm">
                        <div className="min-w-6 w-6 h-6 flex items-center justify-center flex-shrink-0">
                          <img
                            src="/images/wa.png"
                            alt="WhatsApp"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <span>WhatsApp</span>
                      </button>
                    </a>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={product.orderLinks.tokopedia}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <button className="flex items-center justify-center gap-2 w-full border border-p1 text-p1 hover:bg-p1/10 py-2 px-3 rounded-lg transition-colors text-sm">
                            <div className="min-w-6 w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <img
                                src="/images/tokped.png"
                                alt="Tokopedia"
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <span>Tokopedia</span>
                          </button>
                        </a>
                        <a
                          href={product.orderLinks.shopee}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <button className="flex items-center justify-center gap-2 w-full border border-p1 text-p1 hover:bg-p1/10 py-2 px-3 rounded-lg transition-colors text-sm">
                            <div className="min-w-6 w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <img
                                src="/images/shopee.png"
                                alt="Shopee"
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <span>Shopee</span>
                          </button>
                        </a>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={product.orderLinks.tiktokShop}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <button className="flex items-center justify-center gap-2 w-full border border-p1 text-p1 hover:bg-p1/10 py-2 px-3 rounded-lg transition-colors text-sm">
                            <div className="min-w-6 w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <img
                                src="/images/tiktok.png"
                                alt="TikTok Shop"
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <span>TikTok</span>
                          </button>
                        </a>
                        <a
                          href={product.orderLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <button className="flex items-center justify-center gap-2 w-full border border-p1 text-p1 hover:bg-p1/10 py-2 px-3 rounded-lg transition-colors text-sm">
                            <div className="min-w-6 w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <img
                                src="/images/wa.png"
                                alt="WhatsApp"
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <span>WhatsApp</span>
                          </button>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
