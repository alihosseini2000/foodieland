import Categories from "../components/categories/Categories";
import SliderToSlide from "../components/slider/slider";

function Header() {
  return (
    <div className="mt-10">
      <SliderToSlide />
      <Categories />
    </div>
  );
}

export default Header;
