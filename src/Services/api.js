
const API_URL = 'https://api-commerce-snowy.vercel.app/';

export const signup = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            let errorText = await response.text(); 
            throw new Error(errorText);
        }

        return response.json();
    } catch (error) {
        throw new Error('Error during signup: ' + error.message);
    }
};


export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }

    document.cookie = `access-token=${data.token}; path=/`;

    return data;
};

export const logout = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    return response.json();
};

export const getProtectedData = async () => {
    const response = await fetch(`${API_URL}/protected`, {
        method: 'GET',
        credentials: 'include',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};

export const createCheckoutSession = async (productId) => {
    try {
        const response = await fetch(`${API_URL}/api/payment/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating checkout session', error);
        throw error;
    }
};

export const createCheckoutSessionForCart = async (cart) => {
    try {
        const response = await fetch(`${API_URL}/api/payment/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating checkout session', error);
        throw error;
    }
};
