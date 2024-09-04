"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addProduct, updateProduct } from "../../_actions/products";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@prisma/client";
import Image from "next/image";

export function ProductForm({ product }: { product: Product | null }) {
  const [priceInCents, setPriceInCents] = useState<number | undefined>(
    product?.priceInCents
  );
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  );

  return (
    <form action={action} className="space-y-8  container">
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="name">
          Name
        </Label>
        <Input
          className="w-[100%] md:w-[50%]"
          type="text"
          id="name"
          name="name"
          defaultValue={product?.name || ""}
          required
        />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="priceInCents">
          Price In Cents
        </Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          className="w-[100%] md:w-[50%]"
          required
          value={priceInCents}
          defaultValue={product?.priceInCents || ""}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />

        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        {error.priceInCents && (
          <div className="text-destructive">{error.priceInCents}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="description">
          Description
        </Label>
        <Textarea
          className="w-[100%] md:w-[50%]"
          id="description"
          name="description"
          required
          defaultValue={product?.description || ""}
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="file">
          File
        </Label>
        <Input
          className="w-[100%] md:w-[50%]"
          type="file"
          id="file"
          name="file"
          required={product == null}
        />
        {product != null && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
        {error.file && <div className="text-destructive">{error.file}</div>}
      </div>
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="file">
          Image
        </Label>
        <Input
          className="w-[100%] md:w-[50%]"
          type="file"
          id="image"
          name="image"
          required={product == null}
        />
        {product != null && (
          <Image
            src={product.imagePath}
            height="400"
            width="400"
            alt="Product Image"
          />
        )}
        {error.image && <div className="text-destructive">{error.image}</div>}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="right-0" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}