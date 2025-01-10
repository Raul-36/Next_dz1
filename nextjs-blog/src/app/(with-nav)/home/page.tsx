import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FiBox } from 'react-icons/fi';
import { products } from "@/data/products";
export default function Home() {
  return (
    <div className="px-8 py-6">
      <div className=" max-w-screen-1xl grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        {products.map((product, index) => (
          <a key={index} href={product.href}>
            <Card className="border bg-card text-card-foreground shadow-lg h-full rounded-lg transition-all hover:bg-muted/25">
              <CardHeader>
                <CardTitle className="font-semibold text-lg leading-tight tracking-tight capitalize">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3 text-balance">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <div className="flex w-fit items-center text-xs text-muted-foreground">
                  <FiBox className="mr-1.5 text-lg" />
                  {product.productCount} products
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );

}
