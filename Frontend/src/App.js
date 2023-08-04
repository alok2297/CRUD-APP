import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import DeleteandEditEmp from "./pages/DeletandEditEmp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deleteandEditUser"element={<DeleteandEditEmp/>}/>
        <Route path="/addemployee" element={<CreateEmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
