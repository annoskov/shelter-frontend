export interface Theme {
    name: string;
    properties: any;
}

export enum AppThemes {
    'Light' = 'light',
    'Dark' = 'dark',
}

export const LightTheme: Theme = {
    name: 'light',
    properties: {
        '--background-default': '#fff',
        '--text-normal': '#000',
    }
};

export const DarkTheme: Theme = {
    name: 'dark',
    properties: {
        '--background-default': '#282c35',
        '--text-normal': '#fff',
    }
};
