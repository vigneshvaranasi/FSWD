import { notFound } from "next/navigation";
function ProductReviewPage({params}:{params:{productId:string,reviewId:string}}) {

    if(parseInt(params.reviewId)>1000){
        notFound();
    }
  return (
    <div className='bg-[#000] h-screen'>
        <h1 className='text-center text-white text-lg pt-4'>
        Product Review Page of Product id: {params.productId} & review id {params.reviewId}
        </h1>
    </div>
  );
}

export default ProductReviewPage;