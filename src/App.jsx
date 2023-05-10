import { Route, Routes } from "react-router-dom";
import Challenge from "./Components/Challenge/Challenge";
import Main from "./Components/Main";
import Practice from "./Components/Practice/Practice";
import Shuffle from "./Components/Shuffle/Shuffle";
import Code from "./Components/Task/Code";
import Comments from "./Components/Task/Comments";
import Instructions from "./Components/Task/Instructions";
import Resources from "./Components/Task/Resources";
import Solution from "./Components/Task/Solution";
import Task from "./Components/Task/Task";
import Tutorial from "./Components/Tutorial/Tutorial";

function App() {
  return (
    <div>
      <Main/>
      <Routes>  
        <Route path='/task/:id' element={<Task/>}>
          <Route path="instructions" element={<Instructions/>}/>
          <Route path="code" element={<Code/>}/>
          <Route path="comments" element={<Comments/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="solutions" element={<Solution/>}/>
        </Route>
        <Route path="/practice" element = {<Practice/>}/>
        <Route path="/challenge" element = {<Challenge/>}/>
        <Route path="/shuffle" element = {<Shuffle/>}/>
        <Route path="/tutorial" element = {<Tutorial/>}/>
      </Routes>
    </div>
  );
}

export default App;
