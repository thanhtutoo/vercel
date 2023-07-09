const URL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/categories`;

const getCategories = async (): Promise<string[]> => {
  const res = await fetch(URL);

  if (res.ok) {
    const categories = await res.json();
    return categories;
  } else {
    // throw new Error("category api failed");
    return [];
  }
};

export default getCategories;
