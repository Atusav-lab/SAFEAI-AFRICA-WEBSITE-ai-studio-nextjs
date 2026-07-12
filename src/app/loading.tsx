export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #E0F2FE 0%, #f0f9ff 50%, #ffffff 100%)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Animated logo */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00499E, #00E5FF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: 20,
            fontWeight: 700,
            color: 'white',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          SA
        </div>
        <p
          style={{
            color: '#0061B2',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Loading...
        </p>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
