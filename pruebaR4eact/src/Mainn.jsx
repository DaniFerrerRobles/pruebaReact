import movies from "./movies";

const peliculas = movies;

export function Mainn() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="col">
            <div className="card">
              <img src={pelicula.poster} className="card-img-top" alt= "peli"/>
              <div className="card-body">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text">{pelicula.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
