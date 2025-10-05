import Home from "./pages/Home"
import CostCalc from "./pages/CostCalc"
import KnowledgeHub from "./pages/KnowledgeHub";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductNexus from "./pages/CreateProductNexus";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estimation" element={<CostCalc/>} />
      <Route path="/knowledge-hub" element={<KnowledgeHub/>}></Route>
      <Route path="/create-a-product" element={<CreateProductNexus/>}></Route>
      <Route path="*" element={<h1 className="text-3xl font-bold text-center mt-20">404 - Page Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
