import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic"; //force the nexjs to not cash any of our admin pages

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="contain-inline-size m-6">{children}</div>
    </>
  );
}
