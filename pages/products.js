import Content from "../components/about/Content";
import Header from "../components/about/Header";
import Testimonials from "../components/about/Testimonials";
import Footer from "../components/Footer";


export default function Products() {
  return (
    <div className="bg-white">
      <h1>Product page</h1>
      <Header/>
      <Content/>
      <Testimonials/>
    </div>
  )
}
