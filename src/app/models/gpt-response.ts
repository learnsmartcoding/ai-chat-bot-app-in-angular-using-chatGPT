export interface ResponseModel  {
    id:string;
    object: string;
    created:number;
    model:string;
    choices:choice[];
    modelUsage:usage;
}

export interface choice {
    text:string;
    index:number;
    logprobs:any;
    finish_reason:string;
}

export interface usage {
    prompt_tokens:number;
    completion_tokens: number;
    total_tokens:number;
}

export interface ChatWithBot {
    person: string;
    response: string;
    cssClass:string;
}