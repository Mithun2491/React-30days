import { useState } from "react";
import TimeInputForm from "../components/TimeInputForm";
import TimeChart from "../components/TimeChart";

export interface Activity {
  label: string;
  minutes: number;
}

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (activity: Activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <TimeInputForm onAdd={addActivity} />
      <TimeChart data={activities} />
    </div>
  );
}
