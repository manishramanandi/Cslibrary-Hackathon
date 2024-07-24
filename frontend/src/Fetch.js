
const BaseUrl = '';

export const CustomFetch = async (endpoint, options = {}) => {
    // api headers
    const headers = {
        'Content-Type': 'application/json',
    }

    const config = {
        ...options,
        headers: {
            ...headers,
            ...options.headers
        }
    };

    try {
        const response = await fetch(`http://localhost:5000${endpoint}`,config);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw new Error('Network error');
    } 
    
}
