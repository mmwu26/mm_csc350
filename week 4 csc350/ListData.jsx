import { data } from "../assets/data.js";

export default function ListData({ value }) {
  const animalList = data.filter((dataset) =>
    dataset.animal.toLowerCase().includes(value.toLowerCase()),
  );
  const rowItems = animalList.map((dataset) => (
    <tr key={dataset.id}>
      <td className="text-start">
        <img
          src={dataset.image}
          alt={dataset.animal}
          className="img-fluid rounded-circle"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      </td>

      <td className="text-start">{dataset.name}</td>

      <td className="text-start">{dataset.animal}</td>

      <td className="text-end">{dataset.specialty}</td>
    </tr>
  ));
  return rowItems;
}
