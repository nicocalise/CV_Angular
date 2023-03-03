export interface Education{
    university?:University[];
}

export interface University{
    name?:string,
    title?:string,
    period?:string,
    finished?:boolean
}