import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Footer/style.css"
function Footer() {
  return (
    <>
      <footer className="py-4">
          
        <div className="container">
          <div className="row justify-content-between text-center">
              
            <div className="col-md-4 text-md-left">
              <p>©copyrights&Ahmed kamal Rakha</p>
              <p>contact me : 01012499696</p>
            </div>
            <div className="col-md-4 text-md-right">
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
              </span>
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </span>
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
              </span>
              <span className="d-inline icon">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;