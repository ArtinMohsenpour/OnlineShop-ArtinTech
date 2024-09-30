import { ProductsCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <ProductsGridSection
        title="Most Popular"
        productsFetcher={getMostPopularProducts}
      />
      <ProductsGridSection title="Newest" productsFetcher={getNewestProducts} />
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
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button variant="outline" asChild>
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductsCard />
      </div>
    </div>
  );
}
