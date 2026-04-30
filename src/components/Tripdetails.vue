<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-4xl font-bold md:text-5xl">Trip Details</h1>
        <p class="mt-2 text-emerald-100">Dhaka → Chittagong | May 18, 2026</p>
      </div>
    </section>

    <div class="mx-auto max-w-4xl px-4 py-12">
      <!-- Trip Info Cards -->
      <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
          <p class="text-xs uppercase tracking-wide text-slate-600 font-semibold mb-1">Bus Name</p>
          <p class="text-lg font-bold text-slate-900">Shyamoli Express</p>
        </div>
        <div class="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
          <p class="text-xs uppercase tracking-wide text-slate-600 font-semibold mb-1">Duration</p>
          <p class="text-lg font-bold text-slate-900">5h 0m</p>
        </div>
        <div class="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
          <p class="text-xs uppercase tracking-wide text-slate-600 font-semibold mb-1">Total Distance</p>
          <p class="text-lg font-bold text-slate-900">285 km</p>
        </div>
        <div class="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
          <p class="text-xs uppercase tracking-wide text-slate-600 font-semibold mb-1">Stops</p>
          <p class="text-lg font-bold text-emerald-600">{{ stops.length }}</p>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="mb-8 flex gap-3 border-b border-slate-200">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-6 py-3 font-semibold transition relative',
            activeTab === tab.id
              ? 'text-emerald-600'
              : 'text-slate-600 hover:text-slate-900'
          ]"
        >
          <i :class="['bi me-2', tab.icon]"></i>{{ tab.label }}
          <div
            v-if="activeTab === tab.id"
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-green-600"
          ></div>
        </button>
      </div>

      <!-- Timeline Section -->
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 class="mb-8 text-2xl font-bold text-slate-900">
          <i :class="['bi', 'me-2', 'text-emerald-600', activeTab === 'boarding' ? 'bi-geo-alt-fill' : 'bi-flag-fill']"></i>
          {{ activeTab === 'boarding' ? 'Boarding Points' : 'Dropping Points' }}
        </h2>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical Line -->
          <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-green-600"></div>

          <!-- Timeline Items -->
          <div class="space-y-6">
            <div
              v-for="(stop, index) in stops"
              :key="index"
              class="relative pl-20 group"
            >
              <!-- Circle -->
              <div
                class="absolute left-0 top-2 h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-emerald-600 to-green-600 shadow-md flex items-center justify-center text-white font-bold text-sm transition group-hover:scale-110 group-hover:shadow-lg"
              >
                {{ index + 1 }}
              </div>

              <!-- Card -->
              <div class="rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-emerald-50 p-4 transition hover:border-emerald-300 hover:shadow-md">
                <div class="flex items-start justify-between gap-4 md:flex-row flex-col">
                  <div class="flex-1">
                    <p class="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-1">Stop {{ index + 1 }}</p>
                    <h3 class="text-lg font-bold text-slate-900">{{ stop.name }}</h3>
                    <p class="text-sm text-slate-600 mt-1">
                      <i class="bi bi-info-circle me-1"></i>{{ stop.details }}
                    </p>
                  </div>
                  <div class="text-right shrink-0">
                    <p class="text-xs text-slate-600 uppercase font-semibold mb-1">Arrival Time</p>
                    <p class="text-2xl font-bold text-emerald-600">{{ stop.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- End Marker -->
          <div class="relative pl-20 mt-8 pt-8 border-t-2 border-dashed border-slate-300">
            <div class="absolute left-0 top-2 h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-green-600 to-emerald-600 shadow-md flex items-center justify-center text-white">
              <i class="bi bi-check-lg text-lg"></i>
            </div>
            <div class="rounded-xl border border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 p-4">
              <p class="text-sm font-semibold text-green-700 mb-1">Final Destination</p>
              <p class="text-xl font-bold text-slate-900">{{ activeTab === 'boarding' ? 'Chittagong' : 'Dhaka' }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 class="text-xl font-bold text-slate-900 mb-4">
            <i class="bi bi-info-circle me-2 text-emerald-600"></i>Important Notes
          </h3>
          <ul class="space-y-3">
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <span class="text-slate-700">Please arrive 15 minutes before departure</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <span class="text-slate-700">Have your ticket ready for verification</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <span class="text-slate-700">Keep one valid ID proof with you</span>
            </li>
            <li class="flex gap-3">
              <i class="bi bi-check-circle text-emerald-600 text-lg shrink-0 mt-0.5"></i>
              <span class="text-slate-700">Report at least 30 min before departure</span>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 class="text-xl font-bold text-slate-900 mb-4">
            <i class="bi bi-telephone me-2 text-emerald-600"></i>Contact Information
          </h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-slate-600 font-semibold mb-1">Bus Operator</p>
              <p class="text-lg font-bold text-slate-900">Shyamoli Express</p>
            </div>
            <div>
              <p class="text-sm text-slate-600 font-semibold mb-1">Support Hotline</p>
              <p class="text-lg font-bold text-slate-900">+880 1800-111-111</p>
            </div>
            <div>
              <p class="text-sm text-slate-600 font-semibold mb-1">Email Support</p>
              <p class="text-lg font-bold text-slate-900">support@shyamoli.com</p>
            </div>
            <button class="mt-4 w-full rounded-lg border border-emerald-600 bg-white px-4 py-2 font-semibold text-emerald-600 transition hover:bg-emerald-50">
              <i class="bi bi-chat-dots me-2"></i>Chat with Support
            </button>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 flex gap-4 justify-center">
        <router-link
          to="/dashboard"
          class="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <i class="bi bi-arrow-left me-2"></i>Back to Bookings
        </router-link>
        <button
          @click="downloadItinerary"
          class="rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
        >
          <i class="bi bi-download me-2"></i>Download Itinerary
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripDetails",
  data() {
    return {
      activeTab: "boarding",
      tabs: [
        { id: "boarding", label: "Boarding Points", icon: "bi-geo-alt-fill" },
        { id: "dropping", label: "Dropping Points", icon: "bi-flag-fill" },
      ],
      stops: [
        { name: "Kallyanpur Bus Point", time: "01:00 PM", details: "KOL" },
        { name: "Kallyanpur Sohrab Pump", time: "01:10 PM", details: "Kallyanpur Sohrab Filling Station_ME" },
        { name: "Technical (TC) Gabtoli", time: "01:20 PM", details: "GB tech" },
        { name: "Savar Bus Point", time: "01:30 PM", details: "Savar" },
        { name: "Nabinagar Bus Point", time: "01:40 PM", details: "Nabinagar" },
        { name: "Baipal Bus Point", time: "01:45 PM", details: "Baipail" },
        { name: "Sreepur Bus Point", time: "01:50 PM", details: "Sreepur Counter" },
        { name: "Zerani Bazar", time: "01:55 PM", details: "Zirani" },
        { name: "Chandra Bus Point", time: "02:00 PM", details: "Chandra" },
        { name: "Hatubhanga Bus Point", time: "02:05 PM", details: "" },
      ],
    };
  },
  methods: {
    downloadItinerary() {
      alert("Downloading itinerary...");
    },
  },
};
</script>
