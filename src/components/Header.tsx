import { useState } from "react";
import { List, X } from "phosphor-react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import { SidebarHamburger } from "./SidebarHamburger";

export function Header() {
  const [responsiveMenuStatus, setResponsiveMenuStatus] = useState(false);

  function handleToggleMenu() {
    setResponsiveMenuStatus(!responsiveMenuStatus);
  }

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 sm640:px-1 sm640:justify-between">
      <Logo />
      <div className="hidden sm640:flex items-center gap-[7px]">
        <span>Aulas</span>
        <button className="flex flex-col transition-all" onClick={handleToggleMenu}>
          {responsiveMenuStatus ? (
            <X size={32} color="#81D8F7" />
          ) : (
            <List size={32} color="#81D8F7" />
          )}
        </button>
        <Sidebar />
        <SidebarHamburger menuIsOpened={responsiveMenuStatus} />
      </div>
    </header>
  );
}
