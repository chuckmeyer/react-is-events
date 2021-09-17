import { Highlight, connectHitInsights } from 'react-instantsearch-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import aa from 'search-insights';

function Product({ hit, insights }) {
  const url = `/products/${hit.objectID}`;
  return (
    <div className="hit-card">
      <img src={hit.image_link} align="left" alt={hit.name} />
      <div className="hit-info">
        <div classNa me="hit-name">
          <Link to={{ pathname: url }}
            onClick={() => {
              insights('clickedObjectIDsAfterSearch', {
                eventName: 'Search Result Clicked',
              });
            }}
          >
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

const ProductCard = connectHitInsights(aa)(Product);
export default ProductCard;
