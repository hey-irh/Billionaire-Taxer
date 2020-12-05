import { useAppContext } from "../../Context";
import "./Paragraphs.css";

function Paragraph({ ItemNumber, text }) {
  const { billionaire, remainingWealth, name } = useAppContext();
  return (
    <div className="statements">
      <p>
        {" "}
        Reducing {name}'s wealth by $
        {(billionaire - remainingWealth).toLocaleString()} it could pay for:
      </p>
      <p>
        {ItemNumber} new {text}
      </p>
    </div>
  );
}

export default Paragraph;
