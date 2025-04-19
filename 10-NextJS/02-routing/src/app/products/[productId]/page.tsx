import { Metadata } from "next";

type ProductProps = {
  params: {
    productId: string;
  };
};

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  return {
    title: `Details about the product ${params.productId}`,
    description: `This is the details page about the product ${params.productId}`,
  };
}

export default function ProductPage({ params }: ProductProps) {
  return (
    <div className="bg-[#000] h-screen">
      <h1 className="text-center text-white text-5xl pt-4">
        Details about the product {params.productId}
      </h1>
    </div>
  );
}
