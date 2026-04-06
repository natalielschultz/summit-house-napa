import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | A-Frame of Napa",
  description: "Terms and conditions for booking and staying at the A-Frame of Napa.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: "noindex, follow",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <h1 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink mb-8">
          Terms &amp; Conditions
        </h1>
        <div className="space-y-6 font-sans text-base text-text leading-relaxed">
          <p>
            By booking a stay at the A-Frame of Napa, you agree to the following
            terms and conditions. These terms govern the relationship between the
            guest and the property owner for all direct bookings made through
            aframeofnapa.com.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Booking & Payment</h2>
          <p>
            A 50% deposit is required to confirm your reservation. The remaining
            balance is due 30 days prior to check-in. All payments are processed
            securely. Rates are quoted per calendar month and may vary based on
            season and length of stay.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Cancellation Policy</h2>
          <p>
            Cancellations made 60 or more days before check-in receive a full
            refund of the deposit. Cancellations made 30-59 days before check-in
            receive a 50% refund of the deposit. Cancellations made fewer than 30
            days before check-in are non-refundable. Contact your host directly to
            discuss any changes to your reservation.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">House Rules</h2>
          <p>
            Check-in is at 4:00 PM and check-out is at 11:00 AM. The property is
            non-smoking. Quiet hours are observed from 10:00 PM to 8:00 AM out of
            respect for the natural surroundings. Maximum occupancy is 11 guests.
            Pet inquiries are considered on a case-by-case basis.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Property Care</h2>
          <p>
            Guests are expected to treat the property with care and respect.
            Guests are responsible for any damage beyond normal wear and tear. The
            hot tub, sauna, and outdoor amenities should be used in accordance
            with posted guidelines.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Liability</h2>
          <p>
            The property owner is not liable for personal injury, loss, or damage
            to personal property during your stay. The mountain road and outdoor
            amenities are used at your own risk. Travel insurance is recommended.
          </p>

          <h2 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink pt-4">Contact</h2>
          <p>
            For questions about these terms, please contact us at{" "}
            <a
              href="mailto:stay@aframeofnapa.com"
              className="text-brass hover:text-ink transition-colors"
            >
              stay@aframeofnapa.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
