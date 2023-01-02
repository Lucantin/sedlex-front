import "./styles.css";

export const CarouselImage2 = () => {
  let count = 1;
  // document.getElementById("radio1").checked = true;

  setInterval(() => {
    nextImage();
  }, 5000);

  function nextImage() {
    count++;
    if (count > 4) {
      count = 1;
    }

    // document.getElementById("radio" + count).checked = true;
  }
  return (
    <div className="slider">
      <div className="slides">
        {/* radio */}
        <input type="Radio" name="radio-btn" id="radio1" />
        <input type="Radio" name="radio-btn" id="radio2" />
        <input type="Radio" name="radio-btn" id="radio3" />
        <input type="Radio" name="radio-btn" id="radio4" />
        {/* radio */}

        {/* image */}
        <div className="slide first">
          <img src={require("../../images/manutencao.jpeg")} alt="messi" />
        </div>
        <div className="slide">
          <img src={require("../../images/obra.jpeg")} alt="manutencao" />
        </div>
        <div className="slide">
          <img src={require("../../images/manutencao.jpeg")} alt="loading" />
        </div>
        <div className="slide">
          <img src={require("../../images/obra.jpeg")} alt="obra" />
        </div>
        {/* image */}

        {/* atuobtn */}
        <div className="navigation-auto">
          <div className="autobtn1"></div>
          <div className="autobtn2"></div>
          <div className="autobtn3"></div>
          <div className="autobtn4"></div>
        </div>
        {/* atuobtn */}
      </div>

      <div className="manual-navigation">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
    </div>
  );
};
