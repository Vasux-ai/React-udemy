import "../components/CoreConcept.css";
import { exampleData } from "../data.js";

export default function Example({ content }) {
  return (
    <div className="example-content">
      <h3>{exampleData[content].name}</h3>
      <p>{exampleData[content].description}</p>
      <pre>
        <code>{exampleData[content].code}</code>
      </pre>
    </div>
  );
}
