import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { MessagesService } from "../services/messages.service";
import * as MessageActions from "./actions";
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class MessagesEffects {

    constructor(private actions$: Actions, private messagesService: MessagesService) {

    }

    getMessages$ = createEffect(() => {
        this.actions$.pipe(
            ofType(MessageActions.getMessages),
            mergeMap(() => {
                
            })
        )
    })
}