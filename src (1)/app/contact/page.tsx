import Contact from "./Contact";
export const metadata = {
  title: 'Liên Hệ',
}
export default  function Page() { 
    return ( 
        <div className="max-w-7xl md:mx-auto mx-4">
          <Contact/>
       </div>
     );
}