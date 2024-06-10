import { Quest, QuestContent } from "./definitions";
import { questContent } from "./content";

// This fetch method should have a UserId as a parameter to get all quests for a user
export async function retrieveAllQuests(): Promise<Quest[]> {
  try {
    const response = await fetch("/quests.json");
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

export function generateQuestContent(quest: Quest): QuestContent {
  let title = null;
  let description = null;
  let link = undefined;
  let badge = false;

  const content = questContent[quest.type];

  if (content) {
    if (typeof content === "function") {
      const questContent = content(quest);
      title = questContent.title;
      description = questContent.description;
      link = questContent.link;
      badge = questContent.badge;
    } else if (typeof content === "object") {
      title = content.title;
      description = content.description;
      link = content.link;
      badge = content.badge;
    }
  }

  return { title, description, link, badge };
}
