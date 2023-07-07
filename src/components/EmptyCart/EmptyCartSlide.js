import React from "react";
import { useNavigate } from "react-router-dom";
import emptybasketSlide from "../../assets/images/cartImage.svg";
import { EmptyCart } from "../Cartfunctions/CartFunctions";

const EmptyCartSlide = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="empty-cart-slide">
       
     
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 360.000000 360.000000"
          preserveAspectRatio="xMidYMid meet"
        >
            
          <g
            transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
            fill="#3B3E6E"
            stroke="none"
          >
            <path
              d="M464 2745 c-150 -26 -171 -35 -188 -77 -17 -39 -10 -71 21 -103 30
-29 48 -30 163 -10 125 22 117 25 156 -62 19 -43 44 -96 54 -118 29 -61 137
-299 180 -395 133 -297 283 -617 297 -632 15 -17 57 -18 778 -18 594 0 765 3
777 13 9 6 28 55 42 107 15 52 40 138 56 190 16 52 57 185 90 295 34 110 71
231 82 268 l21 68 -27 27 -26 27 -1036 5 -1035 5 -93 204 c-94 207 -111 231
-161 230 -11 -1 -79 -11 -151 -24z m2326 -590 c0 -8 -6 -32 -14 -52 -8 -21
-49 -153 -91 -293 -42 -140 -81 -270 -86 -287 l-11 -33 -667 0 -668 0 -103
228 c-56 125 -124 275 -151 333 -27 58 -49 109 -49 112 0 4 414 7 920 7 806 0
920 -2 920 -15z"
            />
            <path
              d="M1483 1159 c-77 -16 -123 -74 -123 -155 0 -161 224 -209 290 -61 25
54 25 81 0 131 -33 67 -98 100 -167 85z"
            />
            <path
              d="M2129 1130 c-47 -38 -63 -77 -57 -142 5 -44 11 -57 45 -89 52 -48
104 -58 166 -31 86 38 117 123 77 207 -30 61 -69 85 -140 85 -47 0 -61 -5 -91
-30z"
            />
          </g>
        </svg>
 <EmptyCart>Your Cart is Empty</EmptyCart>
      </div>
      <br />
    </>
  );
};

export default EmptyCartSlide;
