import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <>
      <Link className="beanie-baby-list-item" to={`/beanies/${beanieBaby.id}`} />
      <h3>{beanieBaby.title}</h3>
      <p>{beanieBaby.animal}</p>
      <p>{beanieBaby.astroSign}</p>
      <img className="beanie-baby-list-image" src={beanieBaby.image} />
    </>
  );
}
