<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Hero Section with Cover -->
    <div class="relative bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 h-40 md:h-48">
      <div class="mx-auto max-w-6xl h-full flex items-end px-4 pb-8">
        <div class="flex items-end gap-6 w-full">
          <!-- Profile Avatar -->
          <div class="relative">
            <div class="h-24 w-24 md:h-32 md:w-32 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white">
              <i class="bi bi-person-fill text-4xl md:text-5xl"></i>
            </div>
            <button class="absolute bottom-0 right-0 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg transition">
              <i class="bi bi-camera-fill text-sm"></i>
            </button>
          </div>
          <!-- Profile Name -->
          <div class="flex-1 pb-2">
            <h1 class="text-2xl md:text-3xl font-bold text-white">{{ userData.name }}</h1>
            <p class="text-emerald-100 text-sm md:text-base">Member since {{ userData.joinDate }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Left Column - Personal Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Personal Information Card -->
          <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900">Personal Information</h2>
              <button @click="editMode = !editMode" class="px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg transition">
                <i class="bi" :class="editMode ? 'bi-x' : 'bi-pencil'"></i>
                {{ editMode ? 'Cancel' : 'Edit' }}
              </button>
            </div>

            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Full Name -->
                <div>
                  <label class="text-sm font-semibold text-slate-700 mb-2 block">Full Name</label>
                  <input
                    v-if="editMode"
                    v-model="editData.name"
                    type="text"
                    class="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  />
                  <p v-else class="text-slate-700 font-medium">{{ userData.name }}</p>
                </div>

                <!-- Email -->
                <div>
                  <label class="text-sm font-semibold text-slate-700 mb-2 block">Email Address</label>
                  <input
                    v-if="editMode"
                    v-model="editData.email"
                    type="email"
                    class="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  />
                  <p v-else class="text-slate-700 font-medium">{{ userData.email }}</p>
                </div>

                <!-- Phone -->
                <div>
                  <label class="text-sm font-semibold text-slate-700 mb-2 block">Phone Number</label>
                  <input
                    v-if="editMode"
                    v-model="editData.phone"
                    type="tel"
                    class="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  />
                  <p v-else class="text-slate-700 font-medium">{{ userData.phone }}</p>
                </div>

                <!-- Gender -->
                <div>
                  <label class="text-sm font-semibold text-slate-700 mb-2 block">Gender</label>
                  <select
                    v-if="editMode"
                    v-model="editData.gender"
                    class="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <p v-else class="text-slate-700 font-medium">{{ userData.gender }}</p>
                </div>

                <!-- Date of Birth -->
                <div>
                  <label class="text-sm font-semibold text-slate-700 mb-2 block">Date of Birth</label>
                  <input
                    v-if="editMode"
                    v-model="editData.dob"
                    type="date"
                    class="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  />
                  <p v-else class="text-slate-700 font-medium">{{ userData.dob }}</p>
                </div>

                <!-- Address -->
                <div>
                  <label class="text-sm font-semibold text-slate-700 mb-2 block">Address</label>
                  <input
                    v-if="editMode"
                    v-model="editData.address"
                    type="text"
                    class="w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                  />
                  <p v-else class="text-slate-700 font-medium">{{ userData.address }}</p>
                </div>
              </div>

              <!-- Save Button (only in edit mode) -->
              <div v-if="editMode" class="pt-4">
                <button
                  @click="saveProfile"
                  class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition"
                >
                  <i class="bi bi-check-lg me-2"></i>Save Changes
                </button>
              </div>
            </div>
          </div>

          <!-- Documents/Verification -->
          <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Verification Documents</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="rounded-lg border-2 border-dashed border-slate-300 p-6 text-center hover:border-emerald-500 hover:bg-emerald-50 transition cursor-pointer">
                <i class="bi bi-file-earmark-pdf text-3xl text-red-500 mb-2 block"></i>
                <p class="text-sm font-semibold text-slate-700">Upload ID Card</p>
                <input type="file" class="hidden" accept=".pdf,.jpg,.png"/>
              </div>
              <div class="rounded-lg border-2 border-dashed border-slate-300 p-6 text-center hover:border-emerald-500 hover:bg-emerald-50 transition cursor-pointer">
                <i class="bi bi-file-earmark-pdf text-3xl text-red-500 mb-2 block"></i>
                <p class="text-sm font-semibold text-slate-700">Upload Passport</p>
                <input type="file" class="hidden" accept=".pdf,.jpg,.png"/>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Stats & Quick Links -->
        <div class="space-y-6">
          <!-- Account Stats -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-6">Account Summary</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div class="flex items-center gap-3">
                  <div class="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <i class="bi bi-ticket-fill"></i>
                  </div>
                  <div>
                    <p class="text-xs text-slate-500">Total Bookings</p>
                    <p class="text-xl font-bold text-slate-900">{{ userData.totalBookings }}</p>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div class="flex items-center gap-3">
                  <div class="rounded-lg bg-green-100 p-3 text-green-600">
                    <i class="bi bi-check-circle-fill"></i>
                  </div>
                  <div>
                    <p class="text-xs text-slate-500">Completed Trips</p>
                    <p class="text-xl font-bold text-slate-900">{{ userData.completedTrips }}</p>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between pb-4 border-b border-slate-200">
                <div class="flex items-center gap-3">
                  <div class="rounded-lg bg-orange-100 p-3 text-orange-600">
                    <i class="bi bi-hourglass-split"></i>
                  </div>
                  <div>
                    <p class="text-xs text-slate-500">Upcoming Trips</p>
                    <p class="text-xl font-bold text-slate-900">{{ userData.upcomingTrips }}</p>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="rounded-lg bg-purple-100 p-3 text-purple-600">
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <div>
                    <p class="text-xs text-slate-500">Loyalty Points</p>
                    <p class="text-xl font-bold text-slate-900">{{ userData.loyaltyPoints }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
            <div class="space-y-3">
              <router-link
                to="/dashboard"
                class="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition"
              >
                <span class="flex items-center gap-2">
                  <i class="bi bi-graph-up"></i>
                  My Bookings
                </span>
                <i class="bi bi-chevron-right"></i>
              </router-link>
              
              <router-link
                to="/settings"
                class="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition"
              >
                <span class="flex items-center gap-2">
                  <i class="bi bi-gear"></i>
                  Settings
                </span>
                <i class="bi bi-chevron-right"></i>
              </router-link>

              <button
                @click="downloadInvoice"
                class="w-full text-left flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition"
              >
                <span class="flex items-center gap-2">
                  <i class="bi bi-file-earmark-pdf"></i>
                  Download Invoice
                </span>
                <i class="bi bi-chevron-right"></i>
              </button>

              <button
                @click="logout"
                class="w-full text-left flex items-center justify-between p-3 rounded-lg hover:bg-red-50 text-slate-700 hover:text-red-600 transition"
              >
                <span class="flex items-center gap-2">
                  <i class="bi bi-box-arrow-right"></i>
                  Logout
                </span>
                <i class="bi bi-chevron-right"></i>
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
  name: 'Profile',
  data() {
    return {
      editMode: false,
      userData: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+880 1234 567890',
        gender: 'Male',
        dob: '1995-05-15',
        address: 'Dhaka, Bangladesh',
        joinDate: 'January 2024',
        totalBookings: 12,
        completedTrips: 10,
        upcomingTrips: 2,
        loyaltyPoints: 850,
      },
      editData: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+880 1234 567890',
        gender: 'Male',
        dob: '1995-05-15',
        address: 'Dhaka, Bangladesh',
      },
    };
  },
  methods: {
    saveProfile() {
      Object.assign(this.userData, this.editData);
      this.editMode = false;
      alert('Profile updated successfully!');
    },
    downloadInvoice() {
      alert('Downloading invoice...');
    },
    logout() {
      alert('Logged out successfully');
      this.$router.push('/');
    },
  },
  mounted() {
    this.editData = { ...this.userData };
  },
};
</script>
