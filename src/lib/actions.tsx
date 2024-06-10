import { Quest } from "./definitions";

// This fetch method should have a UserId as a parameter to get all quests linked a user 
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

// const questContentMap = {
//   "install_extension": {
//     title: "Install the CareerOS Chrome extension",
//     description: "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS",
//     link: "https://chromewebstore.google.com/detail/careeros-save-jobs-contac/ahkmpgpdcneppdhhdgmmmcgicgfcfmka",
//   },
//   "submit_application": {
//     title: ({ job, company }) => `Submit your application for ${job.title} at ${company?.name}`,
//     description: ({ due_date }) => `Deadline: ${new Date(due_date).toLocaleDateString("en", { year: "numeric", month: "2-digit", day: "numeric" })}`,
//     link: ({ company }) => company?.linkedin_url,
//   },
//   "resolve-comment": {
//     title: "Resolve a comment from [CA Name]",
//     description: "You have an unresolved comment from your Career Advisor.",
//     link: "https://app.thecareeros.com/",
//   },
//   "save_first_company": {
//     title: "Save your first company",
//     description: "Browse our company database for your favorite companies or new inspiration and save your first company to get started.",
//     link: "https://app.thecareeros.com/",
//   },
//   "add_contact": {},
//   "send_linkedin_message": {},
//   "send_linkedin_connection": {},
//   "send_first_email": {},
//   "add_new_contact": {},
//   "schedule_coffee_chat": {},
//   "send_follow_up_email": {},
//   "respond_to_email": {},
// }


export function generateQuestContent(quest: Quest): {
  title: string | null;
  description: string | null;
  link: string | undefined;
  badge: boolean;
} {
  let title = null;
  let description = null;
  let link = undefined;
  let badge = false;

  switch (quest.type) {
    case "install_extension":
      title = "Install the CareerOS Chrome extension";
      description = "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.";
      link = "https://chromewebstore.google.com/detail/careeros-save-jobs-contac/ahkmpgpdcneppdhhdgmmmcgicgfcfmka";
      badge = true;
      break;
    case "submit_application":
      title = `Submit your application for ${quest.job.title} at ${quest.company?.name}`;
      description = `Deadline: ${new Date(quest.due_date).toLocaleDateString(
        "en",
        {
          year: "numeric",
          month: "2-digit",
          day: "numeric",
        }
      )}`;
      link = quest.company?.linkedin_url;
      break;
    case "resolve-comment":
      title = `Resolve a comment from [CA Name]`;
      description = "You have an unresolved comment from your Career Advisor.";
      link = "https://app.thecareeros.com/"
      break;
    case "save_first_company":
      title = "Save your first company";
      description =
        "Browse our company database for your favorite companies or new inspiration and save your first company to get started.";
      link = "https://app.thecareeros.com/"
      break;
    case "add_contact":
      title = `Save a contact at ${quest.company?.name}`;
      description =
        `You recently saved ${quest.company?.name}. The next step is to now save a contact who’s working there to start networking with.`;
      link = quest.company?.linkedin_url;
      break;
    case "send_linkedin_message":
      title = `Send LinkedIn Message to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name}`;
      description = "Send the LinkedIn message";
      link = quest.contact?.linkedin_url;
      break;
    case "send_linkedin_connection":
      title = `Send LinkedIn invitation to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name}`;
      description =
        "Send an invitation with a tailored message to your new contact. Our AI will help you!";
      link = quest.contact?.linkedin_url;
      break;
    case "send_first_email":
      title = `Send First Email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name}`;
      description = `Send First Email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name} to get the conversation started`;
      link = quest.contact?.linkedin_url;
      break;
    case "add_new_contact":
      title = `Save a new contact at ${quest.company?.name}`;
      description = "Add another contact to this company to start networking.";
      link = quest.company?.linkedin_url;
      break;
    case "schedule_coffee_chat":
      title = `Schedule a coffe what with ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name}`;
      description =
        "Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our coffee chat tips to prepare for your meeting.";
      link = quest.contact?.linkedin_url;
      break;
    case "send_follow_up_email":
      title = `Send Follow Up Email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name}`;
      description = `Send a follow-up email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name} to get a conversation started.`;
      link = quest.contact?.linkedin_url;
      break;
    default:
      break;
  }

  return { title, description, link, badge };
}
