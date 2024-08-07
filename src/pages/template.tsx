import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
function Template() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-6 grid gap-6 px-4 md:grid-cols-[1fr_3fr] md:px-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Template;