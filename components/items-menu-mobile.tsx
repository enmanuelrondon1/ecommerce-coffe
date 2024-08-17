import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

export const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categories/cafe-molido" className="block">
          Cafe molido
        </Link>
        <Link href="/categories/cafe-grano" className="block">
          Cafe en grano
        </Link>
        <Link href="/categories/cafe-grano" className="block">
          Cafe en capsulas
        </Link>
      </PopoverContent>
    </Popover>
  );
};