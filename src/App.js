import Home from "./pages/Home";

// **Router
import { Routes, Route } from "react-router-dom";

// Protected Route for login
import ProtectedRoute from "./ProtectedRoute";

// **Context
import { AuthContext } from "./context/AuthContext";

// **Pages
import SignIn from "./pages/SignIn";
import BookInfo from "./pages/BookInfo";

function App() {
  const user = AuthContext();
  return (
    <>
      <Routes>
        <Route path="/kayıt-ol" element={<SignIn />} />
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:title"
          element={
            <ProtectedRoute user={user}>
              <BookInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
