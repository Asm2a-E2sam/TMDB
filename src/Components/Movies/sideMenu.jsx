import { MdKeyboardArrowRight } from "react-icons/md";
export default function SideMenu() {
  return (
    <>
      <div className="me-3">
        <div className="border shadow-sm rounded box mb-3" role="button">
          <h6 className="fw-bold fs-box">Sort</h6>
          <MdKeyboardArrowRight className="fs-4" />
        </div>

        <div className="border shadow-sm rounded box mb-3" role="button">
          <h6 className="fw-bold fs-box">Where To Watch</h6>
          <MdKeyboardArrowRight className="fs-4" />
        </div>

        <div className="border shadow-sm rounded box mb-3" role="button">
          <h6 className="fw-bold fs-box">Filter</h6>
          <MdKeyboardArrowRight className="fs-4" />
        </div>
        <div className="col-12 btn btn-search">Search</div>
      </div>
    </>
  );
}
