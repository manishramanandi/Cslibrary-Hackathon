<script>
    import { CustomFetch } from '../Fetch.js';
    import { Link } from "svelte-navigator";

    let bookName = '';
    let author = '';
    let image = null; 
    let file = null;
    let title = '';
    let year = '';
    
        // Function to handle image file input
    const handleImageChange = (event) => {
        image = event.target.files[0]; 
    };

    // Function to handle general file input
    const handleFileChange = (event) => {
        file = event.target.files[0];
    };

    // Any necessary Svelte logic can be added here
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('bookName', bookName);
        formData.append('author', author);
        formData.append('image', image);
        formData.append('file', file);
        formData.append('title', title);
        formData.append('year', year);

        try{
            const response = await CustomFetch('/book',{
            method: 'POST',
            body: formData
        })
        
        if (response.status === 200) {
                console.log('Sign in successful', response);

                // Reset form fields
                bookName = '';
                author = '';
                image = null;
                file = null;
                title = '';
                year = '';
                
                // successMessage = response.message;
                
                // Navigate to the "/home" route
                // window.location.href = '/home';
        }

        } catch (err) {
        console.log('error signing in user', err)
        // errorMessage = 'Incorrect Credentials please try again';
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
    <div class="bg-white rounded-lg shadow-lg flex overflow-hidden w-[70%] max-w-4xl">
        <!-- Left Side -->
        <div class="w-[85%] mx-auto my-10">
        <h4 class="block text-blue-400 text-center text-[20px] font-bold mb-2 capitalize"> Add a new book</h4>
            <form on:submit|preventDefault={handleSubmit}>
                <div class="mb-4">
                    <label for="bookName" class="block text-gray-700 text-sm font-bold mb-2 capitalize">bookName</label>
                    <input type="text" id="bookName" bind:value={bookName} placeholder="Enter Book Name" class="shadow appearance-none border rounded w-[90%] mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="author" class="block text-gray-700 text-sm font-bold mb-2 capitalize">author</label>
                    <input type="text" id="author" bind:value={author} placeholder="Enter Author Name" class="shadow appearance-none border rounded w-[90%] mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="title" class="block text-gray-700 text-sm font-bold mb-2 capitalize">title</label>
                    <input type="text" id="title" bind:value={title} placeholder="Enter Title Name" class="shadow appearance-none border rounded w-[90%] mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="year" class="block text-gray-700 text-sm font-bold mb-2 capitalize">year</label>
                    <input type="text" id="year" bind:value={year} placeholder="Enter year of Publish" class="shadow appearance-none border rounded w-[90%] mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="image" class="block text-gray-700 text-sm font-bold mb-2 capitalize">image</label>
                    <input type="file" id="image" accept="image/*" on:change={handleImageChange} class="shadow appearance-none border rounded w-[90%] mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label for="file" class="block text-gray-700 text-sm font-bold mb-2 capitalize">file</label>
                    <input type="file" id="file" accept=".pdf,.doc,.docx" on:change={handleFileChange} class="shadow appearance-none border rounded w-[90%] mx-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 w-[30%] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
