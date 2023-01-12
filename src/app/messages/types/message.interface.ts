import { Timestamp } from "@angular/fire/firestore";

export interface MessageInterface {
    id?: string;
    name: string;
    message: string;
    date: Timestamp;
}