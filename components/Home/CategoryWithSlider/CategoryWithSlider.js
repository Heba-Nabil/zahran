// Main Imports
import Image from "next/image";
import Link from "next/link";
// Components
import SlickSlider from "../../SlickSlider/SlickSlider";
// Styles
import styles from "./CategoryWithSlider.module.css";

const subCategoriesSettings = {
  slidesToShow: 5,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const CategoryWithSlider = (props) => {
  const { to = "/", heading = "", subProducts = [] } = props;

  return (
    <div className="card border-0">
      <Link href={to}>
        <a className={styles.category}>
          <h3 className="mb-0 w-50 fw-bold position-relative">{heading}</h3>
          <div className={styles.image}>
            <Image
              src="/images/Electronics_Appliances.webp"
              alt="..."
              width="1920"
              height="700"
              placeholder="blur"
              blurDataURL="/images/Electronics_Appliances.webp"
            />
          </div>
        </a>
      </Link>
      <div className="my-2">
        {subProducts.length !== 0 && (
          <SlickSlider customSettings={subCategoriesSettings}>
            {subProducts.map((el) => (
              <Link href="/" key={el}>
                <a className={styles.sub}>
                  <div className="image">
                    <Image
                      src="/images/prod-1.webp"
                      alt="..."
                      width="128"
                      height="69"
                      placeholder="blur"
                      blurDataURL="/images/prod-1.webp"
                    />
                  </div>
                  <span className={styles["sub-title"]}>{el}</span>
                </a>
              </Link>
            ))}
          </SlickSlider>
        )}
      </div>
    </div>
  );
};

export default CategoryWithSlider;
