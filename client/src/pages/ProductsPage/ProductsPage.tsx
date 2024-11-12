import { SectionTitle } from '@/shared/components/SectionTitle/SectionTitle';
import { Products } from '@/components/Products/Products';
import { Filter } from '@/components/Filter/Filter';
import { Table } from '@/components/Filter/components/Table/Table';
import style from './styles.module.scss';
import { FC } from 'react';

export const ProductsPage: FC = () => {
  return (
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.filter}>
          <Filter />
        </div>
        <div className={style.products_wrapper}>
          <Products numberOfProducts={100} isProductPage={true} />
        </div>
      </div>
      <div className={style.text}>
        <SectionTitle text="Clothing for Men and Women Online" />
        <h4 className={style.subheader}>
          Explore Our Stylish Clothing Collection Online at Euphoria
        </h4>

        <p>
          Are you looking for the best website to buy clothing for men and women
          online? Your search ends here at Euphoria. Whether you're looking for
          trendy casual wear or premium-quality cotton apparel, we've got you
          covered with a wide range of stylish options. Our collection features
          the latest and best designs in clothing, making it easy for you to
          find the perfect outfit.
        </p>

        <p>
          Our curated collection of men’s and women’s clothing will help you
          stand out as a trendsetter with unique and iconic styles that reflect
          your personality.
        </p>

        <h4 className={style.subheader}>
          Euphoria: Your One-Stop Destination for Every Clothing Need
        </h4>

        <p>
          Clothing for men and women is becoming more popular than ever, and
          it’s no surprise. Gone are the days of uncomfortable fashion. Today,
          comfort is key, and Euphoria offers a vast range of stylish clothing
          that is as comfortable as it is fashionable. Whether you're looking
          for casual wear or something a bit more formal, our collection ensures
          you'll look your best without compromising on comfort.
        </p>

        <p>
          Our collection of men’s and women’s clothing sets you apart as a
          trendsetter, offering iconic designs that blend comfort with style.
          Few online stores offer such a wide selection of premium-quality
          Western wear, crafted from the finest materials and designed with
          elegance. At Euphoria, you’ll find the perfect pieces for your
          wardrobe that reflect the latest trends and timeless style.
        </p>

        <SectionTitle text="Buy men and women's Clothing at Best Price" />
      </div>

      <Table />
    </div>
  );
};
