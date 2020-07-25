import {LightTheme, Theme} from '../../../themes/theme';
import {UiActions, UiActionTypes} from './ui.actions';

export interface UIState {
    theme: Theme;
}

export const initialUIState: UIState = {
    theme: LightTheme,
};

export const uiReducer = (
    state: UIState,
    action: UiActions
): UIState => {
    switch (action.type) {
        case UiActionTypes.ChangeTheme: {
            return {
                ...state,
                theme: action.payload,
            };
        }
    }
};
