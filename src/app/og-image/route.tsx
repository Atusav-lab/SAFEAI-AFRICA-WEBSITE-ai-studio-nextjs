import { ImageResponse } from 'next/og'
import { SITE_NAME } from '@/lib/site'

/**
 * Default 1200x630 social share card (LinkedIn, Facebook, X/Twitter, WhatsApp).
 *
 * Served from a route handler rather than the `opengraph-image` file convention
 * on purpose: file-convention images override page-level metadata, which would
 * replace the specific product/article images set by individual pages.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #00296b 0%, #00499E 45%, #0075ba 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.14)',
              border: '2px solid rgba(0,229,255,0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            AI
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 1 }}>{SITE_NAME}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.12, maxWidth: 950 }}>
            Empowering Africa with responsible artificial intelligence
          </div>
          <div style={{ fontSize: 28, color: '#b9e6ff', maxWidth: 900 }}>
            Genomics · Healthcare · Agriculture · Education · Enterprise AI
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#9fd8ff',
            borderTop: '1px solid rgba(255,255,255,0.18)',
            paddingTop: 26,
          }}
        >
          <div>safeaiafrica.com</div>
          <div>Kampala, Uganda</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'cache-control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    },
  )
}
