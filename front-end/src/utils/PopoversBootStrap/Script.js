import "./Style.css";


export default function Popovers() { return (
    <>
      <button
        type="button"
        className="btn btn-lg btn-danger"
        data-bs-toggle="popover"
        data-bs-title="Popover title"
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover
      </button>
    </>
  );
}
/* requires the following:
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
*/
