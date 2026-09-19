export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      {/* Absolute — another site */}
      <a href="https://www.lipsum.com">lipsum.com</a>
      <br />
      {/* Relative — same site */}
      <a href="/labs">Back to Labs</a>
      {/* Fragment — same page, scroll to id */}
      <br />
      <a href="#wd-anchor-bottom">Jump to bottom</a>
      {/* New tab + safer external link */}
      <br />
      <a href="https://github.com/jannunzi" target="_blank" rel="noreferrer">
        GitHub (new tab)
      </a>
      <br />
      <a href="https://www.amazon.com/" id="wd-your-link">
        Amazon
      </a>
      <br />
      <a
        href="https://github.com/chin1230"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub (new tab)
      </a>
      <br />
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      >
        MDN: table element
      </a>
    </>
  );
}