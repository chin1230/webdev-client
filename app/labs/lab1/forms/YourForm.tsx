export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      {/* Text fields */}
      <h5>Personal Information</h5>

      <label htmlFor="wd-your-first-name">First Name:</label>
      <input
        id="wd-your-first-name"
        type="text"
        defaultValue="Bingqiao"
      />
      <br />

      <label htmlFor="wd-your-last-name">Last Name:</label>
      <input
        id="wd-your-last-name"
        type="text"
        defaultValue="Qian"
      />
      <br />

      <label htmlFor="wd-your-password">Password:</label>
      <input
        id="wd-your-password"
        type="password"
        placeholder="Enter your password"
      />
      <br />

      {/* Textarea */}
      <h5>Introduction</h5>

      <label htmlFor="wd-your-introduction">
        Introduction:
      </label>
      <br />

      <textarea
        id="wd-your-introduction"
        rows={4}
        cols={50}
        defaultValue="I am a senior Computer Science student at Northeastern University. I am taking this course to learn how to build modern web applications."
      />
      <br />

      {/* First radio group */}
      <h5 id="wd-class-standings">Class Standing</h5>

      <input
        type="radio"
        name="class-standing"
        id="wd-your-freshman"
      />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />

      <input
        type="radio"
        name="class-standing"
        id="wd-your-sophomore"
      />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />

      <input
        type="radio"
        name="class-standing"
        id="wd-your-junior"
      />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />

      <input
        type="radio"
        name="class-standing"
        id="wd-your-senior"
        defaultChecked
      />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />

      <input
        type="radio"
        name="class-standing"
        id="wd-your-graduate"
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      {/* Second radio group */}
      <h5 id="wd-enrollment-status">Enrollment Status</h5>

      <input
        type="radio"
        name="enrollment-status"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />

      <input
        type="radio"
        name="enrollment-status"
        id="wd-your-part-time"
      />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      {/* Checkboxes */}
      <h5 id="wd-interests">Interests</h5>

      <input
        type="checkbox"
        name="interests"
        id="wd-your-java"
        defaultChecked
      />
      <label htmlFor="wd-your-java">Java</label>
      <br />

      <input
        type="checkbox"
        name="interests"
        id="wd-your-artificial-intelligence"
        defaultChecked
      />
      <label htmlFor="wd-your-artificial-intelligence">
        Artificial Intelligence
      </label>
      <br />

      <input
        type="checkbox"
        name="interests"
        id="wd-your-web-development"
        defaultChecked
      />
      <label htmlFor="wd-your-web-development">
        Web Development
      </label>
      <br />

      <input
        type="checkbox"
        name="interests"
        id="wd-your-game-development"
      />
      <label htmlFor="wd-your-game-development">
        Game Development
      </label>
      <br />

      {/* Single-select dropdown */}
      <h5>Major</h5>

      <label htmlFor="wd-your-major">Major:</label>

      <select
        id="wd-your-major"
        defaultValue="computer-science"
      >
        <option value="computer-science">
          Computer Science
        </option>
        <option value="data-science">
          Data Science
        </option>
        <option value="cybersecurity">
          Cybersecurity
        </option>
        <option value="information-science">
          Information Science
        </option>
      </select>
      <br />

      {/* Multiple-select dropdown */}
      <h5>Topics to Study</h5>

      <label htmlFor="wd-your-topics">
        Topics I want to study:
      </label>
      <br />

      <select
        id="wd-your-topics"
        multiple
        defaultValue={["react", "nextjs"]}
      >
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="react">React</option>
        <option value="nextjs">Next.js</option>
        <option value="mongodb">MongoDB</option>
      </select>
      <br />

      {/* Typed fields */}
      <h5>Additional Information</h5>

      <label htmlFor="wd-your-email">
        School Email:
      </label>
      <input
        id="wd-your-email"
        type="email"
        defaultValue="qian.bin@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-your-graduation-year">
        Expected Graduation Year:
      </label>
      <input
        id="wd-your-graduation-year"
        type="number"
        defaultValue={2027}
        min={2026}
        max={2035}
      />
      <br />

      <label htmlFor="wd-your-program-start-date">
        Program Start Date:
      </label>
      <input
        id="wd-your-program-start-date"
        type="date"
        defaultValue="2022-09-01"
      />
      <br />

      <label htmlFor="wd-your-excitement">
        Excitement About This Course (0–10):
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        defaultValue={8}
        min={0}
        max={10}
      />
      <br />

      {/* Buttons */}
      <h5>Actions</h5>

      <button
        id="wd-your-save"
        type="submit"
      >
        Save
      </button>

      <button
        id="wd-your-cancel"
        type="button"
      >
        Cancel
      </button>
    </form>
  );
}