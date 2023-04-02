import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <table className="reachmeout">
        <tbody>
          <tr>
            <td>
              <a
                href="https://www.linkedin.com/in/harsh-pandit-4b1013235/"
                className="stylisethisbutton"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </td>
            <td>
              <a
                href="https://github.com/harshpandit2004/bookinator-frontend"
                className="stylisethisbutton"
                title="Github"
              >
                <i className="fab fa-github"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
