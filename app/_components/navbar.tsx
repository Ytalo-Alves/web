"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {

  const pathname = usePathname()


  return (
    <nav className="flex justify-between border-b border-sol] px-8 py-4">
      {/* LEFT */}
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        <Link href="/" className={
          pathname === '/' ? 'text-primary font' : 'text-muted-foreground'
        }>Dashboard</Link>
        <Link href="/transactions" className={
          pathname === '/transactions' ? 'text-primary font' : 'text-muted-foreground'
        }>Transações</Link>
        <Link href="/subscription" className={
          pathname === '/subscription' ? 'text-primary font' : 'text-muted-foreground'
        }>Assinatura</Link>
      </div>
      {/* RIGHT */}
      <UserButton showName/>
    </nav>
  );
};

export default NavBar;
