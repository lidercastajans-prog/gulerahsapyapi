// Studio kendi layout'unu kullanır — site Header/Footer'ı sızmasın.
export const metadata = {
  robots: { index: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
