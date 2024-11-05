// localStorageService.js

export const ID = {
    unique: () => crypto.randomUUID()
};

class StorageClient {
    constructor() {
        this.endpoint = 'localStorage';
        this.project = null;
    }

    setEndpoint(endpoint) {
        this.endpoint = endpoint;
        return this;
    }

    setProject(project) {
        this.project = project;
        return this;
    }
}

class StorageAccount {
    constructor(client) {
        this.client = client;
        this.USERS_KEY = 'users';
        this.CURRENT_USER_KEY = 'currentUser';
    }

    async create(userId, email, password) {
        try {
            const users = this.#getUsers();
            if (users.find(u => u.email === email)) {
                throw new Error('User already exists');
            }

            const user = {
                $id: userId || ID.unique(),
                email,
                password,
                createdAt: new Date().toISOString()
            };

            users.push(user);
            localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
            return user;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async createEmailSession(email, password) {
        try {
            const users = this.#getUsers();
            const user = users.find(u => u.email === email && u.password === password);
            
            if (!user) {
                throw new Error('Invalid credentials');
            }

            localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
            return user;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async get() {
        try {
            const user = localStorage.getItem(this.CURRENT_USER_KEY);
            if (!user) {
                throw new Error('User not found');
            }
            return JSON.parse(user);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async deleteSession(sessionId) {
        try {
            localStorage.removeItem(this.CURRENT_USER_KEY);
            return { status: 'success' };
        } catch (error) {
            return Promise.reject(error);
        }
    }

    #getUsers() {
        const users = localStorage.getItem(this.USERS_KEY);
        return users ? JSON.parse(users) : [];
    }
}

export const client = new StorageClient();
export const account = new StorageAccount(client);
export const project_id = "local-storage-project";
export const database_id = "local-storage-db";
export const collection_id = "local-storage-collection";