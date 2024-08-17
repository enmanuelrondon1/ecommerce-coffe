
import { useRouter } from "next/navigation";

interface ProductImageProps {
  slug:string,
  url:string
}

export const 
ProductImageMiniature = (props: ProductImageProps) => {
  const {url, slug} = props
  const router = useRouter()

  return (
    <div
        className=""
        onClick={() => router.push(`/product/${slug}`)}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
          alt="product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 aspect-[3/2] "
        />
      </div>
  )
}