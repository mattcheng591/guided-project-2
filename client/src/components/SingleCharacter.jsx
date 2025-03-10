import { memo } from "react";

function SingleCharacter(props) {
  return (
    <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"></p>
          </div>
        </div>
    </>
  );
}

export default memo(SingleCharacter);
