import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`;

const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("product api failed3333");
  }
};

export default getProduct;
