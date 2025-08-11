export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For now, just render the children without complex i18n setup
  return <>{children}</>;
}