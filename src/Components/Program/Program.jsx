import "./Program.css";

import Program_1 from "../../assets/program-1.png";
import Program_2 from "../../assets/program-2.png";
import Program_3 from "../../assets/program-3.png";
import Program_Icon_1 from "../../assets/program-icon-1.png";
import Program_Icon_2 from "../../assets/program-icon-2.png";
import Program_Icon_3 from "../../assets/program-icon-3.png";

function Program() {
  return (
    <div className="programs">
      <div className="program">
        <img src={Program_1} alt="program1" />
        <div className="caption">
          <img src={Program_Icon_1} alt="program_icon1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_2} alt="program2" />
        <div className="caption">
          <img src={Program_Icon_2} alt="program_icon2" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_3} alt="program3" />
        <div className="caption">
          <img src={Program_Icon_3} alt="program_icon3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}

export default Program;
