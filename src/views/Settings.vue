<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-4xl font-bold md:text-5xl">Settings</h1>
        <p class="mt-2 text-emerald-100">Manage your account preferences and security</p>
      </div>
    </section>

    <div class="mx-auto max-w-4xl px-4 py-12">
      <div class="grid gap-8 lg:grid-cols-4">
        <!-- Sidebar Navigation -->
        <div class="lg:col-span-1">
          <nav class="space-y-2 sticky top-24">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition',
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              ]"
            >
              <i :class="['bi', tab.icon]"></i>
              {{ tab.label }}
            </button>
          </nav>
        </div>

        <!-- Content Area -->
        <div class="lg:col-span-3 space-y-8">
          <!-- Account Settings -->
          <div v-if="activeTab === 'account'" class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Account Settings</h2>
            
            <div class="space-y-6">
              <!-- Email Preferences -->
              <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Email Preferences</h3>
                <div class="space-y-4">
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.emailNotifications" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Receive booking confirmations</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.promotionalEmails" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Receive promotional offers</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.newsLetterEmails" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Subscribe to our newsletter</span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <h3 class="text-lg font-semibold text-slate-900 mb-4">SMS Notifications</h3>
                <div class="space-y-4">
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.smsNotifications" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Receive booking alerts via SMS</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.remindersSMS" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Send trip reminders</span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <button @click="saveSettings" class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>

          <!-- Security Settings -->
          <div v-if="activeTab === 'security'" class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Security Settings</h2>
            
            <div class="space-y-6">
              <!-- Change Password -->
              <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Change Password</h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2">Current Password</label>
                    <input type="password" placeholder="Enter your current password" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2">New Password</label>
                    <input type="password" placeholder="Enter new password" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
                    <input type="password" placeholder="Confirm new password" class="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition" />
                  </div>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Two-Factor Authentication</h3>
                <p class="text-slate-600 mb-4">Add an extra layer of security to your account</p>
                <button class="rounded-lg border border-emerald-600 px-6 py-2 font-semibold text-emerald-600 hover:bg-emerald-50 transition">
                  <i class="bi bi-shield-check me-2"></i>Enable 2FA
                </button>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Active Sessions</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                    <div>
                      <p class="font-semibold text-slate-900">Chrome on Windows</p>
                      <p class="text-sm text-slate-600">Current session • 192.168.1.1</p>
                    </div>
                    <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Active</span>
                  </div>
                  <div class="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                    <div>
                      <p class="font-semibold text-slate-900">Safari on iPhone</p>
                      <p class="text-sm text-slate-600">Last active 2 days ago • 203.0.113.42</p>
                    </div>
                    <button class="text-sm font-semibold text-red-600 hover:text-red-700">Logout</button>
                  </div>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <button @click="changePassword" class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          <!-- Privacy Settings -->
          <div v-if="activeTab === 'privacy'" class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Privacy Settings</h2>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Profile Visibility</h3>
                <div class="space-y-4">
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="visibility" value="public" class="w-4 h-4 text-emerald-600" />
                    <span class="text-slate-700">Public Profile</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="visibility" value="private" class="w-4 h-4 text-emerald-600" checked />
                    <span class="text-slate-700">Private Profile</span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Data & Privacy</h3>
                <div class="space-y-4">
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.personalization" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Allow personalized recommendations</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer">
                    <input v-model="settings.analytics" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    <span class="text-slate-700">Help us improve with usage analytics</span>
                  </label>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <button @click="downloadData" class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition">
                  <i class="bi bi-download text-lg"></i>
                  <div>
                    <p class="font-semibold text-slate-900">Download Your Data</p>
                    <p class="text-xs text-slate-600">Get a copy of your personal data</p>
                  </div>
                </button>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <button class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition">
                  Save Privacy Settings
                </button>
              </div>
            </div>
          </div>

          <!-- Billing Settings -->
          <div v-if="activeTab === 'billing'" class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Billing & Payment</h2>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Payment Methods</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                    <div class="flex items-center gap-4">
                      <div class="rounded-lg bg-blue-100 p-3 text-blue-600 text-xl">
                        <i class="bi bi-credit-card-2-front"></i>
                      </div>
                      <div>
                        <p class="font-semibold text-slate-900">Visa Card</p>
                        <p class="text-sm text-slate-600">•••• •••• •••• 4242</p>
                      </div>
                    </div>
                    <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Default</span>
                  </div>
                  <button class="w-full text-left px-4 py-4 rounded-lg border-2 border-dashed border-slate-300 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition">
                    <i class="bi bi-plus-lg me-2"></i>Add Payment Method
                  </button>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <h3 class="text-lg font-semibold text-slate-900 mb-4">Billing History</h3>
                <div class="space-y-2">
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition">
                    <span class="text-slate-700">Invoice #INV-2026-05-001</span>
                    <span class="text-slate-600 text-sm">May 10, 2026 • ৳2,500</span>
                  </a>
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition">
                    <span class="text-slate-700">Invoice #INV-2026-04-025</span>
                    <span class="text-slate-600 text-sm">Apr 28, 2026 • ৳1,800</span>
                  </a>
                </div>
              </div>

              <div class="border-t border-slate-200 pt-6">
                <button @click="saveBilling" class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <!-- Danger Zone -->
          <div v-if="activeTab === 'account'" class="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
            <h2 class="text-2xl font-bold text-red-900 mb-6">Danger Zone</h2>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between rounded-lg border border-red-300 bg-white p-4">
                <div>
                  <p class="font-semibold text-slate-900">Delete Account</p>
                  <p class="text-sm text-slate-600">Permanently delete your account and all data</p>
                </div>
                <button @click="deleteAccount" class="rounded-lg border border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-50 transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      activeTab: 'account',
      tabs: [
        { id: 'account', label: 'Account', icon: 'bi-person-circle' },
        { id: 'security', label: 'Security', icon: 'bi-shield-lock' },
        { id: 'privacy', label: 'Privacy', icon: 'bi-eye-slash' },
        { id: 'billing', label: 'Billing', icon: 'bi-credit-card' },
      ],
      settings: {
        emailNotifications: true,
        promotionalEmails: true,
        newsLetterEmails: false,
        smsNotifications: true,
        remindersSMS: true,
        personalization: true,
        analytics: true,
      },
    };
  },
  methods: {
    saveSettings() {
      alert('Settings saved successfully!');
    },
    changePassword() {
      alert('Password updated successfully!');
    },
    downloadData() {
      alert('Your data download is being prepared. You will receive an email with a download link soon.');
    },
    saveBilling() {
      alert('Billing settings saved!');
    },
    deleteAccount() {
      if (confirm('Are you absolutely sure? This action cannot be undone.')) {
        if (confirm('Your account and all associated data will be permanently deleted. Type DELETE to confirm.')) {
          alert('Account deletion request submitted. We will process this within 30 days.');
          this.$router.push('/');
        }
      }
    },
  },
};
</script>
