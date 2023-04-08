import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <table className="reachmeout">
        <tbody>
          <tr>
            <td>
              <a
                href="https://6431171ffc1ce10008c9dae2--bookinator-meet-our-team.netlify.app/people.html"
                className="stylisethisbutton"
                title="Team!"
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
