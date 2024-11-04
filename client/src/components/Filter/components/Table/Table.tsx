import style from './style.module.scss';
import { FC } from 'react';

export const Table: FC = () => {
  return (
    <div className="container">
      <table className={style.table}>
        <tr>
          <th>Women's Clothing</th>
          <th>Best Price</th>
        </tr>
        <tr>
          <td>Pick Any 4- Women'ss Plain T-shirt Combo</td>
          <td>$10.99</td>
        </tr>
        <tr>
          <td>Pick Any 4- Plain Women'ss Boxer Combo</td>
          <td>$10.99</td>
        </tr>
        <tr>
          <td>Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</td>
          <td>$13.99</td>
        </tr>
        <tr>
          <td>Multicolor Checkered Long Casual Shirts for Women</td>
          <td>$4.99</td>
        </tr>
        <tr>
          <td>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</td>
          <td>$7.99</td>
        </tr>
        <tr>
          <td>Blue Floral Shirts</td>
          <td>$5.99</td>
        </tr>
        <tr>
          <td>Jade Black Narrow Cut Flexible Women Leggings</td>
          <td>$9.98</td>
        </tr>
        <tr>
          <td>Mustard-yellow Solid Straight-Fit Women Pant</td>
          <td>$4.99</td>
        </tr>
        <tr>
          <td>Women Pants Combo - Pick Any 2</td>
          <td>$8</td>
        </tr>
        <tr>
          <td> Green Solid Boxy Casual Shirts for Women</td>
          <td>$4.49</td>
        </tr>
        <tr>
          <td>Plain Burgundy Women's Boxer</td>
          <td>$34</td>
        </tr>
        <tr>
          <td>Striped Front Tie Casual Shirts for Women</td>
          <td>$4.49</td>
        </tr>
      </table>
    </div>
  );
};
