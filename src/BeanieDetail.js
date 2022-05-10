import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  // you'll need to track the current beanieBaby in state
  const [beanieBaby, setBeanieBaby] = useState({});
  // you'll need to get the route param using the appropriate react router hook

  const params = useParams();

  useEffect(() => {
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    async function load() {
      const beanieBabyData = await getSingleBeanie(params.id);
      setBeanieBaby(beanieBabyData);
    }
    load();
  }, [params.id]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  }

  return (
    <>
      {/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}

      {
        <>
          <Link to="/">Home</Link>
          <div className="beanie-detail" onClick={handleBeanieClick}>
            <div className="beanie-data">
              <img className="beanie-img" src={beanieBaby.image} />
              <p>{beanieBaby.title}</p>
              <p>{beanieBaby.animal}</p>
              <p>Zodiac: {beanieBaby.astroSign}</p>
              <p> Born on {beanieBaby.birthday}</p>
              <p>Color: {beanieBaby.color}</p>
              <p>Release Date: {beanieBaby.releaseDate}</p>
              <p>Retirement Date: {beanieBaby.retirementDate}</p>

              <p>Size: {beanieBaby.size}</p>
              <p>Theme: {beanieBaby.theme}</p>
              <p>Sub-Theme: {beanieBaby.subtheme}</p>
              <p>Style Number: {beanieBaby.styleNumber}</p>
              <p>Swing Tag Generation: {beanieBaby.swingTagGeneration}</p>
              <p>Tush Tag Generation: {beanieBaby.tushTagGeneration}</p>
            </div>
          </div>
        </>
      }
    </>
  );
}
