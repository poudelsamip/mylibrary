import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "250px", height: "100vh" }}
    >
      <Link
        to="/mylibrary"
        className="mainName d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <h2>My Library</h2>
      </Link>
      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/mylibrary"
            end
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/mylibrary/allbooks"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            View All Books
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/mylibrary/allstudents"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            View All Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/mylibrary/issuebook"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Issue Book
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/mylibrary/receivebook"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Receive Book
          </NavLink>
        </li>
      </ul>

      <hr />
    </div>
  );
};

export default Sidebar;
