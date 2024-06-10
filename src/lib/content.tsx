import { Quest, QuestContent} from "./definitions"

export const BadgeText : {[key: string]: string} = {
    "install_extension": "Install",
    "submit_application": "Application",
    "resolve-comment": "See comment",
    "save-company": "Explore",
    "save_first_company": "Browse",
    "add_contact": "Add contact",
    "send_linkedin_message": "Reach Out",
    "send_linkedin_connection": "Connect",
    "send_first_email": "Send Email",
    "add_new_contact": "Save Contact",
    "schedule_coffee_chat": "Message",
    "send_follow_up_email": "Follow up",
    "respond_to_email": "Respond",
}

export const QuestIcon : {[key: string]: JSX.Element} = {
    "install_extension": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
      </svg>),
    "submit_application": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
        </svg>
    ),
    "resolve-comment": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
        </svg>
    ),
    "save_first_company": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
        </svg>
      ),
    "schedule_coffee_chat": (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"/>
            <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
        </svg>
      ),
}

export const questContent: { [key: string]: (quest: Quest) => QuestContent | QuestContent } ={
    "install_extension": {
      title: "Install the CareerOS Chrome extension",
      description: "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.",
      link: "https://chromewebstore.google.com/detail/careeros-save-jobs-contac/ahkmpgpdcneppdhhdgmmmcgicgfcfmka",
      badge: true,
    },
    "submit_application": (quest: Quest) => ({
      title: `Submit your application for ${quest.job.title} at ${quest.company?.name}`,
      description: `Deadline: ${new Date(quest.due_date).toLocaleDateString("en", { year: "numeric", month: "2-digit", day: "numeric" })}`,
      link: quest.company?.linkedin_url,
      badge: false,
    }),
    "resolve-comment": {
      title: `Resolve a comment from [CA Name]`,
      description: "You have an unresolved comment from your Career Advisor.",
      link: "https://app.thecareeros.com/",
      badge: false,
    },
    "save_first_company": {
      title: "Save your first company",
      description: "Browse our company database for your favorite companies or new inspiration and save your first company to get started.",
      link: "https://app.thecareeros.com/",
      badge: false,
    },
    "add_contact": ( quest: Quest ) => ({
      title: `Save a contact at ${quest.company?.name}`,
      description: `You recently saved ${quest.company?.name}. The next step is to now save a contact who’s working there to start networking with.`,
      link: quest.company?.linkedin_url,
      badge: false,
    }),
    "send_linkedin_message": (quest: Quest) => ({
      title: `Send LinkedIn Message to ${quest.contact?.first_name} ${quest.contact.last_name} at ${quest.company?.name}`,
      description: "Send the LinkedIn message",
      link: quest.contact?.linkedin_url,
      badge: false,
    }),
    "send_linkedin_connection": (quest: Quest) => ({
      title: `Send LinkedIn invitation to ${quest.contact?.first_name} ${quest.contact.last_name} at $quest.company?.name}`,
      description: "Send an invitation with a tailored message to your new contact. Our AI will help you!",
      link: quest.contact?.linkedin_url,
      badge: false,
    }),
    "send_first_email": (quest: Quest) => ({
      title: `Send First Email to ${quest.contact?.first_name} ${quest.contact.last_name} at $quest.company?.name}`,
      description: `Send First Email to ${quest.contact?.first_name} ${quest.contact.last_name} at ${quest.company?.name} to get the conversation started`,
      link: quest.contact?.linkedin_url,
      badge: false,
    }),
    "add_new_contact": (quest: Quest) => ({
      title: `Save a new contact at ${quest.company?.name}`,
      description: "Add another contact to this company to start networking.",
      link: quest.company?.linkedin_url,
      badge: false,
    }),
    "schedule_coffee_chat": (quest: Quest) => ({
      title: `Schedule a coffe what with ${quest.contact?.first_name} ${quest.contact.last_name} at ${quest.company?.name}`,
      description: "Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our coffee chat tips to prepare for your meeting.",
      link: quest.contact?.linkedin_url,
      badge: false,
    }),
    "send_follow_up_email": (quest: Quest) => ({
        title: `Send Follow Up Email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name}`,
        description:`Send a follow-up email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company?.name} to get a conversation started.`,
        link: quest.contact?.linkedin_url,
        badge: false,
    }),
}