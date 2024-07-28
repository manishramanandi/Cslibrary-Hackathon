
const BaseUrl = '';
const authToken = localStorage.getItem('access_token') || '';

export const CustomFetch = async (endpoint, options) => {
    console.log('check it token is present in the header', authToken);
    // api headers
    const { body } = options;
    let headers = options.headers || {};

    // Check if body is FormData
    if (body instanceof FormData) {
        // Let the browser set the Content-Type for FormData
        delete headers['Content-Type'];
    } else {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    // set authToken for authorization
    headers["Authorization"] = `Bearer ${authToken}`;

    const config = {
        ...options,
        headers,
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
