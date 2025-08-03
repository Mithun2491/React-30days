import { useState } from "react";
import type { Activity } from "../pages/Home";

interface Props {
  onAdd: (activity: Activity) => void;
}

export default function TimeInputForm({ onAdd }: Props) {
  const [label, setLabel] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!label || !minutes) return;
    onAdd({ label, minutes: parseInt(minutes) });
    setLabel("");
    setMinutes("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-xl w-80">
      <h2 className="text-xl font-semibold mb-4">Add Activity</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Activity</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g. Reading"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Minutes</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g. 30"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-600 text-black py-2 px-4 rounded hover:bg-purple-700 transition"
      >
        Add
      </button>
    </form>
  );
}
