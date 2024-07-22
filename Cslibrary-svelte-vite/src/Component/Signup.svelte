

<script>

  import { CustomFetch } from '../Fetch.js';

    let username = "";
    let password = "";
    let confirmpassword = "";
    let email = "";
   
  const handleSubmit = async () => {
    try{
      if (password !== confirmpassword) {
        console.log('password does not match');
      }
      const response = await CustomFetch('/auth/register',{
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
      })

      console.log('registering successfull',response);

      username = '',
      email = '',
      password = ''

    } catch (err) {
      console.log('error registering user', err)
    }
  }

</script>


<style>
    .custom-shadow {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
  </style>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg custom-shadow w-96">
      <div class="flex justify-center mb-6">
        <img src="images/sword.jpg" alt="Logo" class="h-16" />
      </div>
  
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input
            bind:value={username}
            id="username"
            type="text"
            placeholder="Username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input
            bind:value={email}
            id="email"
            type="email"
            placeholder="Email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            bind:value={password}
            id="password"
            type="password"
            placeholder="Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            bind:value={confirmpassword}
            id="confirmpassword"
            type="confirmpassword"
            placeholder="Re enter Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div class="flex items-center justify-between">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            Already have an account? Log in
          </a>
        </div>
      </form>
  
      <div class="flex justify-center mt-6 space-x-4">
      <a href="www.telegram.com" class="text-blue-500 hover:text-blue-700">Join us on <img src="." alt=""></a>
        <a href="www.twiteer.com" class="text-blue-500 hover:text-blue-700">Join us on X</a>
        <a href="www.gmail.com" class="text-blue-500 hover:text-blue-700">Contact us via Gmail</a>
      </div>
    </div>
  
    <div class="absolute top-0 right-0 w-64">
      <!-- <img src="images/sowrd.png" alt="Anime Image" class="rounded-lg shadow-lg" /> -->
    </div>
  </div>