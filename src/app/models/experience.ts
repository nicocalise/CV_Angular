export interface WorkExperience{
    experience?:Experience[];
}

export interface Experience{
    dateBetween?:string;
    company?:string;
    role?:string;
    tecno?:Tecnologies[];
}

export interface Tecnologies{
    name?:string;
}