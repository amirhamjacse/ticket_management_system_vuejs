<template>
  <header class="sticky top-0 z-50 border-b border-emerald-100/50 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-lg">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 transition-transform hover:scale-105">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-soft">
            <i class="bi bi-bus-front text-lg font-bold"></i>
          </div>
          <span class="text-xl font-bold text-white hidden sm:block">TicketMaster</span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <router-link to="/" class="px-4 py-2 text-sm font-medium text-white/90 transition hover:text-white hover:bg-white/10 rounded-lg">
            Home
          </router-link>
          <router-link to="/book-tickets" class="px-4 py-2 text-sm font-medium text-white/90 transition hover:text-white hover:bg-white/10 rounded-lg">
            Book Tickets
          </router-link>
          <router-link to="/about" class="px-4 py-2 text-sm font-medium text-white/90 transition hover:text-white hover:bg-white/10 rounded-lg">
            About
          </router-link>
          <router-link to="/contact" class="px-4 py-2 text-sm font-medium text-white/90 transition hover:text-white hover:bg-white/10 rounded-lg">
            Contact
          </router-link>
        </nav>

        <!-- User Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
            <i class="bi bi-person-circle text-lg"></i>
            <span class="hidden sm:inline">User</span>
          </button>
          <div class="absolute right-0 mt-2 hidden w-48 rounded-lg border border-slate-200 bg-white shadow-lg group-hover:block">
            <router-link to="/profile" class="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50">Profile</router-link>
            <router-link to="/settings" class="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50">Settings</router-link>
            <div class="border-t border-slate-200"></div>
            <router-link to="/logout" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
  