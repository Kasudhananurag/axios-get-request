import MainPage from "./components/MainPage";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App(){
  return(

    <div style={{display:"flex"}}>
      {/* <Navbar/> */}
      {/* <MainPage/> */}
      <Movies/>
      {/* <Sidebar/> */}
    </div>

  );
}