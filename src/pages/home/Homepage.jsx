import banner from "../../assets/banner-img-removebg-preview.png";
import Shop from "../../components/shop/Shop";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <section id="home" class="banner-cotainer">
        <img src={banner} alt="" />
      </section>

      <Shop></Shop>
    </>
  );
};

export default Homepage;
