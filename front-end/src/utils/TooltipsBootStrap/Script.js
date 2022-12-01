import "./Style.css";

export default function Tooltips() {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-className="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables."
      >
        Custom tooltip
      </button>
    </>
  );
}
/* Requires the following:
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

*/
