<!-- About.svelte (and other route components) -->
<script>
    import { Link } from "svelte-navigator";
    import Book from "./Book.svelte";
    import Footer from "./Footer.svelte";

    let isMenuOpen = false;

    const logOut = () => {
        localStorage.clear("access_token");
        window.location.href = "/";
    };

    // data sample
    const books = [
        {
            bookName: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://example.com/to-kill-a-mockingbird.jpg",
            title: "Novel",
            year: 1960,
        },
        {
            bookName: "1984",
            author: "George Orwell",
            image: "https://example.com/1984.jpg",
            title: "Novel",
            year: 1949,
        },
        {
            bookName: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            image: "https://example.com/the-great-gatsby.jpg",
            title: "Novel",
            year: 1925,
        },
        {
            bookName: "Pride and Prejudice",
            author: "Jane Austen",
            image: "https://example.com/pride-and-prejudice.jpg",
            title: "Novel",
            year: 1813,
        },
        {
            bookName: "The Catcher in the Rye",
            author: "J.D. Salinger",
            image: "https://example.com/the-catcher-in-the-rye.jpg",
            title: "Novel",
            year: 1951,
        },
    ];

    //map function to update data
</script>

<main class="bg-gray-100 min-h-screen">
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div class="flex items-center space-x-2 lg:space-x-10 w-full lg:w-auto">
            <div class="text-gray-400 font-bold text-xl ml-4 lg:ml-10">
                > $ cd /home/
            </div>
            <!-- Blue Box with Blinking Effect -->
            <div class="relative">
                <div class="bg-blue-600 w-3 h-4 absolute animate-blink"></div>
            </div>
            <div
                class="hidden lg:flex flex-wrap justify-around lg:justify-start w-full lg:w-auto lg:pl-80 space-x-4 lg:space-x-32 items-center"
            >
                <Link
                    to="/about"
                    class="relative text-[#808080] font-semibold hover:text-gray-300"
                >
                    About
                    <span
                        class="absolute left-0 right-0 top-full h-0.5 bg-[#808080] hover:bg-gray-300"
                    ></span>
                </Link>
                <Link
                    to="/books"
                    class="relative text-[#808080] font-semibold hover:text-gray-300"
                >
                    Books
                    <span
                        class="absolute left-0 right-0 top-full h-0.5 bg-[#808080] hover:bg-gray-300"
                    ></span>
                </Link>
                <Link
                    to="/contact"
                    class="relative text-[#808080] font-semibold hover:text-gray-300"
                >
                    Contact
                    <span
                        class="absolute left-0 right-0 top-full h-0.5 bg-[#808080] hover:bg-gray-300"
                    ></span>
                </Link>
            </div>
        </div>
        <div
            class="flex items-center space-x-4 lg:space-x-8 mt-4 lg:mt-0 mr-4 lg:mr-12"
        >
            <input
                type="text"
                placeholder="Search..."
                class="px-4 py-2 rounded bg-gray-600 focus:outline-none w-full lg:w-auto"
            />
            <Link
                to="/addbook"
                class="px-6 py-2 border-2 border-inside border-blue-700 rounded hover:bg-blue-600"
            >
                Add Book
            </Link>
            <button
                on:click={logOut}
                class="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
            >
                Logout
            </button>
            <!-- Hamburger Menu Icon -->
            <button
                class="lg:hidden"
                on:click={() => (isMenuOpen = !isMenuOpen)}
            >
                <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
        <div
            class="lg:hidden fixed top-0 left-0 w-full bg-gray-800 text-white p-4 space-y-4"
        >
            <Link to="#" class="block hover:text-gray-300">About</Link>
            <Link to="#" class="block hover:text-gray-300">Books</Link>
            <Link to="#" class="block hover:text-gray-300">Contact</Link>
        </div>
    {/if}

    <!-- Statistics Section -->
    <section
        class="flex flex-col sm:flex-row justify-end items-center p-8 sm:p-16 space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-40"
    >
        <div
            class="text-center p-8 bg-white rounded shadow-lg w-full sm:w-auto"
        >
            <div class="text-4xl font-bold text-orange-600">10K+</div>
            <div class="text-lg text-gray-600">Books</div>
        </div>
        <div
            class="text-center p-8 bg-white rounded shadow-lg w-full sm:w-auto"
        >
            <div class="text-4xl font-bold text-orange-600">1K+</div>
            <div class="text-lg text-gray-600">Groups</div>
        </div>
        <div
            class="text-center p-8 bg-white rounded shadow-lg w-full sm:w-auto"
        >
            <div class="text-4xl font-bold text-orange-600">0</div>
            <div class="text-lg text-gray-600">Saved</div>
        </div>
    </section>

    <script>
        import Book from "./Book.svelte"; // Ensure the correct path to your Book component
        export let books;
    </script>

    <!-- Main section with flex container -->
    <section class="flex flex-row w-[90%] mx-auto gap-4">
        <!-- News section -->
        <div class="w-[30%]">
            <h2 class="text-2xl font-bold mb-4">Latest CS News</h2>
            <div class="border border-gray-300 p-4 rounded-lg">
                <!-- Add your news items here -->
                <p>News item 1</p>
                <p>News item 2</p>
                <p>News item 3</p>
            </div>
        </div>

        <!-- Books section -->
        <div class="flex flex-row flex-wrap w-[70%]">
            {#each books as book, index (index)}
                <div key={index} class="w-[30%] p-2 animate-fadeIn">
                    <Book
                        bookName={book.bookName}
                        author={book.author}
                        image={book.image}
                        title={book.title}
                        year={book.year}
                    />
                </div>
            {/each}
        </div>
    </section>

    <style>
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
        }
    </style>
    <Footer />
</main>

<style global lang="postcss">
    @keyframes blink {
        0%,
        49% {
            opacity: 0;
        }
        50%,
        100% {
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
