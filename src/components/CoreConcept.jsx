import { useState } from "react";
import "../components/CoreConcept.css";
import TabButton from "./TabButton";
import CoreConcepts from "./CoreConcepts.jsx";
import Example from "./Example.jsx";
import { data } from "../data.js";
import Tab from "./Tabs.jsx";

export default function CoreConcept() {
  const [content, setContent] = useState(null);
  const Tabs = ["Component", "Props", "State", "JSX"];

  return (
    <>
      <CoreConcepts Concepts={data} />

      <section className="second-Core-div">
        <h2 className="h2Header">Examples :</h2>
        <div>
          {Tabs.map((tab, index) => (
            <Tab container='div' key={index} button={<TabButton
              key={index}
              onTrigger={() => setContent(tab.toLowerCase())}
            >
              {tab}
            </TabButton>}/>
          ))}

          {content ? <Example content={content} /> : <p className="content">Please click on a tab to see the content.</p>}
        </div>
      </section>
    </>
  );
}
