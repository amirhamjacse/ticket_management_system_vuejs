<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
        <p class="mt-2 text-emerald-100">Find answers to common questions about our services</p>
      </div>
    </section>

    <div class="mx-auto max-w-4xl px-4 py-12">
      <!-- Search Box -->
      <div class="mb-12">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search FAQs..."
          class="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
        />
      </div>

      <!-- Category Tabs -->
      <div class="mb-8 flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 rounded-full font-semibold transition',
            activeCategory === cat
              ? 'bg-emerald-600 text-white'
              : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-500'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- FAQs List -->
      <div class="space-y-4">
        <details
          v-for="(faq, index) in filteredFaqs"
          :key="index"
          class="group rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
        >
          <summary class="flex cursor-pointer select-none items-center justify-between px-6 py-4 font-semibold text-slate-900 hover:text-emerald-600">
            <span class="flex items-center gap-3">
              <i :class="['bi', faq.icon, 'text-emerald-600']"></i>
              {{ faq.question }}
            </span>
            <i class="bi bi-plus-lg text-xl transition group-open:rotate-45 group-open:text-emerald-600"></i>
          </summary>
          <div class="border-t border-slate-200 px-6 py-4 text-slate-700">
            {{ faq.answer }}
          </div>
        </details>
      </div>

      <!-- No Results -->
      <div v-if="filteredFaqs.length === 0" class="rounded-lg border border-slate-200 bg-white p-12 text-center">
        <i class="bi bi-search text-4xl text-slate-300 mb-4 block"></i>
        <p class="text-lg text-slate-600 font-medium">No FAQs found for "{{ searchQuery }}"</p>
      </div>

      <!-- Contact Support -->
      <div class="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50 to-green-50 p-8 text-center">
        <i class="bi bi-chat-dots text-5xl text-emerald-600 mb-4 block"></i>
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Still Have Questions?</h3>
        <p class="text-slate-600 mb-6">Our support team is here to help. Contact us anytime!</p>
        <div class="flex flex-col gap-3 md:flex-row md:justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
          >
            <i class="bi bi-envelope"></i>Contact Us
          </router-link>
          <button
            @click="openChat"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
          >
            <i class="bi bi-chat-left-text"></i>Live Chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQs',
  data() {
    return {
      searchQuery: '',
      activeCategory: 'All',
      categories: ['All', 'Booking', 'Payment', 'Cancellation', 'Safety'],
      faqs: [
        {
          category: 'Booking',
          icon: 'bi-ticket-fill',
          question: 'How do I book a ticket?',
          answer: 'Visit our website, enter your travel details (from, to, date), select your preferred bus, choose your seat, fill passenger information, proceed to payment, and your ticket will be confirmed. You will receive an e-ticket via email immediately after payment.',
        },
        {
          category: 'Booking',
          icon: 'bi-calendar-check',
          question: 'Can I modify my booking?',
          answer: 'Yes, you can modify your booking up to 24 hours before departure. However, modifications are subject to seat availability and fare differences. Visit your dashboard and click "View Details" on your booking to modify it.',
        },
        {
          category: 'Booking',
          icon: 'bi-person-badge',
          question: 'What documents do I need to carry?',
          answer: 'You need to carry a valid ID proof (National ID, Passport, Driving License) along with your e-ticket. Some routes may require additional documents. Please check the specific route requirements on our website.',
        },
        {
          category: 'Booking',
          icon: 'bi-info-circle',
          question: 'Can I book a ticket for someone else?',
          answer: 'Yes, you can book tickets for family members or friends. However, the person traveling must have valid ID proof matching their name in the booking. The person whose name appears in the ticket must travel.',
        },
        {
          category: 'Payment',
          icon: 'bi-credit-card',
          question: 'What payment methods do you accept?',
          answer: 'We accept multiple payment methods including Credit/Debit Cards (Visa, Mastercard), Mobile Banking (bKash, Nagad, Rocket), Bank Transfer, and Digital Wallets (Google Pay, Apple Pay). All transactions are secure and encrypted.',
        },
        {
          category: 'Payment',
          icon: 'bi-shield-check',
          question: 'Is my payment information secure?',
          answer: 'Yes, all payment information is encrypted using SSL technology and PCI compliant. We do not store your credit card information on our servers. Your data is protected with industry-leading security standards.',
        },
        {
          category: 'Payment',
          icon: 'bi-receipt',
          question: 'Can I get an invoice for my booking?',
          answer: 'Yes, an invoice is automatically sent to your email after booking confirmation. You can also download the invoice from your dashboard. Click on "View Details" on any booking to download the invoice.',
        },
        {
          category: 'Payment',
          icon: 'bi-percent',
          question: 'Do you offer discounts or promotional codes?',
          answer: 'Yes! We regularly offer seasonal discounts and promotional codes. Check our "Offers" page for current deals. You can apply promo codes during checkout to get instant discounts on your ticket price.',
        },
        {
          category: 'Cancellation',
          icon: 'bi-x-circle',
          question: 'How can I cancel my booking?',
          answer: 'You can cancel your booking from your dashboard up to 6 hours before departure. Click "View Details" on your booking and select "Cancel". A refund will be processed after deducting applicable cancellation charges.',
        },
        {
          category: 'Cancellation',
          icon: 'bi-arrow-counterclockwise',
          question: 'What is your refund policy?',
          answer: 'Refunds are processed based on cancellation timing: Cancel 24+ hours before = Full refund, Cancel 6-24 hours before = 50% refund, Cancel within 6 hours = No refund. Refunds are processed within 5-7 business days.',
        },
        {
          category: 'Cancellation',
          icon: 'bi-clock-history',
          question: 'How long does refund take?',
          answer: 'Refunds are typically processed within 5-7 business days from the date of cancellation. For mobile banking (bKash, Nagad), refunds may appear within 24-48 hours. Check your payment account or contact support for status.',
        },
        {
          category: 'Safety',
          icon: 'bi-shield-exclamation',
          question: 'What COVID-19 safety measures are in place?',
          answer: 'All our buses undergo regular sanitization, have air filtration systems, and follow health guidelines. Masks are encouraged but not mandatory. Passengers are seated with adequate distance whenever possible.',
        },
        {
          category: 'Safety',
          icon: 'bi-geo-alt',
          question: 'Are GPS tracking available?',
          answer: 'Yes, all our buses are equipped with GPS tracking. Once you board the bus, you can track your journey in real-time through the "Track Bus" feature in our mobile app or website.',
        },
        {
          category: 'Safety',
          icon: 'bi-telephone-inbound',
          question: 'What should I do if I miss my bus?',
          answer: 'Contact our support team immediately at +880 1800-111-111. We can help you board the next available bus on the same route or provide a refund (subject to our policies).',
        },
        {
          category: 'All',
          icon: 'bi-question-circle',
          question: 'How do I contact customer support?',
          answer: 'You can reach our support team 24/7 via Phone: +880 1800-111-111, Email: support@ticketbus.com, or Live Chat on our website. We respond to inquiries within 2 hours.',
        },
      ],
    };
  },
  computed: {
    filteredFaqs() {
      return this.faqs.filter((faq) => {
        const matchesCategory = this.activeCategory === 'All' || faq.category === this.activeCategory;
        const matchesSearch =
          faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    },
  },
  methods: {
    openChat() {
      alert('Live chat feature coming soon!');
    },
  },
};
</script>
