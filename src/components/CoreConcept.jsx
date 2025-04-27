import { useState } from "react";
import "../components/CoreConcept.css";
import TabButton from "./TabButton";
import { exampleData } from "../data.js";

export default function CoreConcept({ concept }) {
  const [content, setContent] = useState(null);
  const Tabs = ["Component", "Props", "State", "JSX"];

  return (
    <>
      <section className="core-concept">
        {concept.map((data, index) => (
          <div key={index} className="concept">
            <img src={data.image} alt={data.name} className="image" />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </section>

      <section className="second-Core-div">
        <h2 className="h2Header">Examples :</h2>
        <div>
          {Tabs.map((tab, index) => (
            <TabButton
              key={index}
              onTrigger={() => setContent(tab.toLowerCase())}
            >
              {tab}
            </TabButton>
          ))}

          {content ? (
            <div className="example-content">
              <h3>{exampleData[content].name}</h3>
              <p>{exampleData[content].description}</p>
              <pre>
                <code>{exampleData[content].code}</code>
              </pre>
            </div>
          ) : (
            <p className="content">Please click on a tab to see the content.</p>
          )}
        </div>
      </section>
    </>
  );
}
