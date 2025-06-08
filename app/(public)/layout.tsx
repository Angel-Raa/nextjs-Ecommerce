import { TopMenu, Sidebar, Footer } from "../components";

interface Props {
  children: React.ReactNode;
}
export const metadata = {
  title: "E-commerce App",
  description: "A simple e-commerce application built with Next.js",
  openGraph: {  
    title: "E-commerce App",
    description: "A simple e-commerce application built with Next.js"
  },
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <main className="min-h-screen  bg-gray-50">
        <TopMenu />
        <Sidebar />
        <div className=" w-full px-2 py-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
