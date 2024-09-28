import db from "@/db/db";

function getMostPopularProducts() {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: {
      orders: {
        _count: "desc",
      },
    },
    take: 6,
  });
}

function getNewestProducts() {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
}

export default function HomePage() {
  return (
    <main className="space-y-12">
      <ProductsGridSection productsFetcher={getMostPopularProducts} />
      <ProductsGridSection productsFetcher={getNewestProducts} />
    </main>
  );
}

type ProductsGridSectionProps = {
  title: string;
  productsFetcher: () => Promise<Product[]>;
};

function ProductsGridSection({
  productsFetcher,
  title,
}: ProductsGridSectionProps) {
  return;
}
