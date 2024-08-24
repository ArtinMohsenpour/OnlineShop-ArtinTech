"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";

export function ProductForm() {
  const [priceInCents, setPriceInCents] = useState<number>();

  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="name">
          Name
        </Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label className="ml-2" htmlFor="priceInCents">
          Price In Cents
        </Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        <div className="space-y-2">
          <Label className="ml-2" htmlFor="description">
            Description
          </Label>
          <Textarea id="description" name="description" required />
        </div>
        <div className="space-y-2">
          <Label className="ml-2" htmlFor="file">
            File
          </Label>
          <Input type="file" id="file" name="file" required />
        </div>

      </div>
    </form>
  );
}
