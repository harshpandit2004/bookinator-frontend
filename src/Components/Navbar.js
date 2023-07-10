import React from "react";
import Bookinative from "../Releases/Bookinative.apk";

export default function Navbar() {
  return (
    <div className="Navbar">
      <table className="reachmeout">
        <tbody>
          <tr>
            <td>
              <a
                href={Bookinative}
                className="stylisethisbutton"
                title="Android"
              >
                <i className="fab fa-android"></i>
              </a>
            </td>
            <td>
              <a
                href="http://portfolio-ce6f9.web.app/"
                className="stylisethisbutton"
                title="Portfolio"
              >
                <i className="fa fa-link"></i>
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
