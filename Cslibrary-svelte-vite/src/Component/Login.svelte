<script>
    import { CustomFetch } from '../Fetch.js';

    let username = '';
    let password = '';

    // Any necessary Svelte logic can be added here
    const handleSubmit = async () => {
        try{
            const response = await CustomFetch('/auth/login',{
            method: 'POST',
            body: JSON.stringify({
            username,
            password
            }),
        })

        console.log('sign in successfull',response);

        username = '',
        password = ''

        } catch (err) {
        console.log('error signing in user', err)
        }
    }
</script>

<style>
    .right-side-background {
        background-image: url('/images/bg.png');
        background-size: cover;
        background-position: center;
    }
</style>

<div class="bg-gray-100 flex justify-center items-center min-h-screen">
    <div class="bg-white rounded-lg shadow-lg flex overflow-hidden w-3/4 max-w-4xl">
        <!-- Left Side -->
        <div class="w-1/2 p-8">
            <img src="/images/sowrd.png" alt="CSLibrary Logo" class="mb-8 mx-auto">
            <form on:submit|preventDefault={handleSubmit}>
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type="username" id="username" bind:value={username} placeholder="Enter your username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" bind:value={password} placeholder="Enter your password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Log in
                    </button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs mt-8">
                Don't have an account? <a href="/signup" class="text-blue-500 hover:text-blue-800">Sign up</a>
            </p>
            <div class="flex justify-center mt-4 space-x-4">
                <a href="www.telegram.com" class="text-blue-500 hover:text-blue-800">Join us on Telegram</a>
                <a href="www.twitter.com" class="text-black hover:text-gray-800">Follow us on Twitter</a>
                <a href="www.email.com" class="text-red-500 hover:text-red-800">Contact us via Email</a>
            </div>
        </div>
        <!-- Right Side -->
        <div class="w-1/2 relative right-side-background">
            <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <img src="/images/girl.png" alt="Anime Girl" class="w-2/3 h-auto">
            </div>
        </div>
    </div>
</div>
