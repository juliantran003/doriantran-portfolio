// Imports
import Meta from "../components/Meta";
import equipment from "../public/json/equipment.json";

export default function Equipment() {
  return (
    <div>
      <Meta
        title="Dorian Tran - Equipment"
        description="A list of all the recording equipment at my disposal."
      />
      <div className="page-container equipment">
        <ul className="equipment-container">
          {equipment.map((equipment) => {
            return <li key={equipment.title}>{equipment.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
