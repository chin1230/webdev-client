export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>

      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>

        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>

      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
        </div>

        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          <h3>Main content</h3>
        </div>

        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          <h3>Side bar</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-custom-left wd-bg-color-green wd-fg-color-white">
          <h3>Left 25%</h3>
        </div>

        <div className="wd-grid-col-custom-main wd-bg-color-yellow">
          <h3>Middle 50%</h3>
        </div>

        <div className="wd-grid-col-custom-right wd-bg-color-red">
          <h3>Right 25%</h3>
        </div>
      </div>
      {/* With AI */}
      <div id="wd-ai-grid" className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-blue wd-fg-color-white">
          <h3>AI One Third</h3>
        </div>

        <div className="wd-grid-col-two-thirds-page wd-bg-color-red">
          <h3>AI Two Thirds</h3>
        </div>
      </div>
    </div>
  );
}