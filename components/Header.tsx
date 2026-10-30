import Image from "next/image";

export function Header() {
  return <header className="site-header">
    <div className="brand-lockup" aria-label="English rootme">
      <Image className="brand-logo" src="/images/rootme-logo.svg" alt="English rootme" width={182} height={42} priority />
    </div>
  </header>;
}
