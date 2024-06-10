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

export interface QuestContent {
    title: string | null;
    description: string | null;
    link: string | undefined;
    badge: boolean;
  }