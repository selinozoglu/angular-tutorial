export interface Task {
    id?: number; //id servera eklenene kadar id olmadığı için ?
    text: string; 
    day: string;
    reminder:boolean;
}