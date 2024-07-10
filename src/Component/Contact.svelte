<!-- About.svelte (and other route components) -->
<script>
    let isLoggedIn = false;
    // @ts-ignore
    let isMenuOpen = false;
  
  </script>
  
  <main class="bg-gray-100 min-h-screen">
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div class="flex items-center space-x-2 lg:space-x-10 w-full lg:w-auto">
        <div class="text-gray-400 font-bold text-xl ml-4 lg:ml-10"> > $ cd /home/</div>
        <!-- Blue Box with Blinking Effect -->
        <div class="relative">
          <div class="bg-blue-600 w-3 h-4  absolute   animate-blink"></div>
        </div>
        <div class="hidden lg:flex flex-wrap justify-around lg:justify-start w-full lg:w-auto lg:pl-80 space-x-4 lg:space-x-32 items-center">
          <a href="about" class="relative text-[#808080] font-semibold hover:text-gray-300">
            About
            <span class="absolute left-0 right-0 top-full h-0.5 bg-[#808080] hover:bg-gray-300"></span>
          </a>
          <a href="blog" class="relative text-[#808080] font-semibold hover:text-gray-300">
            Books
            <span class="absolute left-0 right-0 top-full h-0.5 bg-[#808080] hover:bg-gray-300"></span>
          </a>
          <a href="contact" class="relative text-[#808080] font-semibold hover:text-gray-300">
            Contact
            <span class="absolute left-0 right-0 top-full h-0.5 bg-[#808080] hover:bg-gray-300"></span>
          </a>
        </div>
      </div>
      <div class="flex items-center space-x-4 lg:space-x-8 mt-4 lg:mt-0 mr-4 lg:mr-12">
        <input type="text" placeholder="Search..." class="px-4 py-2 rounded bg-gray-600 focus:outline-none w-full lg:w-auto" />
        {#if isLoggedIn}
          <button class="px-4 py-2 bg-purple-500 rounded hover:bg-blue-600">Log out</button>
        {:else}
          <button class="px-6 py-2  border-2 border-inside border-blue-700 rounded hover:bg-blue-600 ">Log in</button>
          <button class="px-6 py-2 bg-blue-700  rounded hover:bg-blue-600">Sign up</button>
        {/if}
        <!-- Hamburger Menu Icon -->
        <button class="lg:hidden" on:click={() => isMenuOpen = !isMenuOpen}>
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="lg:hidden fixed top-0 left-0 w-full bg-gray-800 text-white p-4 space-y-4">
        <a href="#" class="block hover:text-gray-300">About</a>
        <a href="#" class="block hover:text-gray-300">Books</a>
        <a href="#" class="block hover:text-gray-300">Contact</a>
      </div>
    {/if}
  <h1>This is Contact page page</h1>
    <!-- Statistics Section -->
    <section class="flex flex-col sm:flex-row justify-end items-center p-8 sm:p-16 space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-40">
      <div class="text-center p-8 bg-white rounded shadow-lg w-full sm:w-auto">
        <div class="text-4xl font-bold text-orange-600">10K+</div>
        <div class="text-lg text-gray-600">Books</div>
      </div>
      <div class="text-center p-8 bg-white rounded shadow-lg w-full sm:w-auto">
        <div class="text-4xl font-bold text-orange-600">1K+</div>
        <div class="text-lg text-gray-600">Groups</div>
      </div>
      <div class="text-center p-8 bg-white rounded shadow-lg w-full sm:w-auto">
        <div class="text-4xl font-bold text-orange-600">0</div>
        <div class="text-lg text-gray-600">Saved</div>
      </div>
    </section>
  </main>
  
  
  <style global lang="postcss">
    @keyframes blink {
     0%, 49% {
       opacity: 0;
     }
     50%, 100% {
       opacity: 1;
     }
   }
  
   .animate-blink {
     animation: blink 1s infinite;
   }
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
  </style>
  