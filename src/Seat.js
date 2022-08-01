import styled from "styled-components";
import { useState } from "react";

export default function Seat({ children, isAvailable, seat, ids, setIds, id, pickedSeats, setPickedSeats }) {

    const [picked, setPicked] = useState(false);

    seat = {
        ...seat,
        picked
    }

    function addPickedSeat() {
        if (!picked) {
            if (!pickedSeats.includes(seat.name)) {
                setPickedSeats([...pickedSeats, seat.name])
            } else {
                setPickedSeats(pickedSeats.filter(number => number !== seat.name))
            }
        } else {
            setPickedSeats(pickedSeats.filter(number => number !== seat.name))
        }
    }

    return (
        <SeatNumber isAvailable={isAvailable} picked={picked} onClick={() => {
            addPickedSeat();
            setPicked(!picked);
            setIds([...ids, id]);
        }}>{children}</SeatNumber>
    )

}

const SeatNumber = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${({ isAvailable, picked }) => !isAvailable ? 'rgba(251, 225, 146, 1)' : picked ? 'rgba(141, 215, 207, 1)' : 'rgba(195, 207, 217, 1)'};
    border: 1px solid ${({ isAvailable, picked }) => !isAvailable ? 'rgba(247, 197, 43, 1)' : picked ? 'rgba(26, 174, 158, 1)' : 'rgba(128, 143, 157, 1)'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3.5px 18px;
    font-size: 11px;
`;