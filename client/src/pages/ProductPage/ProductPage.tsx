import style from './styles.module.scss';
import sampleImage from '@/assets/sample1.jpg';
import sampleImage2 from '@/assets/sample2.jpg';
import { ProductsDescription } from '@/components/ProductDescription/ProductsDescription';
import { BottomDescription } from '@/components/BottomDescription/BottomDescription';
import { SectionTitle } from '@/shared/components/SectionTitle/SectionTitle';
import { Products } from '@/components/Products/Products';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export const ProductPage = () => {
  const { id: idString } = useParams();
  const id = Number(idString);

  const { products } = useAppSelector((state: RootState) => state.products);

  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!products || products.length === 0 || isNaN(id)) {
      return;
    }

    const product = products.find((prod) => prod.id === id);
    console.log(products);
    if (product) {
      const initialImage =
        import.meta.env.VITE_API_UPLOAD_URL +
        product.attributes.img.data.attributes.url;
      setSelectedImg(initialImage);
    }
  }, [products, id]);

  if (!products || products.length === 0 || isNaN(id)) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.images}>
          <div className={style.side_images}>
            {products.length > 0 && (
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  products[id].attributes.img.data.attributes.url
                }
                alt="Raven Hoodie"
                className={clsx(style.image, {
                  [style.selected_image]:
                    selectedImg ===
                    import.meta.env.VITE_API_UPLOAD_URL +
                      products[id].attributes.img.data.attributes.url,
                })}
                onClick={(_e) =>
                  setSelectedImg(
                    import.meta.env.VITE_API_UPLOAD_URL +
                      products[id].attributes.img.data.attributes.url
                  )
                }
              />
            )}
            <img
              src={sampleImage}
              alt="sample"
              className={clsx(style.image, {
                [style.selected_image]: selectedImg === sampleImage,
              })}
              onClick={(_e) => setSelectedImg(sampleImage)}
            />
            <img
              src={sampleImage2}
              alt="sample"
              className={clsx(style.image, {
                [style.selected_image]: selectedImg === sampleImage2,
              })}
              onClick={(_e) => setSelectedImg(sampleImage2)}
            />
          </div>
          <div className={style.photo_wrapper}>
            {selectedImg && <img src={selectedImg} className={style.image} />}
          </div>
        </div>
        <ProductsDescription id={id} />
      </div>

      <BottomDescription />
      <div className="container">
        <SectionTitle text="Similar Products" />
        <Products numberOfProducts={8} />
      </div>
    </>
  );
};
