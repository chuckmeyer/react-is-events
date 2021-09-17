import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';

function ProductPage() {
  const searchClient = algoliasearch(
    'HYDY1KWTWB',
    '28cf6d38411215e2eef188e635216508'
  );
  const index = searchClient.initIndex('gstar_demo_test');
  const { objectID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    index.getObject(objectID).then(object => {
      setProduct(object);
    });
  }, []);

  return (
    <div className="product-page">
      <Link to={{ pathname: '/' }}>&lt; Back</Link>
      <div className="product-card">
        <img src={product.image_link} align="left" alt={product.name} />
        <div className="hit-info">
          <div className="hit-name">{product.name}</div>
          <div className="hit-description">{product.description}</div>
          <div className="hit-price">${product.price}</div>
          <button className="hit-action">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
