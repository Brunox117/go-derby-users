import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
