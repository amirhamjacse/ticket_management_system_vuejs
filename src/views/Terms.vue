<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 px-4 py-12 md:py-16">
      <div class="mx-auto max-w-6xl text-white">
        <h1 class="text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
        <p class="mt-2 text-emerald-100">Last updated: April 30, 2026</p>
      </div>
    </section>

    <div class="mx-auto max-w-4xl px-4 py-12">
      <!-- Table of Contents -->
      <div class="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-bold text-slate-900 mb-4">Table of Contents</h2>
        <nav class="space-y-2">
          <a
            v-for="(section, index) in sections"
            :key="index"
            href="#"
            @click.prevent="scrollToSection(section.id)"
            class="block text-emerald-600 hover:text-emerald-700 font-medium transition"
          >
            {{ index + 1 }}. {{ section.title }}
          </a>
        </nav>
      </div>

      <!-- Content Sections -->
      <div class="space-y-8">
        <section v-for="(section, index) in sections" :key="index" :id="section.id" class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm scroll-mt-20">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">{{ index + 1 }}. {{ section.title }}</h2>
          <div class="text-slate-700 space-y-4">
            <p v-for="(paragraph, pIndex) in section.content" :key="pIndex" class="leading-relaxed">
              {{ paragraph }}
            </p>
          </div>
        </section>
      </div>

      <!-- Acceptance -->
      <div class="mt-12 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-8">
        <div class="flex gap-4">
          <i class="bi bi-check-circle text-3xl text-emerald-600 shrink-0"></i>
          <div>
            <h3 class="text-lg font-bold text-emerald-900 mb-2">Acceptance of Terms</h3>
            <p class="text-emerald-800">
              By using our website and booking services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to any of these terms, please do not use our services.
            </p>
          </div>
        </div>
      </div>

      <!-- Support -->
      <div class="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 p-8 text-center">
        <h3 class="text-xl font-bold text-slate-900 mb-2">Questions About Our Terms?</h3>
        <p class="text-slate-600 mb-6">Contact our legal team or support department for any clarifications.</p>
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
        >
          <i class="bi bi-envelope"></i>Contact Support
        </router-link>
      </div>

      <!-- Back Button -->
      <div class="mt-8 text-center">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition"
        >
          <i class="bi bi-arrow-left"></i>Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsAndConditions',
  data() {
    return {
      sections: [
        {
          id: 'use-of-service',
          title: 'Use of Service',
          content: [
            'You agree to use our website and services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behavior includes: harassing or causing distress or inconvenience; transmitting obscene or offensive content; and disrupting the flow of dialogue within our website.',
            'Our services are available only to individuals who are at least 18 years old or have the consent of a parent or guardian. By using our services, you represent and warrant that you meet these requirements.',
          ],
        },
        {
          id: 'booking-ticket',
          title: 'Booking & Ticketing',
          content: [
            'A booking is only confirmed once payment is received and an e-ticket is issued. We reserve the right to decline any booking request at our discretion. Your ticket is valid only for the journey specified and is non-transferable.',
            'Each ticket is issued to a specific passenger and must be presented along with valid ID proof during check-in. The person whose name appears on the ticket must travel. Tickets cannot be sold, transferred, or used for any other purpose.',
            'All information provided during booking must be accurate and complete. We are not responsible for any delays or cancellations caused by incorrect passenger information.',
          ],
        },
        {
          id: 'cancellation-refund',
          title: 'Cancellation & Refund Policy',
          content: [
            'Cancellations must be made at least 6 hours before the scheduled departure time. Cancellation requests made less than 6 hours before departure will not be processed.',
            'Refunds are subject to cancellation charges: Cancellation 24+ hours before departure = Full refund minus platform fee; Cancellation 6-24 hours before departure = 50% of ticket price; Cancellation within 6 hours = No refund.',
            'Refunds will be credited to the original payment method within 5-7 business days. The company is not responsible for any delays in refund processing by financial institutions.',
            'No refund is provided if the passenger fails to board the bus without prior cancellation.',
          ],
        },
        {
          id: 'payment',
          title: 'Payment Terms',
          content: [
            'All prices are quoted in Bangladeshi Taka (৳) unless otherwise stated. Prices are subject to change without notice. Current prices are applicable only at the time of booking.',
            'We accept various payment methods including credit/debit cards, mobile banking services, bank transfers, and digital wallets. All transactions are processed through secure, PCI-compliant payment gateways.',
            'You are responsible for maintaining the confidentiality of your payment information. We are not liable for any unauthorized transactions resulting from your negligence in protecting your payment details.',
          ],
        },
        {
          id: 'liability',
          title: 'Limitation of Liability',
          content: [
            'We are not responsible for any loss, damage, or injury suffered by passengers resulting from circumstances beyond our control, including but not limited to: natural disasters, accidents, theft, or loss of personal belongings.',
            'Our liability is limited to the value of the ticket purchased. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.',
            'We are not responsible for any delays or changes to the scheduled journey caused by traffic, weather conditions, mechanical issues, or other unforeseen circumstances.',
          ],
        },
        {
          id: 'passenger-conduct',
          title: 'Passenger Conduct',
          content: [
            'Passengers must behave in a manner that is respectful to other passengers and crew members. Any aggressive, abusive, or inappropriate behavior will result in immediate removal from the bus without refund.',
            'Smoking, drinking alcohol, and use of any prohibited substances are strictly not allowed on the bus. Violation of these rules may result in legal action.',
            'Passengers must follow all safety instructions provided by crew members. Failure to comply may result in removal from the bus.',
            'We reserve the right to refuse service to any passenger who is under the influence of alcohol or drugs, or who exhibits threatening or abusive behavior.',
          ],
        },
        {
          id: 'data-privacy',
          title: 'Data Privacy & Security',
          content: [
            'Your personal information collected during booking is used solely for the purpose of processing your ticket and providing customer service. We do not share your information with third parties without your consent, except as required by law.',
            'We use industry-standard security measures to protect your personal and payment information. However, we cannot guarantee 100% security of any information transmitted online.',
            'By using our services, you consent to the collection and use of your information as described in our Privacy Policy.',
          ],
        },
        {
          id: 'intellectual-property',
          title: 'Intellectual Property Rights',
          content: [
            'All content on our website, including text, graphics, logos, images, and software, is the property of the company and protected by international copyright laws.',
            'You may not reproduce, distribute, or transmit any content without our prior written permission. Unauthorized use of our intellectual property may result in legal action.',
          ],
        },
        {
          id: 'changes-terms',
          title: 'Changes to Terms',
          content: [
            'We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the new terms.',
            'We recommend that you review these terms periodically to stay informed of any updates.',
          ],
        },
        {
          id: 'governing-law',
          title: 'Governing Law & Jurisdiction',
          content: [
            'These Terms & Conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangladesh.',
            'By using our services, you consent to the jurisdiction of the Bangladesh courts and waive any objection to venue.',
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>
