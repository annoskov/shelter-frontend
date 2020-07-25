import {Action} from '@ngrx/store';
import {Theme} from '../../../themes/theme';

export enum UiActionTypes {
    ChangeTheme = '[Theme] changed',
}

export class ThemeChangeAction implements Action {
    readonly type = UiActionTypes.ChangeTheme;

    constructor(public payload: Theme) {
    }
}

export type UiActions = ThemeChangeAction;

