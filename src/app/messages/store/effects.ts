import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { MessagesService } from "../services/messages.service";
import * as MessageActions from "./actions";
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class MessagesEffects {

    constructor(private actions$: Actions, private messagesService: MessagesService) {

    }

    getMessages$ = createEffect(() => 
        this.actions$.pipe(
            ofType(MessageActions.getMessages),
            mergeMap(() => {
                return this.messagesService.getMessages().pipe(
                    map((messages) => MessageActions.getMessagesSuccess({ messages })),
                    catchError((error) =>
                      of(MessageActions.getMessagesFailure({ error: error.message }))
                    )
                  );
            })
        )
    );

    // addMessage$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(MessageActions.addMessage),
    //         mergeMap(() => {
    //             return this.messagesService.addMessage().pipe(
    //                 map((messages) => MessageActions({ messages })),
    //                 catchError((error) =>
    //                 of(MessageActions.getMessagesFailure({ error: error.message }))
    //                 )
    //             );
    //         })
    //     )
    // ); 
}