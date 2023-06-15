import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Saludos! Humano promedio :D" />
    </>
  );
}
