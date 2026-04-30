<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">Select Your Seat</h1>
        <p class="mt-2 text-slate-600">Choose a comfortable seat for your journey</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <!-- Bus Seating Layout -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <!-- Seat Legend -->
          <div class="mb-8 flex justify-center gap-6 text-sm">
            <div class="flex items-center gap-2">
              <div class="h-6 w-6 rounded bg-emerald-500"></div>
              <span class="text-slate-700">Available</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-6 w-6 rounded bg-red-500"></div>
              <span class="text-slate-700">Booked</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-6 w-6 rounded bg-blue-500"></div>
              <span class="text-slate-700">Selected</span>
            </div>
          </div>

          <!-- Bus Layout -->
          <div class="flex justify-center">
            <div class="inline-block rounded-lg border-2 border-slate-300 bg-slate-50 p-8">
              <div class="mb-6 text-center text-xs font-bold uppercase tracking-wider text-slate-500">Front of Bus</div>
              
              <div class="flex gap-8">
                <!-- Left Side Seats -->
                <div>
                  <div v-for="(seatPair, pairIndex) in leftSeatPairs" :key="'left-' + pairIndex" class="mb-4 flex gap-3">
                    <button
                      v-for="(seat, seatIndex) in seatPair"
                      :key="'left-' + pairIndex + '-' + seatIndex"
                      @click="selectSeat('left', pairIndex, seatIndex)"
                      :disabled="seat.status === 'booked'"
                      :title="seat.status === 'booked' ? 'Booked' : `Seat ${String.fromCharCode(65 + pairIndex * 2 + seatIndex)}`"
                      :class="[
                        'h-10 w-10 rounded-lg font-semibold text-sm transition-all',
                        seat.status === 'available' ? 'bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer shadow-sm' : '',
                        seat.status === 'booked' ? 'bg-red-300 text-slate-700 cursor-not-allowed opacity-60' : '',
                        seat.status === 'selected' ? 'bg-blue-600 text-white ring-2 ring-blue-400 shadow-lg' : ''
                      ]"
                    >
                      {{ String.fromCharCode(65 + pairIndex * 2 + seatIndex) }}
                    </button>
                  </div>
                </div>

                <!-- Aisle -->
                <div class="w-6 bg-slate-200 rounded"></div>

                <!-- Right Side Seats -->
                <div>
                  <div v-for="(seatPair, pairIndex) in rightSeatPairs" :key="'right-' + pairIndex" class="mb-4 flex gap-3">
                    <button
                      v-for="(seat, seatIndex) in seatPair"
                      :key="'right-' + pairIndex + '-' + seatIndex"
                      @click="selectSeat('right', pairIndex, seatIndex)"
                      :disabled="seat.status === 'booked'"
                      :title="seat.status === 'booked' ? 'Booked' : `Seat ${String.fromCharCode(67 + pairIndex * 2 + seatIndex)}`"
                      :class="[
                        'h-10 w-10 rounded-lg font-semibold text-sm transition-all',
                        seat.status === 'available' ? 'bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer shadow-sm' : '',
                        seat.status === 'booked' ? 'bg-red-300 text-slate-700 cursor-not-allowed opacity-60' : '',
                        seat.status === 'selected' ? 'bg-blue-600 text-white ring-2 ring-blue-400 shadow-lg' : ''
                      ]"
                    >
                      {{ String.fromCharCode(67 + pairIndex * 2 + seatIndex) }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Selected Seat Display -->
          <div v-if="selectedSeat" class="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p class="text-sm text-slate-600">Selected Seat:</p>
            <p class="text-xl font-bold text-blue-600">{{ selectedSeat }}</p>
          </div>
        </div>

        <!-- Sidebar Actions -->
        <div class="space-y-4">
          <!-- Selected Seat Card -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900">Your Selection</h3>
            <div v-if="selectedSeat" class="mt-4 rounded-lg border-2 border-blue-500 bg-blue-50 p-4 text-center">
              <p class="text-sm text-slate-600">Seat Number</p>
              <p class="text-3xl font-bold text-blue-600">{{ selectedSeat }}</p>
            </div>
            <div v-else class="mt-4 text-center text-slate-500">
              <p class="text-sm">No seat selected</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <button
              @click="confirmSelection"
              :disabled="!selectedSeat"
              class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:shadow-lg hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i class="bi bi-check-circle me-2"></i>Confirm & Checkout
            </button>

            <button
              @click="goToTripDetailsPage"
              class="w-full rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
            >
              <i class="bi bi-info-circle me-2"></i>Trip Details
            </button>

            <button
              @click="goBackToBooking"
              class="w-full rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <i class="bi bi-arrow-left me-2"></i>Back
            </button>
          </div>

          <!-- Info Box -->
          <div class="rounded-lg bg-emerald-50 p-4 border border-emerald-200">
            <p class="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Tip</p>
            <p class="mt-2 text-sm text-emerald-900">Select an available seat (green) and confirm to proceed to checkout.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeatSelection',
  data() {
    return {
      leftSeatPairs: Array(10).fill().map((_, index) => [
        { status: index % 2 === 0 ? 'available' : 'booked' },
        { status: (index + 1) % 2 === 0 ? 'available' : 'booked' }
      ]),
      rightSeatPairs: Array(10).fill().map((_, index) => [
        { status: index % 2 === 0 ? 'available' : 'booked' },
        { status: (index + 1) % 2 === 0 ? 'available' : 'booked' }
      ]),
      selectedSeat: '',
    };
  },
  methods: {
    selectSeat(side, pairIndex, seatIndex) {
      const seats = side === 'left' ? this.leftSeatPairs : this.rightSeatPairs;
      const seat = seats[pairIndex][seatIndex];

      if (seat.status === 'booked') {
        alert('Sorry, this seat is already booked.');
        return;
      }

      // Deselect previous seat
      if (this.selectedSeat) {
        this.leftSeatPairs.forEach(pair => {
          pair.forEach(s => { if (s.status === 'selected') s.status = 'available'; });
        });
        this.rightSeatPairs.forEach(pair => {
          pair.forEach(s => { if (s.status === 'selected') s.status = 'available'; });
        });
      }

      if (seat.status === 'available') {
        seat.status = 'selected';
        this.selectedSeat = `${String.fromCharCode(65 + pairIndex * 2 + seatIndex)}${side === 'left' ? '' : ''}`;
      }
    },

    confirmSelection() {
      if (this.selectedSeat) {
        const confirmation = confirm(`Confirm seat ${this.selectedSeat}? You will proceed to checkout.`);
        if (confirmation) {
          this.$router.push({ name: 'Checkout' });
        }
      }
    },

    goToTripDetailsPage() {
      this.$router.push({ name: 'TripDetails' });
    },

    goBackToBooking() {
      this.$router.push({ name: 'BookTickets' });
    }
  }
};
</script>
