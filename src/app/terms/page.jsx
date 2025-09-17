"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TermsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handlePay() {
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemName: "Neet-UG Premium Subscription",
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || null,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // redirect to Stripe checkout
      } else {
        alert("Failed to create checkout session");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.backBtn} onClick={() => router.back()}>
          ←
        </button>
        <h1 style={styles.title}>Terms and Conditions</h1>
      </header>

      <main style={styles.container}>
        <section style={styles.card}>
          <div style={styles.termsScroll}>
            <p style={styles.paragraph}>
              Please be informed that as a user you are using our services and
              hence, trust us. Therefore, it becomes pertinent that we are able
              to provide you with the best quality services with minimal effort.
              We endeavour to ensure that every user experience is smooth and
              hassle-free. These Terms and Condition of Use guide user behaviour
              and in the process lay down certain parameters and guidelines,
              which would be beneficial to both, you and us, the Company.
            </p>

            <p style={styles.paragraph}>
              Neet-UG (operated by Neet-UG Technologies Pvt. Ltd.) provides a
              learning platform for medical entrance preparation. By purchasing
              a subscription or making any payment you agree to these Terms of
              Use and all policies referenced herein. Please read carefully
              before purchasing.
            </p>

            <h3 style={styles.subheading}>Payment & Subscription</h3>
            <p style={styles.paragraph}>
              Payments are processed by our payment partner (Stripe). When you
              complete a purchase you authorize us to charge your chosen payment
              method for the total amount. Subscription renewals will be charged
              automatically until canceled.
            </p>

            <h3 style={styles.subheading}>Refunds & Cancellations</h3>
            <p style={styles.paragraph}>
              Refunds are handled per our Refund Policy. If you believe you are
              eligible for a refund, contact support within 7 days of purchase.
              Certain content purchases may be non-refundable (explicitly
              stated).
            </p>

            <h3 style={styles.subheading}>User Accounts</h3>
            <p style={styles.paragraph}>
              You are responsible for keeping your account login confidential.
              We may suspend accounts for policy violations. Terms can be
              updated — we will notify users of material changes.
            </p>

            <p style={styles.smallNote}>
              The above text is a sample. Replace it with your complete Terms &
              Conditions text before going live.
            </p>
          </div>

          <div style={styles.paymentBar}>
            <div>
              <div style={styles.priceLabel}>Neet-UG Premium</div>
              <div style={styles.price}>₹499 / 1 month</div>
            </div>
            <div>
              <button
                onClick={handlePay}
                style={styles.payBtn}
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay with Card"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#fff",
    fontFamily:
      "Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#6B4B7A",
    color: "#fff",
    padding: "18px 16px",
  },
  backBtn: {
    background: "rgba(255,255,255,0.2)",
    border: "none",
    color: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    cursor: "pointer",
    fontSize: 18,
  },
  title: { margin: 0, fontSize: 18, fontWeight: 600 },
  container: { padding: 20, display: "flex", justifyContent: "center" },
  card: {
    width: "100%",
    maxWidth: 820,
    borderRadius: 12,
    border: "1px solid #eee",
    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
    overflow: "hidden",
    background: "#fff",
  },
  termsScroll: {
    padding: 24,
    maxHeight: "62vh",
    overflowY: "auto",
    lineHeight: 1.7,
    color: "#333",
  },
  paragraph: { marginBottom: 14 },
  subheading: { marginTop: 8, marginBottom: 6, fontWeight: 600 },
  smallNote: { fontSize: 13, color: "#666" },
  paymentBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    borderTop: "1px solid #f0f0f0",
    background: "#fafafa",
  },
  priceLabel: { fontSize: 14, color: "#444", fontWeight: 600 },
  price: { fontSize: 16, color: "#111", marginTop: 6 },
  payBtn: {
    background: "#6B4B7A",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },
};
