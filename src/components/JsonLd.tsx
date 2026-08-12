import React from 'react'

/**
 * Renders a structured-data block. Rendered on the server (client components are
 * pre-rendered too), so the JSON-LD is present in the HTML crawlers receive.
 */
export default function JsonLd({ schema }: { schema: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
