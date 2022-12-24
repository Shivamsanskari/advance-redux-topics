import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    title: 'This is a product 1',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    title: 'This is a product 2',
    price: 10,
    description: 'This is a first product - amazing!' 
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCT.map((product) => {
            return (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            );
          })
        }
      </ul>
    </section>
  );
};

export default Products;
