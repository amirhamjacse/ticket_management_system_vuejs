<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/30">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-16 md:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-12 md:grid-cols-2 md:items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
              <i class="bi bi-rocket-takeoff"></i>
              <span>Your travel companion</span>
            </div>
            <h1 class="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Book Your Tickets Today
            </h1>
            <p class="text-lg text-white/90">Easy and quick ticket booking for all your travel needs with instant confirmation and 24/7 support</p>
            <router-link to="/book-tickets" class="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 shadow-soft transition hover:shadow-lg hover:scale-105">
              <i class="bi bi-ticket"></i>
              Book Now
            </router-link>
          </div>
          
          <div class="relative">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent blur-3xl"></div>
            <div class="relative rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
              <div class="space-y-4">
                <div class="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3">
                  <span class="text-white/80">Featured Route</span>
                  <span class="rounded-full bg-emerald-400/30 px-3 py-1 text-xs font-semibold text-white">Popular</span>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div class="text-left">
                      <p class="text-2xl font-bold text-white">Dhaka</p>
                      <p class="text-sm text-white/70">01:00 PM</p>
                    </div>
                    <i class="bi bi-arrow-right text-2xl text-white"></i>
                    <div class="text-right">
                      <p class="text-2xl font-bold text-white">Chittagong</p>
                      <p class="text-sm text-white/70">06:00 PM</p>
                    </div>
                  </div>
                </div>
                <div class="rounded-lg bg-white/15 p-4">
                  <p class="text-sm text-white/70">Starting from</p>
                  <p class="text-3xl font-bold text-white">৳550</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="px-4 py-16 md:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-slate-900 md:text-4xl">Why Choose Us</h2>
          <p class="mt-2 text-lg text-slate-600">Experience hassle-free booking with premium features</p>
        </div>
        
        <div class="grid gap-6 md:grid-cols-3">
          <div class="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-8 transition hover:shadow-lg hover:border-emerald-300">
            <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 p-3 text-emerald-600">
              <i class="bi bi-briefcase-fill text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Reliable Transport</h3>
            <p class="mt-3 text-slate-600">Choose from various transport options including buses, trains, and flights with verified operators.</p>
            <div class="mt-4 h-1 w-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full group-hover:w-full transition-all"></div>
          </div>

          <div class="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-8 transition hover:shadow-lg hover:border-emerald-300">
            <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 p-3 text-emerald-600">
              <i class="bi bi-calendar-check-fill text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Easy Booking</h3>
            <p class="mt-3 text-slate-600">Book tickets in a few simple steps, from choosing your destination to payment in seconds.</p>
            <div class="mt-4 h-1 w-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full group-hover:w-full transition-all"></div>
          </div>

          <div class="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-8 transition hover:shadow-lg hover:border-emerald-300">
            <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 p-3 text-emerald-600">
              <i class="bi bi-check-circle-fill text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Instant Confirmation</h3>
            <p class="mt-3 text-slate-600">Get instant booking confirmation with all the details you need for your journey.</p>
            <div class="mt-4 h-1 w-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full group-hover:w-full transition-all"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
