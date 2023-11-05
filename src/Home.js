import Footer from "./Footer";
import Header from "./Header";
import { useAuth } from "./context";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      {user && (
        <div style={{ padding: 10, border: "1px solid red" }}>
          Bu alan sadece giris yapilinca gorulur
        </div>
      )}
      <Footer />
    </>
  );
}
