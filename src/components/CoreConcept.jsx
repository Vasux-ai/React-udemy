import "../components/CoreConcept.css"
export default function CoreConcept({ concept }) {
    return (
        <div className='core-concept'>
            {concept.map((data, index) => (
                <div key={index} className='concept'>
                    <img src={data.image} alt={data.name} className="image" />
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    )
}