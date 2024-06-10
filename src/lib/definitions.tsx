export type Quest = {
    id: string,
    user_id: string,
    type: string,
    status: string,
    experience_points: number,
    due_date: string,
    company: Company | null,
    contact: Contact | Record<string,never>,
    job: Job | Record<string,never>,
    created_at: string
}

export const enum QuestType {
    "install_extension",
    "submit_application",
    "resolve-comment",
    "save-company",
    "save_first_company",
    "add_contact",
    "send_linkedin_message",
    "send_linkedin_connection",
    "send_first_email",
    "add_new_contact",
    "schedule_coffee_chat",
    "send_follow_up_email",
    "respond_to_email"
}

export type Company = {
    id: string,
    name: string,
    logo_url: string,
    linkedin_url: string
}

export type Contact = {
    id: string,
    first_name: string,
    last_name: string,
    profile_image: string,
    linkedin_url: string
}

export type Job = {
    id: string,
    title: string
}