<script>
    // Any necessary Svelte logic can be added here
</script>

<style>
    /* Add any custom styles here if necessary */
</style>

<div class="bg-white w-full flex flex-col items-center pt-16 pb-8">
    <div class="max-w-6xl w-full px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- Left Side -->
            <div class="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                <h1 class="text-4xl font-bold text-blue-600">Cs-library</h1>
                <p class="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class="mt-8 flex flex-col space-y-2 text-blue-500">
                    <a href="#" class="hover:underline">About</a>
                    <a href="#" class="hover:underline">Updates</a>
                    <a href="#" class="hover:underline">Contact</a>
                    <a href="#" class="hover:underline">Developer</a>
                    <a href="#" class="hover:underline">Go to home</a>
                </div>
            </div>

            <!-- Right Side -->
            <div class="md:w-2/3 flex flex-col items-center">
                <h2 class="text-2xl font-bold text-gray-800 mb-8">Get in touch with us for more information</h2>
                <img src="/images/goku_vegeta.png" alt="Goku and Vegeta" class="w-2/3 mb-8">
                <div class="flex justify-center space-x-8">
                    <a href="#" class="flex flex-col items-center space-y-2">
                        <img src="/images/github.png" alt="GitHub" class="w-10 h-10">
                        <span class="text-gray-700">GitHub</span>
                    </a>
                    <a href="#" class="flex flex-col items-center space-y-2">
                        <img src="/images/gmail.png" alt="Gmail" class="w-10 h-10">
                        <span class="text-gray-700">Gmail</span>
                    </a>
                    <a href="#" class="flex flex-col items-center space-y-2">
                        <img src="/images/telegram.png" alt="Telegram" class="w-10 h-10">
                        <span class="text-gray-700">Telegram</span>
                    </a>
                    <a href="#" class="flex flex-col items-center space-y-2">
                        <img src="/images/discord.png" alt="Discord" class="w-10 h-10">
                        <span class="text-gray-700">Discord</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-8 text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Get the app</h3>
        <div class="flex justify-center space-x-4">
            <a href="#">
                <img src="/images/google_play.png" alt="Google Play" class="w-32">
            </a>
            <a href="#">
                <img src="/images/app_store.png" alt="App Store" class="w-32">
            </a>
        </div>
    </div>

    <footer class="mt-8 text-center text-gray-500 text-sm w-full">
        &copy; 2024 Cs-library. All rights reserved.
    </footer>
</div>
