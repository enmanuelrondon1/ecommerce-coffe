"use client";

import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import { FiltersControlsCategory } from "./components/filters-controls-category.tsx";
import { SkeletonSchema } from "@/components/skeletonSchema";
import { ProductCard } from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const router = useRouter();
  const [filterOrigin, setFilterOrigin] = useState("");
  const [filterTaste, setFilterTaste] = useState("");

  const { error, loading, result }: ResponseType =
    useGetCategoryProduct(categorySlug);



  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === ''
      ? result
      : result.filter(
          (product: ProductType) => product.attributes.origin === filterOrigin
        ));

  console.log(filteredProducts);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 ">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium ">
          Cafe {result[0].attributes.category.data.attributes.categoryName}{" "}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between ">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />


        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 ">
          {loading && <SkeletonSchema grid={3} />}

          {result !== null &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}

          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro</p>
            )}


        </div>
      </div>
    </div>
  );
}

export default Page;
