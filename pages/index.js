export default function Home() {
  return (
    <section class="grid h-screen place-items-center">
      <div>
        <h2 class="text-center text-lg mb-4">Welcome To Login</h2>
        <form id="add-book">
          <div class="mx-auto max-w-lg ">
            <div class="py-1">
              <span class="px-1 text-sm text-gray-600">username</span>
              <input id="username" placeholder="Enter your username" name="username" type="text"
                class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
            </div>

            <div class="py-1">
              <span class="px-1 text-sm text-gray-600">Password</span>
              <input id="password" placeholder="Enter your password" name="password" type="text"
                class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
            </div>


            <button id="create-book" type="submit"
              class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
