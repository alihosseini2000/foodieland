import React from "react";
import TagFood from "../tagFood/tagFood";
import TagTime from "../tagTime/tagTime";

function Cart({ title, src, alt }) {
  return (
    <div>
      <div>
        <div>
          <img src={src} alt={alt} />
        </div>
        <div>
          {/* <label className="sg-replace-icons cursor-pointer">
            <input
              type="checkbox"
            />

            <span className="checkmark"></span>
          </label> */}
          <input type="checkbox" id="button" />
          <label htmlFor="button" className="fas"></label>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <div>
          <TagFood />
          <TagTime />
        </div>
      </div>
    </div>
  );
}

export default Cart;
