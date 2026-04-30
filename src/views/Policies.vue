<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-4xl font-bold md:text-5xl">Cancellation & Refund Policies</h1>
        <p class="mt-2 text-emerald-100">Clear terms for booking modifications and refunds</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <!-- Policy Overview Cards -->
      <div class="mb-12 grid gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <i class="bi bi-clock text-4xl text-blue-600 mb-3 block"></i>
          <h3 class="text-xl font-bold text-blue-900 mb-2">24-Hour Policy</h3>
          <p class="text-sm text-blue-800">Get full refund if you cancel 24+ hours before departure</p>
        </div>
        <div class="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <i class="bi bi-exclamation-triangle text-4xl text-yellow-600 mb-3 block"></i>
          <h3 class="text-xl font-bold text-yellow-900 mb-2">Partial Refund</h3>
          <p class="text-sm text-yellow-800">Get 50% refund if you cancel 6-24 hours before departure</p>
        </div>
        <div class="rounded-2xl border border-red-200 bg-red-50 p-6">
          <i class="bi bi-x-circle text-4xl text-red-600 mb-3 block"></i>
          <h3 class="text-xl font-bold text-red-900 mb-2">No Refund</h3>
          <p class="text-sm text-red-800">No refund if you cancel within 6 hours of departure</p>
        </div>
      </div>

      <!-- Cancellation Timeline -->
      <div class="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900 mb-8">Cancellation Timeline</h2>
        <div class="space-y-6">
          <div v-for="(item, index) in cancellationTimeline" :key="index" class="flex gap-6">
            <div class="flex flex-col items-center">
              <div :class="['h-12 w-12 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold', item.color]">
                {{ index + 1 }}
              </div>
              <div v-if="index < cancellationTimeline.length - 1" class="h-12 w-1 bg-gradient-to-b from-slate-300 to-transparent mt-2"></div>
            </div>
            <div class="pt-2 flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-lg font-bold text-slate-900">{{ item.timeframe }}</h3>
                <span :class="['px-3 py-1 rounded-full text-xs font-semibold', item.badge]">
                  {{ item.refundType }}
                </span>
              </div>
              <p class="text-slate-600 mb-2">{{ item.description }}</p>
              <p class="text-2xl font-bold text-slate-900">{{ item.refundAmount }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Policies -->
      <div class="grid gap-6 lg:grid-cols-2 mb-12">
        <!-- Cancellation Policy -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">
            <i class="bi bi-x-circle me-2 text-red-600"></i>Cancellation Policy
          </h2>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Request Deadline</p>
                <p class="text-sm text-slate-600">You must request cancellation at least 6 hours before scheduled departure</p>
              </div>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">How to Cancel</p>
                <p class="text-sm text-slate-600">Go to Dashboard → View Details → Click Cancel Booking button</p>
              </div>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Confirmation</p>
                <p class="text-sm text-slate-600">You'll receive instant cancellation confirmation via email and SMS</p>
              </div>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Processing Time</p>
                <p class="text-sm text-slate-600">Cancellation processed immediately; refund initiated within 24 hours</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Refund Policy -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">
            <i class="bi bi-arrow-counterclockwise me-2 text-green-600"></i>Refund Policy
          </h2>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Processing Period</p>
                <p class="text-sm text-slate-600">Refunds are processed within 5-7 business days from cancellation date</p>
              </div>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Original Payment Method</p>
                <p class="text-sm text-slate-600">Refunds are credited to the original payment method used for booking</p>
              </div>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Bank Delays</p>
                <p class="text-sm text-slate-600">Some banks may take additional time; we're not responsible for delays</p>
              </div>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-slate-900">Check Status</p>
                <p class="text-sm text-slate-600">Track refund status in your dashboard booking details page</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Special Cases -->
      <div class="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900 mb-6">
          <i class="bi bi-question-circle me-2 text-emerald-600"></i>Special Cases & Exceptions
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <h3 class="font-bold text-amber-900 mb-2">
              <i class="bi bi-exclamation-triangle me-2"></i>Bus Cancellation
            </h3>
            <p class="text-sm text-amber-800">If we cancel the bus, you receive 100% refund plus ৳100 travel voucher, regardless of timing</p>
          </div>
          <div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <h3 class="font-bold text-blue-900 mb-2">
              <i class="bi bi-clock-history me-2"></i>Service Delays
            </h3>
            <p class="text-sm text-blue-800">For delays over 2 hours, receive ৳200 credit to your account for next booking</p>
          </div>
          <div class="rounded-lg border border-purple-200 bg-purple-50 p-4">
            <h3 class="font-bold text-purple-900 mb-2">
              <i class="bi bi-bag me-2"></i>Lost Luggage
            </h3>
            <p class="text-sm text-purple-800">Report within 24 hours. Compensation up to ৳5,000 for documented loss</p>
          </div>
          <div class="rounded-lg border border-pink-200 bg-pink-50 p-4">
            <h3 class="font-bold text-pink-900 mb-2">
              <i class="bi bi-heart me-2"></i>Medical Emergency
            </h3>
            <p class="text-sm text-pink-800">100% refund if cancellation is due to medical emergency (with valid proof)</p>
          </div>
        </div>
      </div>

      <!-- Non-Refundable Items -->
      <div class="mb-12 rounded-2xl border border-red-200 bg-red-50 p-8">
        <h2 class="text-2xl font-bold text-red-900 mb-6">
          <i class="bi bi-shield-exclamation me-2"></i>Non-Refundable Items
        </h2>
        <p class="text-red-800 mb-6">The following charges are non-refundable:</p>
        <ul class="space-y-2 text-red-800">
          <li class="flex gap-2">
            <i class="bi bi-dash-circle"></i>
            <span>Platform/processing fees (typically ৳50-100)</span>
          </li>
          <li class="flex gap-2">
            <i class="bi bi-dash-circle"></i>
            <span>Insurance charges (if opted during booking)</span>
          </li>
          <li class="flex gap-2">
            <i class="bi bi-dash-circle"></i>
            <span>Convenience fees for payment methods</span>
          </li>
          <li class="flex gap-2">
            <i class="bi bi-dash-circle"></i>
            <span>Promotional discounts once ticket is used</span>
          </li>
        </ul>
      </div>

      <!-- How to Check Refund Status -->
      <div class="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900 mb-6">How to Check Your Refund Status</h2>
        <ol class="space-y-4">
          <li v-for="(step, index) in refundSteps" :key="index" class="flex gap-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm shrink-0">
              {{ index + 1 }}
            </div>
            <div class="pt-1">
              <p class="font-semibold text-slate-900">{{ step.title }}</p>
              <p class="text-sm text-slate-600 mt-1">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Contact Support -->
      <div class="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50 to-green-50 p-8 text-center">
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Need Help with Refund?</h3>
        <p class="text-slate-600 mb-6">Our support team is here to assist you with any refund-related queries.</p>
        <div class="flex flex-col gap-3 md:flex-row md:justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
          >
            <i class="bi bi-envelope"></i>Contact Support
          </router-link>
          <a
            href="tel:+8801800111111"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
          >
            <i class="bi bi-telephone"></i>Call Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Policies',
  data() {
    return {
      cancellationTimeline: [
        {
          timeframe: '24+ Hours Before Departure',
          description: 'You can cancel your booking and receive full refund minus platform fee',
          refundAmount: '100% Refund',
          refundType: 'Full Refund',
          color: 'bg-gradient-to-br from-green-600 to-emerald-600',
          badge: 'bg-green-100 text-green-800',
        },
        {
          timeframe: '6-24 Hours Before Departure',
          description: 'You can cancel but will receive 50% of the ticket price as refund',
          refundAmount: '50% Refund',
          refundType: 'Partial Refund',
          color: 'bg-gradient-to-br from-yellow-600 to-amber-600',
          badge: 'bg-yellow-100 text-yellow-800',
        },
        {
          timeframe: 'Within 6 Hours Before Departure',
          description: 'Cancellation not allowed. No refund will be provided',
          refundAmount: '0% Refund',
          refundType: 'No Refund',
          color: 'bg-gradient-to-br from-red-600 to-pink-600',
          badge: 'bg-red-100 text-red-800',
        },
        {
          timeframe: 'After Departure / No-Show',
          description: 'If you miss your bus without cancellation, no refund is provided',
          refundAmount: '0% Refund',
          refundType: 'Forfeited',
          color: 'bg-gradient-to-br from-slate-600 to-slate-700',
          badge: 'bg-slate-100 text-slate-800',
        },
      ],
      refundSteps: [
        {
          title: 'Go to Your Dashboard',
          description: 'Log in to your account and navigate to "My Bookings" or Dashboard',
        },
        {
          title: 'Find Your Booking',
          description: 'Locate the canceled booking in your bookings list',
        },
        {
          title: 'Click View Details',
          description: 'Click "View Details" on the canceled booking to see refund status',
        },
        {
          title: 'Check Refund Status',
          description: 'Look for the "Refund Status" section showing "Processing", "Pending", or "Completed"',
        },
        {
          title: 'Contact Support If Needed',
          description: 'If refund shows as delayed, contact support with your ticket number',
        },
      ],
    };
  },
};
</script>
