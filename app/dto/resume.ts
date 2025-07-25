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
    notes: Notes;
}

export interface Qualification {
    id: string;
    title: string;
    children: Notes;
}

export interface CategoricalValue {
    category: string;
    values: Array<string>;
}

export type Notes = Array<string | CategoricalValue>;
