import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-2 block font-semibold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-1/4 rounded border border-neutral-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className="mb-2 block font-semibold">
          Description
        </label>
        <textarea
          id="wd-description"
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
          className="h-32 w-full rounded border border-neutral-300 p-2"
        />
      </div>
      <br />

      <div className="mb-4">
        <label htmlFor="wd-points" className="mb-2 block font-semibold">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className="w-1/15 rounded border border-neutral-300 p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-group" className="mb-2 block font-semibold">
          Assignment Group:
        </label>

        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-1/5 rounded border border-neutral-300 bg-white p-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-display-grade-as"
          className="mb-2 block font-semibold"
        >
          Display Grade As:
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Points"
          className="w-1/5 rounded border border-neutral-300 bg-white p-2"
        >
          <option value="Points">Points</option>
          <option value="Percent">Percent</option>
          <option value="Letter">Letter</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-submission-type"
          className="mb-2 block font-semibold"
        >
          Submission Type:
        </label>
        <select
          id="wd-submission-type"
          defaultValue="PDF"
          className="w-1/5 rounded border border-neutral-300 bg-white p-2"
        >
          <option value="PDF">PDF</option>
          <option value="Word">Word</option>
          <option value="Link">Link</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">
          Online Entry Options:
        </label>
        <div className="mb-2 flex gap-2">
          <input type="checkbox" name="Entry" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="mb-2 flex gap-2">
          <input type="checkbox" name="Entry" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="mb-2 flex gap-2">
          <input type="checkbox" name="Entry" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="mb-2 flex gap-2">
          <input type="checkbox" name="Entry" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="mb-2 flex gap-2">
          <input type="checkbox" name="Entry" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
        <div className="mb-2 flex gap-2">
          <input type="checkbox" name="Entry" id="wd-none" />
          <label htmlFor="wd-none">None</label>
        </div>
      </div>

      <div className="mb-2 flex">
        <label htmlFor="wd-assign-to">Assign To:</label>
      </div>

      <div>
        <select
          id="wd-assign-to"
          defaultValue="everyone"
          className="mb-5 w-1/12 rounded border border-neutral-300 bg-white p-2"
        >
          <option value="undergrad">Undergraduate</option>
          <option value="grad">Graduate</option>
          <option value="everyone">Everyone</option>
        </select>
      </div>

      <div className="mb-4 flex gap-4">
        <label htmlFor="wd-due-date" className="mb-2 font-semibold">
          Due Date:
        </label>
        <input
          type="date"
          defaultValue="2000-01-21"
          min="1900-01-01"
          max="2027-12-31"
          id="wd-due-date"
          className="mb-3 me-2 rounded border border-neutral-300 p-2 font-semibold"
        />

        <label htmlFor="wd-available-from" className="mb-2 font-semibold">
          Available From:
        </label>
        <input
          type="date"
          defaultValue="2000-01-21"
          min="1900-01-01"
          max="2027-12-31"
          id="wd-available-from"
          className="mb-3 me-2 rounded border border-neutral-300 p-2 font-semibold"
        />
        <label htmlFor="wd-available-until" className="mb-2 font-semibold">
          Available Until:
        </label>
        <input
          type="date"
          defaultValue="2000-01-21"
          min="1900-01-01"
          max="2027-12-31"
          id="wd-available-until"
          className="mb-3 me-2 rounded border border-neutral-300 p-2 font-semibold"
        />
      </div>

      {/* With AI */}
      <div className="mb-4">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-2 block font-semibold"
        >
          Sample notes
        </label>

        <textarea
          id="wd-ai-editor-notes"
          className="h-32 w-full rounded border border-neutral-300 p-2"
          placeholder="Enter sample notes here..."
        />
      </div>

      <br />
      <br />
      <div className="mt-6 flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-neutral-700 no-underline"
        >
          Cancel
        </Link>

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}