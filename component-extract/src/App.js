import { getImageUrl } from './utils.js';

function Profile( {person, imageSize = 70}) {
  const imageSource = getImageUrl(person.imageID)

  return (
      <section className="profile">
          <h2>{person.name}</h2>
          <img className= "avatar"
              src={imageSource}
               alt={person.name}
               width={imageSize}
               height={imageSize}
          />
          <ul>
              <li>
                  <b>Profession: </b>
                  {person.profession}
              </li>
              <li>
                  <b>Awards: {person.awards.length} </b>
                  {person.awards.join(", ")}
              </li>
              <li>
                  <b>Discovered: </b>
                  {person.discovery}
              </li>
          </ul>

      </section>
  )
}

export default function Gallery() {
  return (
      <div>
        <h1>Notable scientists</h1>

        <Profile person={{
            name: "Maria Skłodowska-Curie",
            imageID: "szV5sdG",
            profession: "physicist and chemist",
            discovery:"polonium (element)",
            awards: [
                "Nobel Prize in Physics",
                "Nobel Prize in Chemistry",
                "Davy Medal",
                "Matteucci Medal"
            ],
        }} />

        <Profile person={{
            name: "Katsuko Saruhashi",
            imageID: "YfeOqp2",
            profession: "geochemist",
            discovery:"a method for measuring carbon dioxide in seawater",
            awards: [
                "Miyake Prize for geochemistry",
                "Tanaka Prize"

            ],
        }} />
      </div>
  );
}
