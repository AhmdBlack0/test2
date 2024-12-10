import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../coursesData.json";

function CoursesList() {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all" ? data : data.filter((data) => data.semester === filter);

  return (
    <div className="courses-list">
      <nav>
        <div className="logo">
          <i className="fa-solid fa-code icon"></i>
          <h1>CS Private 3th</h1>
        </div>
        <div className="btns">
          <button
            className="btn-semester1"
            onClick={() => setFilter("semester-1")}
          >
            Semester 1
          </button>
          <button
            className="btn-semester2"
            onClick={() => setFilter("semester-2")}
          >
            Semester 2
          </button>
          <button className="btn-all" onClick={() => setFilter("all")}>
            Show All
          </button>
        </div>
      </nav>

      <div className="courses">
        <h2 className="title">Courses</h2>
        {filteredData.map((data) => (
          <Link key={data.id} to={`/${data.id}`} className="box">
            {data.course}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
