import { useEffect, useState } from "react";
import { Quest } from "../lib/definitions";
import retrieveAllQuests from "../lib/actions";

export default function Container() {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    retrieveAllQuests()
      .then((data) => {
        setQuests(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(typeof quests)
  return (
    <>
      <p>Container</p>
      {quests &&
        quests.map((quest: Quest) => {
          return (
                <div key={quest.id}>
                    <p>{quest.status}</p>
                </div>
          );
        })}
    </>
  );
}
