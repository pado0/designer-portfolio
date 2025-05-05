import case1Thumbnail from "../assets/case1-thumbnail.png";
import case2Thumbnail from "../assets/case2-thumbnail.png";
import closelook4 from "../assets/closelook-4.png";
import iconArrowLeft from "../assets/icon-arrow-left.svg";
import iconArrowRight from "../assets/icon-arrow-right.svg";
import "./PageProject.css";

export const PageProject = (): JSX.Element => {
  return (
    <div className="page-project">
      <div className="div-2">
        <div className="thumbnail-wrapper">
          <img className="thumbnail" alt="Thumbnail" src={case1Thumbnail} />
        </div>

        <div className="case-thumbnail-wrapper">
          <img className="thumbnail" alt="Thumbnail" src={case2Thumbnail} />
        </div>

        <p className="hi-i-m-silvy-yang-i">
          Hi, I’m Silvy Yang.
          <br />I turn MVPs into scalable products—fast.
        </p>

        <div className="text-wrapper-2">Quick Looks</div>

        <div className="text-wrapper-3">Case Study</div>

        <div className="closelook-wrapper">
          <img className="closelook" alt="Closelook" src={closelook4} />
        </div>

        <img className="image" alt="Image" src={iconArrowRight} />

        <img className="img" alt="Image" src={iconArrowLeft} />

        {/* <Gnb className="GNB-instance" property1="variant-2" /> */}
        <div className="frame-2">
          <div className="text-wrapper-4">Mobile QR Ordering</div>

          <p className="p">
            Built a review-friendly ordering flow and scaled it from scratch to
            1,000 franchise locations.
          </p>
        </div>
      </div>
    </div>
  );
};
