<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-8 md:py-12">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-3xl font-bold md:text-4xl">Payment & Checkout</h1>
        <p class="mt-2 text-emerald-100">Complete your booking securely</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Left Column - Payment Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Trip Summary -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Trip Summary</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <p class="text-sm text-slate-600 mb-1">Route</p>
                  <p class="text-lg font-bold text-slate-900">Dhaka → Chittagong</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-slate-600 mb-1">Date</p>
                  <p class="text-lg font-bold text-slate-900">May 18, 2026</p>
                </div>
              </div>
              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <p class="text-sm text-slate-600 mb-1">Bus</p>
                  <p class="text-lg font-bold text-slate-900">Green Line • AC-Recliner</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-slate-600 mb-1">Seat</p>
                  <p class="text-lg font-bold text-slate-900">5B</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600 mb-1">Passenger</p>
                  <p class="text-lg font-bold text-slate-900">1 Adult</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-slate-600 mb-1">Duration</p>
                  <p class="text-lg font-bold text-slate-900">8 hours</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Passenger Information -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Passenger Information</h2>
            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" v-model="passengerData.name" placeholder="John Doe" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input type="email" v-model="passengerData.email" placeholder="john@example.com" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input type="tel" v-model="passengerData.phone" placeholder="+880 1234 567890" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Gender</label>
                  <select v-model="passengerData.gender" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          <!-- Payment Method -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Payment Method</h2>
            
            <div class="space-y-4 mb-6">
              <!-- Credit/Debit Card -->
              <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" :class="selectedPayment === 'card' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'">
                <input v-model="selectedPayment" type="radio" value="card" class="w-4 h-4 text-emerald-600" />
                <div class="ml-4 flex-1">
                  <p class="font-semibold text-slate-900">Credit/Debit Card</p>
                  <p class="text-xs text-slate-600">Visa, Mastercard, or other major cards</p>
                </div>
                <i class="bi bi-credit-card text-2xl text-slate-400"></i>
              </label>

              <!-- Mobile Banking -->
              <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" :class="selectedPayment === 'mobile' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'">
                <input v-model="selectedPayment" type="radio" value="mobile" class="w-4 h-4 text-emerald-600" />
                <div class="ml-4 flex-1">
                  <p class="font-semibold text-slate-900">Mobile Banking</p>
                  <p class="text-xs text-slate-600">bKash, Nagad, or Rocket</p>
                </div>
                <i class="bi bi-phone text-2xl text-slate-400"></i>
              </label>

              <!-- Bank Transfer -->
              <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" :class="selectedPayment === 'bank' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'">
                <input v-model="selectedPayment" type="radio" value="bank" class="w-4 h-4 text-emerald-600" />
                <div class="ml-4 flex-1">
                  <p class="font-semibold text-slate-900">Bank Transfer</p>
                  <p class="text-xs text-slate-600">Direct bank account transfer</p>
                </div>
                <i class="bi bi-bank text-2xl text-slate-400"></i>
              </label>

              <!-- Digital Wallet -->
              <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" :class="selectedPayment === 'wallet' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'">
                <input v-model="selectedPayment" type="radio" value="wallet" class="w-4 h-4 text-emerald-600" />
                <div class="ml-4 flex-1">
                  <p class="font-semibold text-slate-900">Digital Wallet</p>
                  <p class="text-xs text-slate-600">Google Pay, Apple Pay</p>
                </div>
                <i class="bi bi-wallet2 text-2xl text-slate-400"></i>
              </label>
            </div>

            <!-- Card Details (shown when card is selected) -->
            <div v-if="selectedPayment === 'card'" class="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Cardholder Name</label>
                <input type="text" v-model="cardData.name" placeholder="John Doe" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Card Number</label>
                <input type="text" v-model="cardData.number" placeholder="4242 4242 4242 4242" maxlength="19" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition font-mono" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">Expiry</label>
                  <input type="text" v-model="cardData.expiry" placeholder="MM/YY" maxlength="5" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition font-mono" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-2">CVV</label>
                  <input type="text" v-model="cardData.cvv" placeholder="123" maxlength="3" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition font-mono" />
                </div>
              </div>
            </div>

            <!-- Mobile Banking Details -->
            <div v-if="selectedPayment === 'mobile'" class="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Select Provider</label>
                <select class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition">
                  <option>bKash</option>
                  <option>Nagad</option>
                  <option>Rocket</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Mobile Number</label>
                <input type="tel" placeholder="+880 1234 567890" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
              </div>
              <p class="text-xs text-slate-600">You will receive a prompt on your mobile to confirm payment</p>
            </div>
          </div>

          <!-- Terms & Conditions -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <label class="flex items-start gap-3 cursor-pointer">
              <input v-model="agreeToTerms" type="checkbox" class="mt-1 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
              <span class="text-slate-700 text-sm">
                I agree to the <router-link to="#" class="text-emerald-600 hover:text-emerald-700 underline">terms and conditions</router-link> and <router-link to="#" class="text-emerald-600 hover:text-emerald-700 underline">privacy policy</router-link>
              </span>
            </label>
          </div>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="sticky top-24 h-fit">
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>

            <div class="space-y-4 pb-6 border-b border-slate-200">
              <div class="flex justify-between">
                <span class="text-slate-600">Base Fare (1 Seat)</span>
                <span class="font-semibold text-slate-900">৳1,800</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-600">Service Fee</span>
                <span class="font-semibold text-slate-900">৳100</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-600">Tax & GST</span>
                <span class="font-semibold text-slate-900">৳200</span>
              </div>

              <div class="bg-emerald-50 p-3 rounded-lg">
                <div class="flex justify-between">
                  <span class="text-sm text-emerald-700 font-semibold">Discount (10% off)</span>
                  <span class="text-sm text-emerald-700 font-semibold">-৳220</span>
                </div>
              </div>
            </div>

            <div class="pb-6 border-b border-slate-200">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-slate-900">Total</span>
                <span class="text-2xl font-bold text-emerald-600">৳2,080</span>
              </div>
            </div>

            <div class="space-y-3">
              <!-- Promo Code -->
              <div>
                <input
                  v-model="promoCode"
                  type="text"
                  placeholder="Enter promo code"
                  class="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                />
              </div>

              <!-- Payment Button -->
              <button
                @click="processPayment"
                :disabled="!agreeToTerms || !passengerData.name || !passengerData.email"
                class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i class="bi bi-lock-fill me-2"></i>Pay ৳2,080 Securely
              </button>

              <!-- Security Info -->
              <p class="text-xs text-slate-600 text-center">
                <i class="bi bi-shield-check text-emerald-600 me-1"></i>
                Your payment is secure and encrypted
              </p>
            </div>
          </div>

          <!-- Booking Ticket -->
          <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="font-bold text-slate-900 mb-3">Ticket Number</h3>
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
              <p class="text-center font-mono text-sm font-bold text-emerald-800">TM-{{ generateTicketNumber() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  data() {
    return {
      passengerData: {
        name: '',
        email: '',
        phone: '',
        gender: '',
      },
      selectedPayment: 'card',
      cardData: {
        name: '',
        number: '',
        expiry: '',
        cvv: '',
      },
      agreeToTerms: false,
      promoCode: '',
    };
  },
  methods: {
    processPayment() {
      if (!this.agreeToTerms) {
        alert('Please agree to terms and conditions');
        return;
      }
      if (!this.passengerData.name || !this.passengerData.email) {
        alert('Please fill in all passenger information');
        return;
      }

      alert(`Booking confirmed! Ticket #TM-${this.generateTicketNumber()} has been created. Check your email for details.`);
      this.$router.push('/dashboard');
    },
    generateTicketNumber() {
      const year = new Date().getFullYear();
      const random = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `${year}${random}`;
    },
  },
};
</script>
