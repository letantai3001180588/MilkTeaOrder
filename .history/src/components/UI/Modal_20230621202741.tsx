import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.scss";

const Backdrop = (props: any) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} abc</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
