import "./Header.css";
export default function TabButton(props) 
{
    return (
        <li className="tab-button-container">
            <button className="tab-button" onClick={props.onTrigger}>{props.children}</button>
        </li>
    )
}