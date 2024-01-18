// 对应链接：http://localhost:3000
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello darling~</h1>
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  );
}
