<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-16 md:py-24">
      <div class="mx-auto max-w-6xl text-center text-white">
        <h1 class="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Get In Touch</h1>
        <p class="mt-4 text-lg text-emerald-100 md:text-xl">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Contact Form -->
        <div class="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
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
                v-model="formData.email"
                placeholder="Enter your email"
                required
                class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
              <select
                id="subject"
                v-model="formData.subject"
                class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="">Select a subject</option>
                <option value="booking">Booking Assistance</option>
                <option value="feedback">Feedback</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="mb-2 block text-sm font-semibold text-slate-700">Your Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="Tell us how we can help you..."
                rows="5"
                required
                class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:shadow-lg hover:from-emerald-700 hover:to-green-700"
            >
              <i class="bi bi-send me-2"></i>Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information Sidebar -->
        <div class="space-y-6">
          <!-- Phone -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <div class="mb-3 inline-flex items-center justify-center rounded-lg bg-emerald-100 p-3 text-emerald-600">
              <i class="bi bi-telephone-fill text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Phone</h3>
            <p class="text-slate-600 text-sm">+880 1234 567890</p>
            <p class="text-xs text-slate-500 mt-2">Available 24/7</p>
          </div>

          <!-- Email -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <div class="mb-3 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 text-blue-600">
              <i class="bi bi-envelope-fill text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Email</h3>
            <p class="text-slate-600 text-sm">support@ticketmaster.com</p>
            <p class="text-xs text-slate-500 mt-2">Response within 24 hours</p>
          </div>

          <!-- Address -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
            <div class="mb-3 inline-flex items-center justify-center rounded-lg bg-purple-100 p-3 text-purple-600">
              <i class="bi bi-geo-alt-fill text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Address</h3>
            <p class="text-slate-600 text-sm">123 Business Park<br/>Dhaka, Bangladesh</p>
            <p class="text-xs text-slate-500 mt-2">Office Hours: 9 AM - 6 PM</p>
          </div>

          <!-- Social Media -->
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Follow Us</h3>
            <div class="flex gap-3">
              <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                <i class="bi bi-facebook text-sm"></i>
              </a>
              <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                <i class="bi bi-twitter-x text-sm"></i>
              </a>
              <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                <i class="bi bi-instagram text-sm"></i>
              </a>
              <a href="#" class="grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                <i class="bi bi-linkedin text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="bg-slate-50 px-4 py-16 md:py-24">
      <div class="mx-auto max-w-3xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
          <p class="mt-2 text-lg text-slate-600">Find quick answers to common questions</p>
        </div>

        <div class="space-y-4">
          <details class="group rounded-lg border border-slate-200 bg-white shadow-sm">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900 hover:bg-slate-50">
              <span>How do I cancel my booking?</span>
              <span class="text-emerald-600 transition group-open:rotate-180">
                <i class="bi bi-chevron-down"></i>
              </span>
            </summary>
            <p class="border-t border-slate-200 px-6 py-4 text-slate-600">
              You can cancel your booking up to 24 hours before departure through your account dashboard or by contacting our support team.
            </p>
          </details>

          <details class="group rounded-lg border border-slate-200 bg-white shadow-sm">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900 hover:bg-slate-50">
              <span>What payment methods do you accept?</span>
              <span class="text-emerald-600 transition group-open:rotate-180">
                <i class="bi bi-chevron-down"></i>
              </span>
            </summary>
            <p class="border-t border-slate-200 px-6 py-4 text-slate-600">
              We accept all major credit cards, debit cards, mobile banking, and digital wallets like bKash and Nagad.
            </p>
          </details>

          <details class="group rounded-lg border border-slate-200 bg-white shadow-sm">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900 hover:bg-slate-50">
              <span>Is my personal information secure?</span>
              <span class="text-emerald-600 transition group-open:rotate-180">
                <i class="bi bi-chevron-down"></i>
              </span>
            </summary>
            <p class="border-t border-slate-200 px-6 py-4 text-slate-600">
              Yes, we use SSL encryption and follow international security standards to protect your data.
            </p>
          </details>

          <details class="group rounded-lg border border-slate-200 bg-white shadow-sm">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900 hover:bg-slate-50">
              <span>How will I receive my ticket?</span>
              <span class="text-emerald-600 transition group-open:rotate-180">
                <i class="bi bi-chevron-down"></i>
              </span>
            </summary>
            <p class="border-t border-slate-200 px-6 py-4 text-slate-600">
              Your ticket will be sent to your registered email immediately after booking confirmation.
            </p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
        alert('Please fill in all fields');
        return;
      }

      alert(`Thank you ${this.formData.name}! Your message has been sent. We'll get back to you soon.`);
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
  },
};
</script>
