import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

const App = () => {
  return (
    <div className='app'>
      {/* Products are located in the data object in the json file. */}
      {/* To access the array of products we need to do importName.data */}
      {/* In this case the importName is "data"  */}
      <FilterableProductTable />
    </div>
  );
};

export default App;