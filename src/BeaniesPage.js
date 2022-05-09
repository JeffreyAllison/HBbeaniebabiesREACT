import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const perPage = 40;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetch() {
      const from = currentPage * perPage - perPage;
      const to = currentPage * perPage;
      const beanies = await getBeanieBabies(from, to);

      setBeanieBabies(beanies);
    }

    fetch();
  }, [currentPage]); // what can you do with this array to trigger a fetch every time the page changes?

  return (
    <>
      <h2>Current Page {currentPage}</h2>
      <div className="buttons">
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous Page
        </button>
        {/* on click, this button should increment the page in state  */}
        <button disabled={currentPage >= 53} onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      <BeaniesList beanieBabies={beanieBabies} />
    </>
  );
}

export default App;
