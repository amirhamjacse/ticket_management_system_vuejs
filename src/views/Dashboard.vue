<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-4xl font-bold md:text-5xl">My Bookings</h1>
        <p class="mt-2 text-emerald-100">View and manage all your ticket bookings</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <!-- Filter & Search -->
      <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="flex gap-3">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition',
              activeFilter === filter
                ? 'bg-emerald-600 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-500'
            ]"
          >
            {{ filter }}
          </button>
        </div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by ticket number..."
          class="rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
        />
      </div>

      <!-- Bookings Grid -->
      <div class="space-y-6">
        <div v-if="filteredBookings.length === 0" class="rounded-lg border border-slate-200 bg-white p-12 text-center">
          <i class="bi bi-inbox text-4xl text-slate-300 mb-4 block"></i>
          <p class="text-lg text-slate-600 font-medium">No bookings found</p>
        </div>

        <div
          v-for="booking in filteredBookings"
          :key="booking.id"
          class="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden"
        >
          <!-- Booking Header -->
          <div class="flex items-center justify-between gap-4 bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-4 md:flex-row flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-slate-900">{{ booking.from }} <i class="bi bi-arrow-right text-emerald-600"></i> {{ booking.to }}</h3>
              <p class="text-sm text-slate-600 mt-1">Ticket #{{ booking.ticketNumber }}</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-bold text-emerald-600">{{ booking.price }}</p>
              <span :class="['inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2', getStatusColor(booking.status)]">
                {{ booking.status }}
              </span>
            </div>
          </div>

          <!-- Booking Details -->
          <div class="px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-slate-200">
            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Departure</p>
              <p class="text-lg font-bold text-slate-900 mt-1">{{ booking.departureDate }}</p>
              <p class="text-sm text-slate-600">{{ booking.departureTime }}</p>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Arrival</p>
              <p class="text-lg font-bold text-slate-900 mt-1">{{ booking.arrivalDate }}</p>
              <p class="text-sm text-slate-600">{{ booking.arrivalTime }}</p>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Passenger</p>
              <p class="text-lg font-bold text-slate-900 mt-1">{{ booking.passengerName }}</p>
              <p class="text-sm text-slate-600">Seat {{ booking.seatNumber }}</p>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Bus</p>
              <p class="text-lg font-bold text-slate-900 mt-1">{{ booking.busName }}</p>
              <p class="text-sm text-slate-600">{{ booking.busType }}</p>
            </div>
          </div>

          <!-- Booking Actions -->
          <div class="flex flex-col gap-3 px-6 py-6 md:flex-row md:justify-end">
            <button
              @click="downloadTicket(booking)"
              class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
            >
              <i class="bi bi-download"></i>Download Ticket
            </button>
            <button
              @click="printTicket(booking)"
              class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
            >
              <i class="bi bi-printer"></i>Print Ticket
            </button>
            <button
              v-if="booking.status !== 'Cancelled'"
              @click="cancelBooking(booking)"
              class="flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2 font-semibold text-red-600 transition hover:bg-red-50"
            >
              <i class="bi bi-x-circle"></i>Cancel
            </button>
            <router-link
              :to="`/booking-details/${booking.id}`"
              class="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2 font-semibold text-white transition hover:shadow-lg"
            >
              <i class="bi bi-eye"></i>View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      activeFilter: 'All',
      searchQuery: '',
      filters: ['All', 'Upcoming', 'Completed', 'Cancelled'],
      bookings: [
        {
          id: 1,
          ticketNumber: 'TM-202405-0001',
          from: 'Dhaka',
          to: 'Sylhet',
          price: '৳2,500',
          status: 'Upcoming',
          departureDate: 'May 15, 2026',
          departureTime: '08:30 AM',
          arrivalDate: 'May 15, 2026',
          arrivalTime: '02:30 PM',
          passengerName: 'John Doe',
          seatNumber: '12A',
          busName: 'Shyamoli Express',
          busType: 'AC-Sleeper',
        },
        {
          id: 2,
          ticketNumber: 'TM-202405-0002',
          from: 'Chittagong',
          to: 'Dhaka',
          price: '৳1,800',
          status: 'Upcoming',
          departureDate: 'May 18, 2026',
          departureTime: '10:00 PM',
          arrivalDate: 'May 19, 2026',
          arrivalTime: '06:00 AM',
          passengerName: 'John Doe',
          seatNumber: '5B',
          busName: 'Green Line',
          busType: 'AC-Recliner',
        },
        {
          id: 3,
          ticketNumber: 'TM-202404-0125',
          from: 'Khulna',
          to: 'Dhaka',
          price: '৳2,200',
          status: 'Completed',
          departureDate: 'April 10, 2026',
          departureTime: '09:00 PM',
          arrivalDate: 'April 11, 2026',
          arrivalTime: '05:00 AM',
          passengerName: 'John Doe',
          seatNumber: '8C',
          busName: 'Hanif Enterprise',
          busType: 'AC-Premium',
        },
        {
          id: 4,
          ticketNumber: 'TM-202404-0089',
          from: 'Dhaka',
          to: 'Rajshahi',
          price: '৳2,100',
          status: 'Cancelled',
          departureDate: 'April 05, 2026',
          departureTime: '11:00 PM',
          arrivalDate: 'April 06, 2026',
          arrivalTime: '07:00 AM',
          passengerName: 'John Doe',
          seatNumber: '15D',
          busName: 'Titas Transport',
          busType: 'AC-Standard',
        },
      ],
    };
  },
  computed: {
    filteredBookings() {
      return this.bookings.filter((booking) => {
        const matchesFilter =
          this.activeFilter === 'All' || booking.status === this.activeFilter;
        const matchesSearch = booking.ticketNumber
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
      });
    },
  },
  methods: {
    getStatusColor(status) {
      switch (status) {
        case 'Upcoming':
          return 'bg-blue-100 text-blue-800';
        case 'Completed':
          return 'bg-green-100 text-green-800';
        case 'Cancelled':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-slate-100 text-slate-800';
      }
    },
    downloadTicket(booking) {
      alert(`Downloading ticket #${booking.ticketNumber}...`);
    },
    printTicket(booking) {
      alert(`Printing ticket #${booking.ticketNumber}...`);
      window.print();
    },
    cancelBooking(booking) {
      if (confirm(`Are you sure you want to cancel booking #${booking.ticketNumber}?`)) {
        booking.status = 'Cancelled';
        alert('Booking cancelled successfully. Refund will be processed within 5-7 business days.');
      }
    },
  },
};
</script>
