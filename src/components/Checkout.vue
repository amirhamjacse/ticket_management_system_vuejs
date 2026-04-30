<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">Complete Your Booking</h1>
        <p class="mt-2 text-slate-600">Enter your details and confirm your reservation</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <!-- Passenger Form -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Passenger Information</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Full Name -->
            <div>
              <label for="fullName" class="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                v-model="passengerInfo.fullName"
                placeholder="Enter your full name"
                required
                class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="passengerInfo.email"
                placeholder="Enter your email"
                required
                class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="passengerInfo.phone"
                placeholder="Enter your phone number"
                required
                class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <!-- Ticket Number (Read-only) -->
            <div>
              <label for="ticketNumber" class="mb-2 block text-sm font-semibold text-slate-700">Ticket Number</label>
              <div class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 font-mono text-sm">
                {{ ticketNumber }}
              </div>
              <p class="mt-2 text-xs text-slate-500">This ticket number will be sent to your email after confirmation</p>
            </div>

            <!-- Terms Checkbox -->
            <div class="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                v-model="agreeToTerms"
                class="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
              />
              <label for="terms" class="text-sm text-slate-600">
                I agree to the <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-700">terms and conditions</a> and <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-700">cancellation policy</a>
              </label>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-4">
              <button
                type="submit"
                :disabled="!agreeToTerms"
                class="flex-1 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:shadow-lg hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i class="bi bi-credit-card me-2"></i>Proceed to Payment
              </button>
              <button
                type="button"
                @click="goBack"
                class="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                <i class="bi bi-arrow-left me-2"></i>Back
              </button>
            </div>
          </form>
        </div>

        <!-- Sidebar Summary -->
        <div class="space-y-4">
          <!-- Ticket Summary -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Booking Summary</h3>
            
            <div class="space-y-3 border-b border-slate-200 pb-4">
              <div class="flex justify-between text-sm">
                <span class="text-slate-600">Route</span>
                <span class="font-semibold text-slate-900">Dhaka → Chittagong</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-600">Date</span>
                <span class="font-semibold text-slate-900">Apr 30, 2026</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-600">Passenger</span>
                <span class="font-semibold text-slate-900">1 Adult</span>
              </div>
            </div>

            <div class="space-y-3 pt-4">
              <div class="flex justify-between">
                <span class="text-slate-600">Ticket Price</span>
                <span class="font-semibold text-slate-900">৳550</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-600">Tax</span>
                <span class="font-semibold text-slate-900">৳55</span>
              </div>
              <div class="border-t border-slate-200 pt-3 flex justify-between">
                <span class="font-bold text-slate-900">Total Amount</span>
                <span class="text-2xl font-bold text-emerald-600">৳605</span>
              </div>
            </div>
          </div>

          <!-- Information Box -->
          <div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p class="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
              <i class="bi bi-info-circle me-1"></i>Confirmation
            </p>
            <p class="text-sm text-blue-900">You will receive a confirmation email with your ticket details after payment.</p>
          </div>

          <!-- Security Note -->
          <div class="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p class="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">
              <i class="bi bi-shield-check me-1"></i>Secure
            </p>
            <p class="text-sm text-emerald-900">Your payment is protected by SSL encryption.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      passengerInfo: {
        fullName: '',
        email: '',
        phone: '',
      },
      ticketNumber: this.generateTicketNumber(),
      agreeToTerms: false,
    };
  },
  methods: {
    generateTicketNumber() {
      const randomNumber = Math.floor(Math.random() * 1000000);
      return `TM-${new Date().getFullYear()}-${String(randomNumber).padStart(6, '0')}`;
    },

    submitForm() {
      if (!this.passengerInfo.fullName || !this.passengerInfo.email || !this.passengerInfo.phone) {
        alert('Please fill in all the required fields.');
        return;
      }

      if (!this.agreeToTerms) {
        alert('Please agree to the terms and conditions.');
        return;
      }

      alert(`Thank you, ${this.passengerInfo.fullName}! Your ticket number is ${this.ticketNumber}. Proceeding to payment...`);
      this.proceedToPayment();
    },

    proceedToPayment() {
      alert('Redirecting to secure payment gateway...');
      // In a real application, you would redirect to a payment gateway here
      // this.$router.push({ name: 'Payment' });
    },

    goBack() {
      this.$router.push({ name: 'SeatSelection' });
    }
  }
};
</script>
