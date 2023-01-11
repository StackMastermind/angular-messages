import { MessageInterface } from "./message.interface";

export interface MessageStateInterface {
    isLoading: boolean;
    messages: MessageInterface[];
    error: string | null;
    isSuccess: boolean;
}