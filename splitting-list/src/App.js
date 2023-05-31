import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
    const chemists = people.filter(person =>
      person.profession === "chemist"
    );
    const other = people.filter(person =>
        person.profession !== "chemist"
      );

const chemistListItems = chemists.map(getListItem);
const otherListItems = other.map(getListItem);

function getListItem(person) {
    return (
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
}
  return (
      <article>
        <h1>Scientists</h1>
        <h2>Chemists</h2>
        <ul>{chemistListItems}</ul>
        <h2>Other scientists</h2>
        <ul>{otherListItems}</ul>
      </article>
  );
}
