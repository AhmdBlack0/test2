import { useParams } from "react-router-dom";
import data from "../coursesData.json"; // Import the JSON data
import { useState } from "react";

function CourseDetails() {
  const [showLectures, setShowLectures] = useState(true); // State to control lecture visibility
  const [showSection, setShowSection] = useState(false); // State to control section visibility
  const [showSummary, setShowSummary] = useState(false); // State to control summary visibility
  const params = useParams();
  const courseId = Number(params.courseId); // Convert courseId to a number
  const course = data.find((course) => course.id === courseId); // Find the course by ID

  if (!course) {
    return <h1>Course not found</h1>; // Handle the case where the course is not found
  }

  const handleShowLectures = () => {
    setShowLectures(!showLectures); // Toggle the state to show or hide lectures
    setShowSection(false); // Toggle the state to show or hide sections
    setShowSummary(false); // Toggle the state to show or hide summary
  };

  const handleShowSection = () => {
    setShowSection(!showSection); // Toggle the state to show or hide sections
    setShowLectures(false); // Toggle the state to show or hide lectures
    setShowSummary(false); // Toggle the state to show or hide summary
  };

  const handleShowSummary = () => {
    setShowSummary(!showSummary); // Toggle the state to show or hide summary
    setShowLectures(false); // Toggle the state to show or hide lectures
    setShowSection(false); // Toggle the state to show or hide sections
  };

  return (
    <div className="course-section">
      <h1 className="title">{course.course}</h1>
      <div className="btns">
        <button onClick={handleShowLectures}>Lecture</button>
        <button onClick={handleShowSection}>Section</button>
        <button onClick={handleShowSummary}>Summary</button>
      </div>

      {showLectures && (
        <>
          {course.lectures.map((lecture, index) => (
            <div key={index} className="box">
              <h2>
                Lecture {lecture.id} : {lecture.title}
              </h2>
              <a href={lecture.file} download>
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
          ))}
        </>
      )}

      {showSection && (
        <div>
          <>
            {course.sections.map((section, index) => (
              <div key={index} className="box">
                <h2>Section: {section.title}</h2>
                <a href={section.file} download>
                  <i className="fa-solid fa-download"></i>
                </a>
              </div>
            ))}
          </>
        </div>
      )}

      {showSummary && (
        <div>
          <h2>Summary Content</h2>
          {/* Add your summary content here */}
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
