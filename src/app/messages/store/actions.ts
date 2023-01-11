import { createAction, props } from "@ngrx/store";
import { MessageInterface } from "../types/message.interface";

export const getMessages = createAction('[Messages] Get Messages');
export const getMessagesSuccess = createAction(
    '[Messages] Get Messages Success',
    props<{ messages: MessageInterface[]}>()
);
export const getMessagesFailure = createAction(
    '[Messages] Get Messages Failure',
    props<{ error: string}>()
);