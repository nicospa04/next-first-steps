import { NavBar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <NavBar/>
    <main className="flex flex-col items-center p-24">
            <span className='text-lg'>Hola mundo</span>
            <span className="text-7xl">About page</span>
            {children}
    </main>
    </>
  );
}