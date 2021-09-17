import { Highlight } from 'react-instantsearch-dom';
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ hit }) {
  const url = `/products/${hit.objectID}`;
  return (
    <div className="hit-card">
      <img src={hit.image_link} align="left" alt={hit.name} />
      <div className="hit-info">
        <div classNa me="hit-name">
          <Link to={{ pathname: url }}>
            <Highlight attribute="name" hit={hit} />
          </Link>
        </div>
        <div className="hit-description">
          <Highlight attribute="description" hit={hit} />
        </div>
        <div className="hit-price">${hit.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
