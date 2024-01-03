import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import BookList from "./components/section/BookList";
import InputSection from "./components/section/InputSection";
import store from "./redux/store";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <InputSection />
        <BookList />
      </section>
    </Provider>
  );
}

export default App;
