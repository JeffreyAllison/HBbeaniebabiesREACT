import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <div className="beanie-baby-list-item">
      <Link to={`/beanies/${beanieBaby.id}`}>
        <h3>Name: {beanieBaby.title}</h3>
        <p>(if known)Animal Type: {beanieBaby.animal}</p>
        <p>Zodiac: {beanieBaby.astroSign}</p>
        <p>Release Date: {beanieBaby.releaseDate}</p>
        <img className="beanie-baby-list-image" src={beanieBaby.image} />
      </Link>
    </div>
  );
}
