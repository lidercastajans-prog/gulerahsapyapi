/**
 * Sanity Studio — /admin altında çalışır.
 *
 * Server Component bu sayfanın metadata + viewport'unu kontrol eder.
 * Asıl Studio render'ı client component'e taşındı (createContext gerektiriyor).
 */
import Studio from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
