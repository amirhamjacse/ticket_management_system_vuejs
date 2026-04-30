<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <div class="flex items-center gap-4 mb-4">
          <router-link to="/dashboard" class="hover:text-emerald-100 transition">
            <i class="bi bi-arrow-left text-2xl"></i>
          </router-link>
          <h1 class="text-4xl font-bold md:text-5xl">Booking Details</h1>
        </div>
        <p class="mt-2 text-emerald-100">Ticket #{{ booking.ticketNumber }}</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <!-- Status & Quick Actions -->
      <div class="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex md:items-center md:justify-between">
        <div class="mb-4 md:mb-0">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Booking Status</p>
          <div class="flex items-center gap-3">
            <span :class="['inline-block px-4 py-2 rounded-full text-sm font-semibold', getStatusColor(booking.status)]">
              {{ booking.status }}
            </span>
            <p class="text-sm text-slate-600">Booked on {{ booking.bookedDate }}</p>
          </div>
        </div>
        <div class="flex gap-3">
          <button
            @click="downloadTicket"
            class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            <i class="bi bi-download"></i>Download
          </button>
          <button
            @click="printTicket"
            class="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            <i class="bi bi-printer"></i>Print
          </button>
          <button
            v-if="booking.status !== 'Cancelled'"
            @click="cancelBooking"
            class="flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2 font-semibold text-red-600 transition hover:bg-red-50"
          >
            <i class="bi bi-x-circle"></i>Cancel
          </button>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Route Info -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Trip Information</h2>
            <div class="mb-6">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">From</p>
                  <p class="text-3xl font-bold text-slate-900">{{ booking.from }}</p>
                </div>
                <i class="bi bi-arrow-right text-3xl text-emerald-600"></i>
                <div>
                  <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 text-right">To</p>
                  <p class="text-3xl font-bold text-slate-900 text-right">{{ booking.to }}</p>
                </div>
              </div>
            </div>

            <!-- Departure & Arrival -->
            <div class="grid grid-cols-2 gap-6">
              <div class="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                <p class="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">Departure</p>
                <p class="text-2xl font-bold text-blue-900 mb-1">{{ booking.departureTime }}</p>
                <p class="text-sm text-blue-800">{{ booking.departureDate }}</p>
              </div>
              <div class="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4">
                <p class="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Arrival</p>
                <p class="text-2xl font-bold text-green-900 mb-1">{{ booking.arrivalTime }}</p>
                <p class="text-sm text-green-800">{{ booking.arrivalDate }}</p>
              </div>
            </div>
          </div>

          <!-- Bus & Seat Info -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Bus & Seat Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Bus Name</p>
                <p class="text-xl font-bold text-slate-900 mb-4">{{ booking.busName }}</p>
                
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Bus Type</p>
                <p class="text-lg font-bold text-slate-900 mb-4">{{ booking.busType }}</p>

                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Bus License</p>
                <p class="text-lg text-slate-700 font-mono">{{ booking.busLicense }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Seat Number</p>
                <div class="inline-block rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 px-4 py-2 mb-4">
                  <p class="text-3xl font-bold text-white">{{ booking.seatNumber }}</p>
                </div>

                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Seat Type</p>
                <p class="text-lg font-bold text-slate-900 mb-4">{{ booking.seatType }}</p>

                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Ticket Number</p>
                <p class="text-lg text-slate-700 font-mono">{{ booking.ticketNumber }}</p>
              </div>
            </div>
          </div>

          <!-- Passenger Info -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Passenger Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Full Name</p>
                <p class="text-lg font-bold text-slate-900">{{ booking.passengerName }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Email</p>
                <p class="text-lg text-blue-600">{{ booking.passengerEmail }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Phone</p>
                <p class="text-lg font-bold text-slate-900">{{ booking.passengerPhone }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Gender</p>
                <p class="text-lg font-bold text-slate-900">{{ booking.passengerGender }}</p>
              </div>
            </div>
          </div>

          <!-- Trip Timeline -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Travel Timeline</h2>
            <div class="space-y-4">
              <div v-for="(event, index) in tripTimeline" :key="index" class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div :class="['h-12 w-12 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold', event.color]">
                    <i :class="['bi', event.icon]"></i>
                  </div>
                  <div v-if="index < tripTimeline.length - 1" class="h-12 w-1 bg-gradient-to-b from-slate-300 to-transparent mt-2"></div>
                </div>
                <div class="pt-2">
                  <p class="text-sm font-semibold text-slate-500 uppercase tracking-wide">{{ event.status }}</p>
                  <p class="text-lg font-bold text-slate-900">{{ event.message }}</p>
                  <p class="text-sm text-slate-600 mt-1">{{ event.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Pricing Breakdown -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sticky top-4">
            <h3 class="text-xl font-bold text-slate-900 mb-6">Price Summary</h3>
            <div class="space-y-4 mb-6 pb-6 border-b border-slate-200">
              <div class="flex justify-between">
                <p class="text-slate-600">Base Fare</p>
                <p class="font-semibold text-slate-900">{{ booking.baseFare }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-slate-600">Service Fee</p>
                <p class="font-semibold text-slate-900">{{ booking.serviceFee }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-slate-600">Tax (15%)</p>
                <p class="font-semibold text-slate-900">{{ booking.tax }}</p>
              </div>
              <div v-if="booking.discount" class="flex justify-between">
                <p class="text-green-600">Discount</p>
                <p class="font-semibold text-green-600">-{{ booking.discount }}</p>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="text-lg font-bold text-slate-900">Total Price</p>
              <p class="text-2xl font-bold text-emerald-600">{{ booking.price }}</p>
            </div>
          </div>

          <!-- Important Notes -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">
              <i class="bi bi-info-circle me-2 text-emerald-600"></i>Important Notes
            </h3>
            <ul class="space-y-3 text-sm text-slate-700">
              <li class="flex gap-2">
                <i class="bi bi-check-circle text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Arrive 15 minutes before departure</span>
              </li>
              <li class="flex gap-2">
                <i class="bi bi-check-circle text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Keep your ticket ready</span>
              </li>
              <li class="flex gap-2">
                <i class="bi bi-check-circle text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Valid ID proof required</span>
              </li>
              <li class="flex gap-2">
                <i class="bi bi-check-circle text-emerald-600 mt-0.5 shrink-0"></i>
                <span>Non-transferable ticket</span>
              </li>
            </ul>
          </div>

          <!-- Contact Support -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">
              <i class="bi bi-telephone me-2 text-emerald-600"></i>Need Help?
            </h3>
            <div class="space-y-3 text-sm">
              <p class="text-slate-600">Contact our support team:</p>
              <p class="font-semibold text-slate-900">{{ booking.supportPhone }}</p>
              <p class="text-blue-600">{{ booking.supportEmail }}</p>
              <button class="mt-4 w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 py-2 font-semibold text-white transition hover:shadow-lg">
                <i class="bi bi-chat-dots me-2"></i>Chat Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingDetails',
  data() {
    return {
      booking: {},
      tripTimeline: [
        {
          status: 'Booking Confirmed',
          message: 'Your booking has been confirmed',
          time: 'April 28, 2026 • 2:30 PM',
          color: 'bg-gradient-to-br from-green-600 to-emerald-600',
          icon: 'bi-check-circle-fill',
        },
        {
          status: 'Ticket Generated',
          message: 'E-ticket has been generated',
          time: 'April 28, 2026 • 2:31 PM',
          color: 'bg-gradient-to-br from-blue-600 to-cyan-600',
          icon: 'bi-ticket-fill',
        },
        {
          status: 'Ready to Travel',
          message: 'Your ticket is active and ready to use',
          time: 'May 15, 2026 onwards',
          color: 'bg-gradient-to-br from-emerald-600 to-green-600',
          icon: 'bi-bus-front-fill',
        },
      ],
    };
  },
  computed: {
    bookingId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.loadBookingDetails();
  },
  methods: {
    loadBookingDetails() {
      // Sample booking data - in a real app, you'd fetch from API
      const allBookings = [
        {
          id: 1,
          ticketNumber: 'TM-202405-0001',
          from: 'Dhaka',
          to: 'Sylhet',
          price: '৳2,500',
          status: 'Upcoming',
          bookedDate: 'April 28, 2026',
          departureDate: 'May 15, 2026',
          departureTime: '08:30 AM',
          arrivalDate: 'May 15, 2026',
          arrivalTime: '02:30 PM',
          passengerName: 'John Doe',
          passengerEmail: 'john.doe@example.com',
          passengerPhone: '+880 1700-000001',
          passengerGender: 'Male',
          seatNumber: '12A',
          seatType: 'Window Seat',
          busName: 'Shyamoli Express',
          busType: 'AC-Sleeper',
          busLicense: 'DHAKA-2022-001',
          baseFare: '৳2,200',
          serviceFee: '৳150',
          tax: '৳330',
          discount: '',
          supportPhone: '+880 1800-111-111',
          supportEmail: 'support@shyamoli.com',
        },
        {
          id: 2,
          ticketNumber: 'TM-202405-0002',
          from: 'Chittagong',
          to: 'Dhaka',
          price: '৳1,800',
          status: 'Upcoming',
          bookedDate: 'April 27, 2026',
          departureDate: 'May 18, 2026',
          departureTime: '10:00 PM',
          arrivalDate: 'May 19, 2026',
          arrivalTime: '06:00 AM',
          passengerName: 'John Doe',
          passengerEmail: 'john.doe@example.com',
          passengerPhone: '+880 1700-000001',
          passengerGender: 'Male',
          seatNumber: '5B',
          seatType: 'Middle Seat',
          busName: 'Green Line',
          busType: 'AC-Recliner',
          busLicense: 'CTGRAM-2021-045',
          baseFare: '৳1,600',
          serviceFee: '৳120',
          tax: '৳240',
          discount: '৳160',
          supportPhone: '+880 1900-222-222',
          supportEmail: 'support@greenline.com',
        },
        {
          id: 3,
          ticketNumber: 'TM-202404-0125',
          from: 'Khulna',
          to: 'Dhaka',
          price: '৳2,200',
          status: 'Completed',
          bookedDate: 'April 05, 2026',
          departureDate: 'April 10, 2026',
          departureTime: '09:00 PM',
          arrivalDate: 'April 11, 2026',
          arrivalTime: '05:00 AM',
          passengerName: 'John Doe',
          passengerEmail: 'john.doe@example.com',
          passengerPhone: '+880 1700-000001',
          passengerGender: 'Male',
          seatNumber: '8C',
          seatType: 'Aisle Seat',
          busName: 'Hanif Enterprise',
          busType: 'AC-Premium',
          busLicense: 'KHULNA-2020-089',
          baseFare: '৳2,000',
          serviceFee: '৳150',
          tax: '৳300',
          discount: '',
          supportPhone: '+880 1600-333-333',
          supportEmail: 'support@hanif.com',
        },
        {
          id: 4,
          ticketNumber: 'TM-202404-0089',
          from: 'Dhaka',
          to: 'Rajshahi',
          price: '৳2,100',
          status: 'Cancelled',
          bookedDate: 'April 02, 2026',
          departureDate: 'April 05, 2026',
          departureTime: '11:00 PM',
          arrivalDate: 'April 06, 2026',
          arrivalTime: '07:00 AM',
          passengerName: 'John Doe',
          passengerEmail: 'john.doe@example.com',
          passengerPhone: '+880 1700-000001',
          passengerGender: 'Male',
          seatNumber: '15D',
          seatType: 'Window Seat',
          busName: 'Titas Transport',
          busType: 'AC-Standard',
          busLicense: 'RAJSHAHI-2019-012',
          baseFare: '৳1,900',
          serviceFee: '৳140',
          tax: '৳285',
          discount: '',
          supportPhone: '+880 1500-444-444',
          supportEmail: 'support@titas.com',
        },
      ];

      const foundBooking = allBookings.find((b) => b.id === parseInt(this.bookingId));
      if (foundBooking) {
        this.booking = foundBooking;
      } else {
        this.$router.push('/dashboard');
      }
    },
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
    downloadTicket() {
      alert(`Downloading ticket #${this.booking.ticketNumber}...`);
    },
    printTicket() {
      alert(`Printing ticket #${this.booking.ticketNumber}...`);
      window.print();
    },
    cancelBooking() {
      if (confirm(`Are you sure you want to cancel booking #${this.booking.ticketNumber}?`)) {
        this.booking.status = 'Cancelled';
        alert('Booking cancelled successfully. Refund will be processed within 5-7 business days.');
      }
    },
  },
};
</script>
