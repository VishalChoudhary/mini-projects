import React from 'react';

const Success = () => {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "green",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            fontSize: "25px",
            fontWeight: 500,
            marginBottom: "10px"
          }}
        >
          Successful
        </button>
        <div style={{
          textAlign: "center",
          fontSize: "15px"
        }}
        >
          Order Placed<br />
          Thanks for choosing Bbaazar.
        </div>
      </div>
    );
  };
  
  export default Success;