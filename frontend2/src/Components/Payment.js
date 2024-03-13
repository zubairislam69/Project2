import React, { useState } from "react";
import { Typography, TextField, Grid, Button } from "@mui/material";

const Payment = ({ totalPrice }) => {
    const [paymentInfo, setPaymentInfo] = useState({
        email: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        country: "",
        postalCode: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log("Payment information submitted:", paymentInfo);
    };

    return (
        <div className="payment-page">
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'darkblue', fontSize: '3rem' }} gutterBottom>
                Payment Information
            </Typography>            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* Email Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6">Email</Typography>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={paymentInfo.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    {/* Payment Info Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6">Payment Info</Typography>
                        <TextField
                            fullWidth
                            label="Card Number"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handleChange}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Expiry Date (MM/YY)"
                                    name="expiryDate"
                                    value={paymentInfo.expiryDate}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="CVV"
                                    name="cvv"
                                    value={paymentInfo.cvv}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Country Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6">Country</Typography>
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={paymentInfo.country}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Postal Code"
                            name="postalCode"
                            value={paymentInfo.postalCode}
                            onChange={handleChange}
                        />
                    </Grid>
                    {/* Total Amount Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6">Total Amount: {totalPrice}</Typography>
                    </Grid>
                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Payment;
