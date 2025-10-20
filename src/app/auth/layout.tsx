import { Card } from "@/components/ui/card";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#23098c] min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md mx-auto p-6 rounded-lg bg-white">{children}</Card>
    </div>
  );
}
