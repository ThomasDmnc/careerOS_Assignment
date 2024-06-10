import './QuestTile.scss'

const BadgeText : {[key: string]: string} = {
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

export default function QuestTile({questId, questType, questTitle,  questDescription, questLink, questBadge}: {questId: string, questType: string , questTitle: string, questDescription: string, questLink: string | null, questBadge: boolean}) {
    return (
      <div className="questTile-container" key={questId}>
        <div className="questTile-container__icon">pouet</div>
        <div className="questTile-container__content">
          <p className="questTile_title">{questTitle}</p>
          <p className="questTile_description">{questDescription}</p>
        </div>
        <div className="questTile-container__button">
          {questBadge ? (
            <a
              href={questLink}
              target="_blank"
              rel="noreferrer"
              className="questTile_badge"
            >
              <p>{BadgeText[questType]}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="questTile_badge__icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
          ) : (
            <a
              className="questTile_link"
              href={questLink}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="questTile_link__icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
}