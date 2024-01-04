export const getUsers = async (page) => {
    try {
        const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('error', error);
    }
};

export const getPosition = async () => {
    try {
        const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('error', error);
    }
};

export const getToken = async () => {
    try {
        const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token`);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('error', error);
    }
};

export const registerUser = async (token, formData) => {
    try {
        const resp = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, {
            method: 'POST',
            headers: {
                'Token': token
            },
            body: formData
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error('error', error);
    }
};