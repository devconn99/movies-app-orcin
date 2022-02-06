import CategoryMovies from "@/components/organisms/CategoryMovies";
import DiscoverMovies from "@/components/organisms/DiscoverMovies";
import Footer from "@/components/organisms/Footer";
import Movies from "@/components/organisms/Movies";
import Navbar from "@/components/organisms/Navbar";
import TrendingMovies from "@/components/organisms/TrendingMovies";

export default function Home() {
  return (
    <>
      <Navbar />
      <DiscoverMovies />
      <CategoryMovies />
      <TrendingMovies />
      <Movies />
      <Footer />
    </>
  );
}
