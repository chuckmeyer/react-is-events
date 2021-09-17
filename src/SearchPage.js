import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import ProductCard from './ProductCard';

const searchClient = algoliasearch(
  'HYDY1KWTWB',
  '28cf6d38411215e2eef188e635216508'
);

function SearchPage() {
  return (
    <div>
      <div className="ais-InstantSearch">
        <h1>React InstantSearch with Events</h1>
        <InstantSearch searchClient={searchClient} indexName="gstar_demo_test">
          <div className="left-panel">
            <ClearRefinements />
            <h2>Categories</h2>
            <RefinementList attribute="category" />
            <h2>Gender</h2>
            <RefinementList attribute="genderFilter" />
            <Configure hitsPerPage={8} clickAnalytics={true} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={ProductCard} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default SearchPage;
