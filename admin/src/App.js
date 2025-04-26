import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Children, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { userColumns } from "./datatablesource";
import { hotelColumns } from "./datatablesource";
import { roomColumns } from "./datatablesource";

function App() {

  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    

    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns}/></ProtectedRoute>} />
              <Route path=":userId" element={<ProtectedRoute></ProtectedRoute>} />
            </Route>
            <Route path="hotels">
              <Route index element={<List columns={hotelColumns}/>} />
              <Route path=":hotelId" element={<ProtectedRoute></ProtectedRoute>} />
            </Route>
            <Route path="rooms">
              <Route index element={<List columns={roomColumns}/>} />
              <Route path=":roomId" element={<ProtectedRoute></ProtectedRoute>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
