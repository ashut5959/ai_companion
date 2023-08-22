import NavBar from "@/components/navbar";
import { SiderBar } from "@/components/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="hidden md:flex h-full mt-16 w-20 flex-col fixed insert-y-0">
        <SiderBar />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
