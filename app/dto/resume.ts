export interface Resume {
    name: string;
    title: string;
    contact: Contact;
    experience: Array<Institution>;
    qualifications: Array<Qualification>;
    education: Institution;
}

export interface Contact {
    email: string;
    location: string;
    phone: string;
    websites: Websites;
}

export interface Websites {
    personal: string;
    linkedIn: string;
    gitHub: string;
}

export interface Institution {
    name: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    summary: string;
    notes: Notes;
}

export interface Qualification {
    id: string;
    title: string;
    children: Skills;
}

export interface CategoricalValue {
    category: string;
    values: Array<string>;
}

export interface RankedCategoricalValue extends CategoricalValue {
    rank: Rank;
}

export enum Rank {
    High = 'high',
    Medium = 'medium',
    Low = 'low',
}

export type Notes = Array<string>;

export type Skill = string | CategoricalValue | RankedCategoricalValue;

export type Skills = Array<Skill>;
