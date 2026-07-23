import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />

      <Card
        title="Portfolio Website"
        description="Responsive website using HTML and CSS."
      />

      <Card
        title="Landing Page"
        description="Simple landing page using HTML and CSS."
      />
      
      <Button />



      <Form />


      <Footer />
    </>
  );
}

export default App;