import Categories from '@/ui/Top/Categories';
import Discount from '@/ui/Top/Discount';
import Review from '@/ui/Top/Review';
import Term from '@/ui/Top/Term';
import ProductSection from '@/ui/Product/ProductSection';
import TopSection from '@/ui/Top/TopSection';
import { add } from 'date-fns';

export const metadata = {
  title: 'Trang Chủ | S-market',
}

export default async function Page() {
  var newDate = add(Date.now(),{days:1});

  
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <TopSection/>
      {/* @ts-expect-error Async Server Component */}
      <ProductSection title="Giảm Giá Bất Ngờ" about="Flash Sales" isSlider={true} query={'method=sale&limit=12'} timer={true} countTime={newDate} btnBottom={true}/>
      <Categories/>
      {/* @ts-expect-error Async Server Component */}
      <ProductSection title="Tháng Này" about="Nổi bật" isSlider={false} query={'method=hot'} btnTop={true}/>
      <Discount/>
      {/* @ts-expect-error Async Server Component */}
      <ProductSection title="Khám Phá" about="Sản phẩm nổi bật" isSlider={true} query={'method=new&limit=12'} btnBottom={true} rows={2}/>
      {/* @ts-expect-error Async Server Component */}
      <Review  query={'method=new'} />
      <Term/>
    </>
  );
}
