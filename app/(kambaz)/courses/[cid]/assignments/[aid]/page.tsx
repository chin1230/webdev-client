export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online. Submit a link to the landing page."
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
        </tbody>
      </table>
      <label htmlFor="wd-group">Assignment Group: </label>
      <br />
      <select id="wd-group" defaultValue="SCIFI">
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
      </select>
      <br />
      <label htmlFor="wd-display-grade-as">Display Grade As: </label>
      <select id="wd-display-grade-as" defaultValue="Points">
        <option value="Points">Points</option>
        <option value="Percent">Percent</option>
        <option value="Letter">Letter</option>
      </select>
      <br />
      <label htmlFor="wd-submission-type">Submission Type: </label>
      <select id="wd-submission-type" defaultValue="PDF">
        <option value="PDF">PDF</option>
        <option value="Word">Word</option>
        <option value="Link">Link</option>
      </select>

      <br />

      <label>Online Entry Options:</label>
      <br />
      <input type="checkbox" name="Entry" id="wd-text-entry" />
      <label htmlFor="wd-text-entry">Text Entry</label>
      <br />
      <input type="checkbox" name="Entry" id="wd-website-url" />
      <label htmlFor="wd-website-url">Website URL</label>
      <br />
      <input type="checkbox" name="Entry" id="wd-media-recordings" />
      <label htmlFor="wd-media-recordings">Media Recordings</label>
      <br />
      <input type="checkbox" name="Entry" id="wd-student-annotation" />
      <label htmlFor="wd-student-annotation">Student Annotation</label>
      <br />
      <input type="checkbox" name="Entry" id="wd-file-upload" />
      <label htmlFor="wd-file-upload">File Upload</label>
      <br />
      <input type="checkbox" name="Entry" id="wd-none" />
      <label htmlFor="wd-none">None</label>
      <br />
      <label htmlFor="wd-assign-to">Assign To: </label>
      <select id="wd-assign-to" defaultValue="everyone">
        <option value="undergrad">Undergraduate</option>
        <option value="grad">Graduate</option>
        <option value="everyone">Everyone</option>
      </select>

      <br />

      <label htmlFor="wd-due-date">Due Date: </label>
      <input
        type="date"
        defaultValue="2000-01-21"
        min="1900-01-01"
        max="2027-12-31"
        id="wd-due-date"
      />

      <br />
      <label htmlFor="wd-available-from">Available From: </label>
      <input
        type="date"
        defaultValue="2000-01-21"
        min="1900-01-01"
        max="2027-12-31"
        id="wd-available-from"
      />
      <br />
      <label htmlFor="wd-available-until">Available Until: </label>
      <input
        type="date"
        defaultValue="2000-01-21"
        min="1900-01-01"
        max="2027-12-31"
        id="wd-available-until"
      />

      <h4>Buttons</h4>
      <button id="wd-html-button-save" type="submit">
        Save
      </button>
      <button id="wd-html-button-cancel" type="button">
        Cancel
      </button>
    </div>
  );
}