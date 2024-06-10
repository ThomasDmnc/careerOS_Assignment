import { Quest } from "./definitions";

export default async function retrieveAllQuests(): Promise<Quest[]> {
  try {
    const response = await fetch("../../public/quests.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.quests as Quest[];
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
}
