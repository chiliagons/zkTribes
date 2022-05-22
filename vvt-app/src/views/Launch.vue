<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
</script>

<template>
  <div >
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Launch Your Tribe (Goerli)
        <br />
      </h2>
        <span class="text-indigo-600">
          <p class="mt-2 text-lg text-gray-500">
            In order to Launch your tribe, you need to have in your wallet UMA
            long & short SUCCESS tokens sold by your project. (See example <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://umaverse.vercel.app/ethereum/0xE38f290eAC1f83A960c461100b0c7a231B9Cae16" target="blank">here</a>)
          </p>
          <p class="mt-2 text-lg text-gray-500">
            SUCCESS Tokens on testnet are only available on Kovan, so see that you have moved them to Goerli.
            You can utilize xapp-kpi/scripts to do this. 
            Please key in the details of your project and click CREATE Tribe. 
          </p>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">What's the address of the Long Success Pair?</span>
                <input
                  type="text"
                  class="form-input mt-1 block w-full"
                  placeholder="0xAbbb0DbaE8DA6E9857dA090625bb99Fb87AA64ca"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What's the address of the Short Success Pair?</span>
                <input
                  type="email"
                  class="form-input mt-1 block w-full"
                  placeholder="0xE116a8b0Ce931D4B5f41473835A10eD5981ee792"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">When does the option expire?</span>
                <input
                  type="date"
                  class="form-input mt-1 block w-full"
                  placeholder="0xE116a8b0Ce931D4B5f41473835A10eD5981ee792"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">How many tribesmen do you intend to create?</span>
                <input
                  type="number"
                  class="form-input mt-1 block w-full"
                  placeholder="1000"
                />
              </label>
                <label class="block">
                <span class="text-gray-700">Amount of SUCCESS tokens to pledge?</span>
                <input
                  type="number"
                  class="form-input mt-1 block w-full"
                  placeholder="100"
                />
              </label>
            </div>
          </div>
        </span>
  

      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
            >Join Tribes</router-link
          >
          <!-- Functionality not available via UI, use success-genesis/scripts/createTribe.ts -->
          <button class="inline-flex 
items-center justify-center rounded-md border border-transparent ml-5 bg-indigo-600 px-5 py-3 text-base font-medium leading-6 
text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none" v-on:click="connectMetamask">
Create Tribes
</button>
        </div>
      </div>
    </div>
  </div>
</template>
