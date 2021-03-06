// Main Imports
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Components
import HoveredLink from "../HoveredLink/HoveredLink";
// Styles
import styles from "./DropdownBody.module.css";

const DropdownBody = (props) => {
  const [linkContent, setLinkContent] = useState(1);

  const { category, index } = props;

  const { mostPopular, topBrands } = category;

  return (
    <div className={styles.dropdown}>
      <div className="row g-0">
        <div className="col-3 border-end py-3">
          {index === 0 ? (
            <ul className="list-unstyled mb-0">
              {mostPopular?.map((el) => (
                <HoveredLink
                  key={el.id}
                  text={el.title}
                  classes={
                    linkContent === el.id
                      ? `${styles.links} ${styles.active}`
                      : styles.links
                  }
                  onMouseEnter={() => setLinkContent(el.id)}
                />
              ))}
            </ul>
          ) : (
            <>
              <h2 className="h6 text-uppercase px-3">Categories</h2>
              <ul className="list-unstyled mb-0">
                {mostPopular?.map((el) => (
                  <HoveredLink
                    key={el.id}
                    text={el.title}
                    classes={styles.links}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="col">
          <div className={`${styles.wrapper} row g-0 g1`}>
            {index === 0 ? (
              <>
                <div className="col-md-12 col-lg-5">
                  <h2 className="h5 pb-2 border-bottom fw-bold">
                    {mostPopular.find((el) => el.id === linkContent).title}
                  </h2>
                  <div className="row g-0 g1">
                    <div className="col">
                      <h3 className={styles["sub-title"]}>most popular</h3>
                      <ul className="list-unstyled mb-0">
                        {mostPopular
                          .find((el) => el.id === linkContent)
                          ?.sub?.map((el) => (
                            <li key={el.id}>
                              <Link href="/">
                                <a className={styles.link}>{el.title}</a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="col">
                      <h3 className={styles["sub-title"]}>top brands</h3>
                      <ul className="list-unstyled mb-0">
                        {topBrands.brands.map((brand) => (
                          <li key={brand.id}>
                            <Link href="/">
                              <a className={styles.link}>{brand.title}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    {topBrands.catImg.map((img) => (
                      <div className="col" key={img.id}>
                        <Link href="/">
                          <a>
                            <Image
                              src={img.imgURL}
                              alt="..."
                              width="280"
                              height="250"
                            />
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-12 col-lg-5">
                  <h2 className="h6 text-uppercase">top brands</h2>
                  <ul className={styles.brands}>
                    {topBrands.brands.map((brand) => (
                      <li key={brand.id}>
                        <Link href="/">
                          <a className={styles.brand}>
                            <Image
                              src={brand.imgURL}
                              alt={brand.title}
                              width={120}
                              height={90}
                            />
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <div className="row">
                    {topBrands.catImg.map((img) => (
                      <div className="col" key={img.id}>
                        <Link href="/">
                          <a>
                            <Image
                              src={img.imgURL}
                              alt="..."
                              width="280"
                              height="250"
                            />
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownBody;
