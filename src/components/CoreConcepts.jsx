export default function CoreConcepts({Concepts}) {
  return (
    <section className="core-concept">
      {Concepts.map((data, index) => (
        <div key={index} className="concept">
          <img src={data.image} alt={data.name} className="image" />
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
      ))}
    </section>
  );
}
