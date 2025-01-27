"use client";

import { useLovedProducts } from "@/hooks/use-loved-product";
import { LovedItemProduct } from "./components/loved-item-product";

const Page = () => {
  const { lovedItems } = useLovedProducts();

  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24 ">
      <h1 className="sm:text-2xl  ">Productos que te gustan</h1>
      <div>
        <div>
          {lovedItems.length === 0 && (
            <p>No hay productos en la seccion de Me gusta</p>
          )}
          <ul>
            {
              lovedItems.map((item) => (
                <p key={item.id} >
                  <LovedItemProduct key={item.id} product={item} />
                </p>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
