<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Success Animation Container -->
    <div class="flex items-center justify-center px-4 py-20">
      <div class="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg md:p-12">
        <!-- Success Icon -->
        <div class="mb-6 flex justify-center">
          <div class="relative h-32 w-32">
            <div class="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-emerald-200 to-green-200"></div>
            <div class="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-green-600">
              <i class="bi bi-check-lg text-5xl text-white"></i>
            </div>
          </div>
        </div>

        <!-- Congratulations Message -->
        <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">Booking Confirmed!</h1>
        <p class="mt-2 text-xl text-emerald-600 font-semibold">Your ticket has been booked successfully</p>
        
        <!-- Ticket Number -->
        <div class="my-8 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
          <p class="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-2">Ticket Number</p>
          <p class="text-3xl font-bold text-emerald-600 font-mono">{{ ticketNumber }}</p>
          <p class="mt-2 text-sm text-emerald-600">Save this ticket number for reference</p>
        </div>

        <!-- Booking Summary -->
        <div class="my-8 space-y-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 p-6 text-left">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p class="text-xs font-semibold text-slate-600 uppercase tracking-wide">From</p>
              <p class="text-lg font-bold text-slate-900">Dhaka</p>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-600 uppercase tracking-wide">To</p>
              <p class="text-lg font-bold text-slate-900">Chittagong</p>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-600 uppercase tracking-wide">Date</p>
              <p class="text-lg font-bold text-slate-900">May 18, 2026</p>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-600 uppercase tracking-wide">Seat</p>
              <p class="text-lg font-bold text-slate-900">12A</p>
            </div>
          </div>
        </div>

        <!-- What's Next -->
        <div class="mb-8 rounded-xl border border-slate-200 bg-white p-6 text-left">
          <h3 class="text-xl font-bold text-slate-900 mb-4">
            <i class="bi bi-list-check me-2 text-emerald-600"></i>What's Next?
          </h3>
          <ol class="space-y-3">
            <li class="flex gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shrink-0">1</span>
              <div>
                <p class="font-semibold text-slate-900">Check your email</p>
                <p class="text-sm text-slate-600">E-ticket has been sent to your registered email address</p>
              </div>
            </li>
            <li class="flex gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shrink-0">2</span>
              <div>
                <p class="font-semibold text-slate-900">Arrive early</p>
                <p class="text-sm text-slate-600">Please arrive 15 minutes before the scheduled departure time</p>
              </div>
            </li>
            <li class="flex gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shrink-0">3</span>
              <div>
                <p class="font-semibold text-slate-900">Keep ticket ready</p>
                <p class="text-sm text-slate-600">Have your e-ticket and valid ID proof ready for verification</p>
              </div>
            </li>
            <li class="flex gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shrink-0">4</span>
              <div>
                <p class="font-semibold text-slate-900">Enjoy your journey</p>
                <p class="text-sm text-slate-600">Have a safe and comfortable trip with us!</p>
              </div>
            </li>
          </ol>
        </div>

        <!-- Important Info -->
        <div class="mb-8 grid gap-4 md:grid-cols-2">
          <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 text-left">
            <p class="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
              <i class="bi bi-info-circle me-2"></i>Ticket Details
            </p>
            <ul class="space-y-1 text-sm text-blue-900">
              <li>✓ E-ticket sent to email</li>
              <li>✓ SMS confirmation sent</li>
              <li>✓ Ticket valid for 1 journey only</li>
              <li>✓ Non-transferable ticket</li>
            </ul>
          </div>
          <div class="rounded-xl border border-green-200 bg-green-50 p-4 text-left">
            <p class="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">
              <i class="bi bi-telephone me-2"></i>Need Help?
            </p>
            <p class="text-sm text-green-900 mb-2">Contact our support team:</p>
            <p class="font-semibold text-green-900">+880 1800-111-111</p>
            <p class="text-xs text-green-800">Available 24/7</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col gap-3 md:flex-row md:justify-center">
          <router-link
            to="/dashboard"
            class="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
          >
            <i class="bi bi-list-check"></i>View My Bookings
          </router-link>
          <button
            @click="downloadTicket"
            class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            <i class="bi bi-download"></i>Download Ticket
          </button>
          <router-link
            to="/"
            class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            <i class="bi bi-house"></i>Go to Home
          </router-link>
        </div>

        <!-- Share -->
        <div class="mt-8 border-t border-slate-200 pt-6">
          <p class="mb-4 text-sm text-slate-600">Share your booking with others</p>
          <div class="flex justify-center gap-3">
            <button class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              <i class="bi bi-facebook"></i>
            </button>
            <button class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-white hover:bg-sky-500 transition">
              <i class="bi bi-twitter"></i>
            </button>
            <button class="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition">
              <i class="bi bi-whatsapp"></i>
            </button>
            <button class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-800 transition">
              <i class="bi bi-share"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingConfirmation',
  data() {
    return {
      ticketNumber: 'TM-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 100000)).padStart(6, '0'),
    };
  },
  methods: {
    downloadTicket() {
      alert(`Downloading ticket ${this.ticketNumber}...`);
    },
  },
};
</script>
