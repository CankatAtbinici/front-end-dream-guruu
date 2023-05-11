import "./App.css";
import MainPage from './pages/main/Index'
import UserDataContextProvider from "./context/UserDataContext";
import LoadingContextProvider from "./context/Loading";
import Navbar from "./components/navbar/Index";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login/Index';
import UserUXContextProvider from "./context/UserUXContext";
import Layout from "./components/layout/Layout";
import Profile from  "./pages/profile/Index";



function App() {





  return (
    <LoadingContextProvider>
      <UserUXContextProvider>
        <UserDataContextProvider>
          <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact  path="/"  element={<MainPage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
            </Layout>
          </BrowserRouter>
      </UserDataContextProvider>
      </UserUXContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
