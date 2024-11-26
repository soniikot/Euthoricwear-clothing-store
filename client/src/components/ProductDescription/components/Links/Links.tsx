import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface LinksWithProps {
  id: number;
}

export const Links: FC<LinksWithProps> = ({ id }) => {
  const { products } = useAppSelector((state: RootState) => state.products);

  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <h5>Product not found</h5>;
  }

  const gender = product?.attributes?.categories?.data[0]?.attributes?.title;
  const subcategory =
    product?.attributes?.subcategories?.data[0]?.attributes?.title;

  return (
    <h5>
      <Link to="/products">Shop</Link>&gt;
      {gender && gender.charAt(0).toUpperCase() + gender.slice(1)} &gt;
      {subcategory &&
        subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
    </h5>
  );
};
