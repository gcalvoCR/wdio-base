export interface User {
    username: string;
    password: string;
}

export const adminUser: User = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
};

export const regularUser: User = {
    username: '',
    password: ''
};
