import { Routes, Route } from "react-router-dom";
import "./css/all.min.css";
import "./css/App.css";
import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <>
      <Routes>
        {/* Route for the Courses List */}
        <Route path="/" element={<CoursesList />} />

        {/* Dynamic route for course details */}
        <Route path="/:courseId" element={<CourseDetails />} />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
