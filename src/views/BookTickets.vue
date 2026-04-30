<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header Section -->
    <section class="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-12">
      <div class="mx-auto max-w-6xl">
        <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">Find Your Perfect Route</h1>
        <p class="mt-2 text-slate-600">Search and compare routes with real-time availability</p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-8">
      <!-- Search Form -->
      <form @submit.prevent="searchBuses" class="mb-8 rounded-2xl border border-emerald-100 bg-white p-6 shadow-soft md:p-8">
        <div class="grid gap-4 md:grid-cols-2">
          <div>
            <label for="fromDestination" class="mb-2 block text-sm font-semibold text-slate-700">From</label>
            <input
              type="text"
              id="fromDestination"
              v-model="fromDestination"
              placeholder="Enter departure city"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label for="toDestination" class="mb-2 block text-sm font-semibold text-slate-700">To</label>
            <input
              type="text"
              id="toDestination"
              v-model="toDestination"
              placeholder="Enter destination city"
              class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label for="departureDate" class="mb-2 block text-sm font-semibold text-slate-700">Departure Date</label>
            <input type="date" id="departureDate" v-model="departureDate" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
          </div>
          <div>
            <label for="returnDate" class="mb-2 block text-sm font-semibold text-slate-700">Return Date (Optional)</label>
            <input type="date" id="returnDate" v-model="returnDate" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
          </div>
          <div>
            <label for="transportType" class="mb-2 block text-sm font-semibold text-slate-700">Choose Transport</label>
            <select id="transportType" v-model="transportType" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100">
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="flight">Flight</option>
            </select>
          </div>
          <div class="flex items-end">
            <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:shadow-lg hover:from-emerald-700 hover:to-green-700 active:scale-95">
              <i class="bi bi-search me-2"></i>Search Routes
            </button>
          </div>
        </div>
      </form>

      <!-- Results Section -->
      <div v-if="busList.length > 0" class="grid gap-6 lg:grid-cols-[280px_1fr]">
        <!-- Filters Sidebar -->
        <aside v-if="showFilter" class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-20 h-fit">
          <h3 class="flex items-center justify-between text-lg font-bold text-slate-900">
            <span>Filters</span>
            <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">Active</span>
          </h3>

          <div class="mt-6 space-y-5 border-t border-slate-200 pt-5">
            <div>
              <label for="priceFilter" class="mb-2 block text-sm font-semibold text-slate-700">Price</label>
              <select id="priceFilter" v-model="priceFilter" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500">
                <option value="all">All</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>

            <div>
              <label for="seatFilter" class="mb-3 block text-sm font-semibold text-slate-700">Available Seats: {{ seatFilter }}</label>
              <input id="seatFilter" v-model="seatFilter" type="range" min="0" max="50" class="w-full accent-emerald-600" />
            </div>

            <div>
              <label for="acFilter" class="mb-2 block text-sm font-semibold text-slate-700">AC / Non-AC</label>
              <select id="acFilter" v-model="acFilter" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500">
                <option value="all">All</option>
                <option value="ac">AC</option>
                <option value="non-ac">Non-AC</option>
              </select>
            </div>

            <div>
              <label for="busNameFilter" class="mb-2 block text-sm font-semibold text-slate-700">Bus Name</label>
              <input
                type="text"
                id="busNameFilter"
                v-model="busNameFilter"
                placeholder="Search bus name"
                class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-500"
              />
            </div>
          </div>
        </aside>

        <!-- Results Cards -->
        <div>
          <div class="mb-6 flex items-center justify-between">
            <h2 class="text-xl font-bold text-slate-900">
              Available {{ transportType.charAt(0).toUpperCase() + transportType.slice(1) }}s
              <span class="ml-2 text-sm font-normal text-slate-600">({{ filteredBusList.length }} results)</span>
            </h2>
          </div>

          <div class="space-y-4">
            <div v-for="(bus, index) in filteredBusList" :key="index" class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-emerald-300">
              <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-xl font-bold text-slate-900">{{ bus.name }}</h3>
                    <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">{{ bus.ac }}</span>
                  </div>
                  <p class="mt-2 text-sm text-slate-600">
                    <i class="bi bi-geo-alt me-1"></i>
                    <span class="font-medium">{{ bus.from }}</span> → <span class="font-medium">{{ bus.to }}</span>
                  </p>
                </div>
                <div class="text-right md:whitespace-nowrap">
                  <p class="text-3xl font-bold text-emerald-600">৳{{ bus.price }}</p>
                  <p class="text-sm text-slate-500">{{ bus.availableSeats }} seats available</p>
                </div>
              </div>

              <div class="mt-4 grid grid-cols-3 gap-3 rounded-lg bg-slate-50 p-4">
                <div>
                  <p class="text-xs uppercase tracking-wider text-slate-500">Departure</p>
                  <p class="mt-1 font-semibold text-slate-900">{{ bus.departureTime }}</p>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-wider text-slate-500">Duration</p>
                  <p class="mt-1 font-semibold text-slate-900">{{ bus.duration }}</p>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-wider text-slate-500">Seats Left</p>
                  <p class="mt-1 font-semibold text-slate-900">{{ bus.availableSeats }}</p>
                </div>
              </div>

              <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-wrap gap-2">
                  <button class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                    <i class="bi bi-ban me-1"></i>Cancellation Policy
                  </button>
                  <button class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                    <i class="bi bi-geo me-1"></i>Boarding Point
                  </button>
                  <button class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                    <i class="bi bi-flag me-1"></i>Dropping Point
                  </button>
                  <button class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                    <i class="bi bi-lightbulb me-1"></i>Amenities
                  </button>
                </div>
                <button @click="Bookbus" class="rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-2.5 font-semibold text-white shadow-soft transition hover:shadow-lg hover:from-emerald-700 hover:to-green-700">
                  <i class="bi bi-ticket me-1"></i>Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-else-if="searched && busList.length === 0" class="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center">
        <i class="bi bi-exclamation-triangle mb-3 text-2xl text-yellow-600"></i>
        <h3 class="mt-2 text-lg font-semibold text-yellow-900">No {{ transportType.charAt(0).toUpperCase() + transportType.slice(1) }}s Found</h3>
        <p class="mt-1 text-sm text-yellow-700">No {{ transportType }}s available for the selected route and date. Please try different dates or routes.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookTickets",
  data() {
    return {
      fromDestination: "",
      toDestination: "",
      departureDate: "",
      returnDate: "",
      transportType: "bus",
      busList: [],
      searched: false,
      showFilter: false,
      priceFilter: "all",
      seatFilter: 0,
      acFilter: "all",
      busNameFilter: "",
    };
  },
  computed: {
    filteredBusList() {
      let filtered = this.busList;

      if (this.priceFilter === "low") {
        filtered = filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      } else if (this.priceFilter === "high") {
        filtered = filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      }

      filtered = filtered.filter(bus => bus.availableSeats >= this.seatFilter);

      if (this.acFilter !== "all") {
        filtered = filtered.filter(bus => bus.ac === this.acFilter);
      }

      if (this.busNameFilter) {
        filtered = filtered.filter(bus => bus.name.toLowerCase().includes(this.busNameFilter.toLowerCase()));
      }

      return filtered;
    },
  },
  methods: {
    searchBuses() {
      this.showFilter = true;

      if (this.transportType === "bus") {
        this.busList = [
          { id: 1, name: "Manik Express", departureTime: "01:00 PM", duration: "5h 0m", price: "800", availableSeats: 21, from: "Dhaka", to: "Chittagong", route: "Dhaka -> Chittagong", ac: "ac" },
          { id: 2, name: "Akota Transport", departureTime: "02:00 PM", duration: "5h 0m", price: "550", availableSeats: 40, from: "Dhaka", to: "Sylhet", route: "Dhaka -> Sylhet", ac: "non-ac" },
          { id: 3, name: "Hanif Enterprise", departureTime: "02:00 PM", duration: "8h 40m", price: "550", availableSeats: 34, from: "Dhaka", to: "Rajshahi", route: "Dhaka -> Rajshahi", ac: "ac" },
          { id: 4, name: "Orin Travels", departureTime: "02:15 PM", duration: "5h 15m", price: "550", availableSeats: 36, from: "Dhaka", to: "Khulna", route: "Dhaka -> Khulna", ac: "non-ac" },
        ];
      }

      this.searched = true;
    },
    Bookbus() {
      this.$router.push({ name: 'SeatSelection' });
    },
  },
};
</script>
