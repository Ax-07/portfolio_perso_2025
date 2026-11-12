import ScrollToTopBtn from "@/components/customs/ScrollToTopBtn";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTopBtn />
    </>
  );
}
