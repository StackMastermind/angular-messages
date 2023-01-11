import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectFeature = (state: AppStateInterface) => state.messages;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) =>  state?.isLoading
);
export const messagesSelector = createSelector(
    selectFeature,
    (state) =>  state?.messages 
);
export const errorSelector = createSelector(
    selectFeature,
    (state) => state?.error
);
export const isSuccessSelector = createSelector(
    selectFeature,
    (state) =>  state?.isSuccess
);