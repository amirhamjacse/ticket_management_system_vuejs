<template>
  <footer class="border-t border-slate-200 bg-black text-slate-200">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Footer Top -->
      <div class="grid gap-8 py-12 md:grid-cols-4">
        <!-- Logo & About -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
              <i class="bi bi-bus-front"></i>
            </div>
            <h3 class="text-lg font-bold text-white">TicketMaster</h3>
          </div>
          <p class="text-sm text-slate-400">Your trusted partner for booking transport tickets online with a smooth, secure, and seamless travel experience.</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-400">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-sm text-slate-400 transition hover:text-emerald-400">Home</router-link></li>
            <li><router-link to="/book-tickets" class="text-sm text-slate-400 transition hover:text-emerald-400">Book Tickets</router-link></li>
            <li><router-link to="/about" class="text-sm text-slate-400 transition hover:text-emerald-400">About Us</router-link></li>
            <li><router-link to="/contact" class="text-sm text-slate-400 transition hover:text-emerald-400">Contact</router-link></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-400">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm text-slate-400 transition hover:text-emerald-400">Help Center</a></li>
            <li><a href="#" class="text-sm text-slate-400 transition hover:text-emerald-400">Cancellation Policy</a></li>
            <li><a href="#" class="text-sm text-slate-400 transition hover:text-emerald-400">Privacy Policy</a></li>
            <li><a href="#" class="text-sm text-slate-400 transition hover:text-emerald-400">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Follow Us -->
        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-400">Follow Us</h4>
          <div class="flex gap-3">
            <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
              <i class="bi bi-facebook text-sm"></i>
            </a>
            <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
              <i class="bi bi-twitter-x text-sm"></i>
            </a>
            <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
              <i class="bi bi-instagram text-sm"></i>
            </a>
            <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
              <i class="bi bi-linkedin text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-slate-800 py-6 text-center">
        <p class="text-sm text-slate-500">&copy; 2024 TicketMaster. All rights reserved. Made with <span class="text-emerald-500">♥</span> for travelers.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
