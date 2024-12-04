export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen relative">
      <div>
        tut content
      </div>
      <div className="w-screen h-14 absolute bottom-0 right-0">
        { children }
      </div>
    </div>
  );
}