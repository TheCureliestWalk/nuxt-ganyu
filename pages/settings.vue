<template>
  <!-- Header -->
  <div class="bg-white p-6 shadow rounded mx-auto max-w-xl sm:mt-8 md:mt-12">
    <h2 class="font-bold text-2xl">Settings</h2>
    <span class="text-sm tracking-wider">User configuration</span>

    <div class="mt-8 space-y-2">
      <h3 class="font-bold tracking-wide">Bank Account</h3>
      <div>
        <span class="text-sm">Account Number</span>
        <input
          type="text"
          class="p-2 bg-gray-100 w-full rounded outline-none"
        />
      </div>
    </div>

    <div class="mt-8 space-y-2">
      <h3 class="font-bold tracking-wide">Password</h3>
      <div>
        <span class="text-sm">Old Password</span>
        <input
          type="text"
          class="p-2 bg-gray-100 w-full rounded outline-none"
        />
        <span class="text-sm">New Password</span>
        <input
          type="text"
          class="p-2 bg-gray-100 w-full rounded outline-none"
        />
        <span class="text-sm">Comfirm New Password</span>
        <input
          type="text"
          class="p-2 bg-gray-100 w-full rounded outline-none"
        />
      </div>
    </div>

    <div class="mt-8 space-y-2">
      <h3 class="font-bold tracking-wide">
        Deactivate Account / Delete Account
      </h3>
      <div>
        <span class="text-sm">Account Number</span>
        <input
          type="text"
          class="p-2 bg-gray-100 w-full rounded outline-none"
        />
      </div>
    </div>
  </div>
</template>
