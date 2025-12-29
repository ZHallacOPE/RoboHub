export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 760,
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,.12)",
          background: "rgba(255,255,255,.06)",
          boxShadow: "0 18px 55px rgba(0,0,0,.45)",
          padding: 22,
        }}
      >
        <h1 style={{ margin: 0, fontSize: 22, letterSpacing: 0.2 }}>
          Robotic Mower Hub
        </h1>
        <p style={{ marginTop: 8, opacity: 0.75 }}>hub.robomaintain.com</p>
        <p style={{ marginTop: 14, opacity: 0.85, lineHeight: 1.5 }}>
          ✅ Repo scaffold is live. Next.js is working.
          <br />
          Next step: we&apos;ll drop in your full Hub UI and wire Shopify headless commerce.
        </p>
      </div>
    </main>
  );
}
