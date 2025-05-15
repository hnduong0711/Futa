import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Seat from "./Seat";

const SeatLayout = ({ seatsCount = 36, bookedSeats = [], selectedSeats = [], onSeatClick }) => {
  // Determine seats per tier (18 for 36 seats, 17 for 34 seats)
  const seatsPerTier = seatsCount === 36 ? 18 : 17;

  // Generate seat numbers for lower (A) and upper (B) tiers
  const generateSeatNumbers = (tier, count) => {
    const seats = [];
    for (let i = 1; i <= count; i++) {
      seats.push(`${tier}${i.toString().padStart(2, "0")}`);
    }
    return seats;
  };

  // Seat numbers for each tier
  const lowerTierSeats = generateSeatNumbers("A", seatsPerTier);
  const upperTierSeats = generateSeatNumbers("B", seatsPerTier);

  // Check if a seat is virtual (non-existent, e.g., A00 for 34 seats)
  const isVirtualSeat = (seatNumber) => {
    return seatsCount === 34 && seatNumber === "A01";
  };

  // Render a single tier of seats
  const renderTier = (tierSeats, tierLabel) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "#f97316" }}>
        {tierLabel}
      </Typography>
      <Grid container spacing={2} columns={3} sx={{ maxWidth: "300px" }}>
        {Array.from({ length: 6 }).map((_, rowIndex) =>
          [0, 1, 2].map((colIndex) => {
            // Calculate seat index (3 columns, 6 rows)
            const seatIndex = rowIndex * 3 + colIndex;
            const seatNumber = tierSeats[seatIndex];
            if (!seatNumber) return null;

            return (
              <Grid item xs={1} key={seatNumber}>
                <Seat
                  isBooked={bookedSeats.includes(seatNumber)}
                  isSelected={selectedSeats.includes(seatNumber)}
                  isVirtual={isVirtualSeat(seatNumber)}
                  onClick={() => onSeatClick(seatNumber)}
                  seatNumber={seatNumber}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", borderRadius: 2, maxWidth: "600px", mx: "auto" }}>
      {renderTier(lowerTierSeats, "Lower Tier (A)")}
      {renderTier(upperTierSeats, "Upper Tier (B)")}
    </Box>
  );
};

export default SeatLayout;