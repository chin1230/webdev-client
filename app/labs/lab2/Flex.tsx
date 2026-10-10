export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>

        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>

        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>


      <h3>My Flex Row</h3>

      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Left</div>

        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Growing Column
        </div>

        <div className="wd-bg-color-blue wd-fg-color-white">Middle</div>

        <div className="wd-bg-color-red wd-fg-color-white wd-width-110px">
          Fixed 110px
        </div>
      </div>
      {/* With AI */}
      <h3>AI Flex Row</h3>

      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-110px wd-bg-color-blue wd-fg-color-white">
          Fixed Column
        </div>

        <div className="wd-bg-color-yellow">Middle</div>

        <div className="wd-flex-grow-1 wd-bg-color-green wd-fg-color-white">
          Growing Column
        </div>
      </div>
    </div>
  );
}