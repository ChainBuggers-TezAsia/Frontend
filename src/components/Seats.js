import React, { useState } from "react";

export default function Seats(props) {
  const [isActive, setIsActive] = useState(false);
  // console.log("pro",props.seats)
  return (
    <div>
      <div
        onClick={() => {
          setIsActive(!isActive);
          if (!isActive) {
            props.setSeats(props.seats.concat(props.seatNo));
          }
          else{
            props.setSeats(props.seats.filter(seat=> seat !== props.seatNo))
          }
        }}
        className={`cursor-pointer w-7 h-6 rounded-t-full ${
          isActive ? "bg-green-500" : "bg-gray-800"
        }  m-1`}
      ></div>
    </div>
  );
}
