// Main Imports
import Head from "next/head";
import MainLink from "../components/MainLink/MainLink";
// import axios from "axios";
// Components
import CustomMarquee from "../components/CustomMarquee/CustomMarquee";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SlickSlider from "../components/SlickSlider/SlickSlider";
import Product from "../components/Product/Product";
import CategoryWithSlider from "../components/Home/CategoryWithSlider/CategoryWithSlider";
import SpecialEvent from "../components/Home/SpecialEvent/SpecialEvent";
// Styles
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
// Redux
import { useSelector } from "react-redux";
// Data
import products from "../data/products.json";

const images = [
  { id: 1, src: "/images/banner-1.webp" },
  { id: 2, src: "/images/banner-2.webp" },
  { id: 3, src: "/images/banner-3.webp" },
];

const bannerSettings = {
  dots: true,
};

const topDealsSettings = {
  slidesToShow: 5,
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
};

const brandsSettings = {
  dots: true,
  arrows: false,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

// export const getStaticProps = async () => {
//   const { data: topDeals } = await axios.get(
//     "http://localhost:5000/products?event=top-deals"
//   );

//   return {
//     props: {
//       topDeals,
//     },
//   };
// };

const Home = () => {
  const { cart } = useSelector((state) => state.cart);
  const { lang } = useSelector((state) => state.shared);

  const topDeals = products.filter((product) => product.event === "top-deals");

  const checkExistInCart = (item) => {
    const existedItem = cart?.find((el) => el.id === item.id);
    if (existedItem) return existedItem.quantity;
    return null;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Zahran Market</title>
        <meta name="description" content="" />
        <link rel="icon" href="/images/icon.webp" />
      </Head>

      <main>
        {/* Marquee */}
        <section className={styles.marquee}>
          <div className="d-flex align-items-center">
            <CustomMarquee
              text={
                lang === "en"
                  ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                  : "انتظرونا قريبا زهران ماركت"
              }
              direction={lang === "en" ? "left" : "right"}
            />
          </div>
        </section>

        {/* Main Banner */}
        <section className="banner">
          <SlickSlider customSettings={bannerSettings}>
            {images?.map((img) => (
              <div key={img.id}>
                <Link href="/">
                  <a>
                    <Image
                      src={img.src}
                      alt=""
                      width={1920}
                      height={350}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={img.src}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </SlickSlider>
        </section>

        {/* Top Categories */}
        <section className="container my-5">
          <SectionHeading classes={styles.heading} text="top Categories">
            <MainLink text="more Categories" color="main-outline" />
          </SectionHeading>
          <div className="row g-3">
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card overflow-hidden br-main">
                <a href="#" className={styles.category}>
                  <Image
                    src="/images/offer-1.webp"
                    className="card-img-top"
                    alt="offer-1"
                    width="250"
                    height="171"
                    placeholder="blur"
                    blurDataURL="/images/offer-1.webp"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="d-block">
                    <h3 className="card-title h5 text-center mb-0">
                      Card title
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card overflow-hidden br-main">
                <a href="#" className={styles.category}>
                  <Image
                    src="/images/offer-2.webp"
                    className="card-img-top"
                    alt="offer-1"
                    width="250"
                    height="171"
                    placeholder="blur"
                    blurDataURL="/images/offer-2.webp"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="d-block">
                    <h3 className="card-title h5 text-center mb-0">
                      Card title
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card overflow-hidden br-main">
                <a href="#" className={styles.category}>
                  <Image
                    src="/images/offer-3.webp"
                    className="card-img-top"
                    alt="offer-1"
                    width="250"
                    height="171"
                    placeholder="blur"
                    blurDataURL="/images/offer-3.webp"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="d-block">
                    <h3 className="card-title h5 text-center mb-0">
                      Card title
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card overflow-hidden br-main">
                <a href="#" className={styles.category}>
                  <Image
                    src="/images/offer-4.webp"
                    className="card-img-top"
                    alt="offer-1"
                    width="250"
                    height="171"
                    placeholder="blur"
                    blurDataURL="/images/offer-4.webp"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="d-block">
                    <h3 className="card-title h5 text-center mb-0">
                      Card title
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card overflow-hidden br-main">
                <a href="#" className={styles.category}>
                  <Image
                    src="/images/offer-1.webp"
                    className="card-img-top"
                    alt="offer-1"
                    width="250"
                    height="171"
                    placeholder="blur"
                    blurDataURL="/images/offer-1.webp"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="d-block">
                    <h3 className="card-title h5 text-center mb-0">
                      Card title
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card overflow-hidden br-main">
                <a href="#" className={styles.category}>
                  <Image
                    src="/images/offer-2.webp"
                    className="card-img-top"
                    alt="offer-1"
                    width="250"
                    height="171"
                    placeholder="blur"
                    blurDataURL="/images/offer-2.webp"
                  />
                </a>
                <div className="card-body">
                  <a href="#" className="d-block">
                    <h3 className="card-title h5 text-center mb-0">
                      Card title
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Deals */}
        <section className="container my-5 outside-slick-arrows">
          <SectionHeading classes={styles.heading} text="top deals">
            <MainLink text="more deals" color="main-outline" />
          </SectionHeading>
          <SlickSlider customSettings={topDealsSettings}>
            {topDeals?.map((el) => (
              <Product
                key={el?.id}
                product={el}
                quantity={checkExistInCart(el)}
              />
            ))}
          </SlickSlider>
        </section>

        {/* Categories & Sub */}
        <section className="container my-5">
          <SectionHeading
            classes={styles.heading}
            text="categories &amp; Sub-Products"
          />
          <div className="categories-sub row g-3">
            <div className="col-12 col-md-6 flex-grow-1 mb-4">
              <CategoryWithSlider
                heading="Electronics & Appliances"
                subProducts={[
                  "Tv's",
                  "Large Appliances",
                  "Small Appliances",
                  "Laptops, PCs",
                  "Chargers",
                  "Home appliance",
                ]}
              />
            </div>
            <div className="col-12 col-md-6 flex-grow-1 mb-4">
              <CategoryWithSlider
                heading="Electronics & Appliances"
                subProducts={[
                  "Tv's",
                  "Large Appliances",
                  "Small Appliances",
                  "Laptops, PCs",
                  "Chargers",
                  "Home appliance",
                ]}
              />
            </div>
          </div>
        </section>

        {/* One Categories With Sub Products */}
        <section className="container my-5">
          <SectionHeading
            classes={styles.heading}
            text="One Category with Sub-Products"
          >
            <MainLink text="more categories" color="main-outline" />
          </SectionHeading>
          <div className="categories-sub row g-3">
            <div className="col-12 col-md-6 flex-grow-1 mb-4">
              <CategoryWithSlider
                heading="Electronics & Appliances"
                subProducts={[
                  "Tv's",
                  "Large Appliances",
                  "Small Appliances",
                  "Laptops, PCs",
                  "Chargers",
                  "Home appliance",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Special Events */}
        <section className="container my-5">
          <SectionHeading classes={styles.heading} text="Special Events">
            <MainLink text="more events" color="main-outline" />
          </SectionHeading>
          <div className="row g-3 mt-3">
            {[1, 2, 3, 4].map((el) => (
              <div className="col-6 col-md-4 col-lg " key={el}>
                <SpecialEvent title="Ramadan Must Haves" />
              </div>
            ))}
          </div>
        </section>
        {/* Events */}
        <section className="container my-5">
          <SectionHeading
            classes={styles["sub-heading"]}
            text="Special Events offer"
          >
            <MainLink text="more offers" color="main-outline" />
          </SectionHeading>
          <SlickSlider customSettings={topDealsSettings}>
            {topDeals?.map((el) => (
              <Product
                key={el?.id}
                product={el}
                quantity={checkExistInCart(el)}
              />
            ))}
          </SlickSlider>
        </section>

        {/* Magazine */}
        <section className="container my-5">
          <SectionHeading classes={styles.heading} text="magazine" />
          <div className={styles.magazine}>
            <h3 className=" fw-bold text-white position-relative mb-3">
              Magazine Content
            </h3>
            <MainLink text="Show Details" color="main" />
          </div>
        </section>

        {/* Shop By Brand */}
        <section className="container my-5">
          <SectionHeading classes={styles.heading} text="shop by brand">
            <MainLink text="more brands" color="main-outline" />
          </SectionHeading>
          <SlickSlider customSettings={brandsSettings}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
              <Link href="/" key={el}>
                <a className={styles.brand}>
                  <Image
                    src="/images/drop-brand-3.webp"
                    alt="..."
                    width="134"
                    height="95"
                    placeholder="blur"
                    blurDataURL="/images/drop-brand-3.webp"
                  />
                </a>
              </Link>
            ))}
          </SlickSlider>
        </section>
      </main>
    </div>
  );
};

export default Home;
