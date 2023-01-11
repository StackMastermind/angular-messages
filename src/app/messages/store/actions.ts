import { createAction, props } from "@ngrx/store";
import { MessageInterface } from "../types/message.interface";

export const getMessages = createAction(
    '[Messages] Get Messages'
);
export const getMessagesSuccess = createAction(
    '[Messages] Get Messages Success',
    props<{ messages: MessageInterface[]}>()
);
export const getMessagesFailure = createAction(
    '[Messages] Get Messages Failure',
    props<{ error: string}>()
);

export const addMessage = createAction(
    '[Messages] Add Message',
    props<{addMessage: MessageInterface}>()
);
export const addMessageSuccess = createAction(
    '[Messages] Add Message Success'
);
export const addMessageFailure = createAction(
    '[Messages] Add Message Failure',
    props<{ error: string}>()
);
