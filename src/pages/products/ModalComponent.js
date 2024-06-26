import React, { useState, useEffect, forwardRef } from "react";
import { Modal, Box, TextField } from "@mui/material";
import { ButtonComponent as Button } from "../../components/";

const ModalContent = forwardRef(
  ({ rowData, rowChangeHandler, rowSaveHandler, closeHandler }, ref) => (
    <Box
      ref={ref}
      sx={{
        width: 400,
        bgcolor: "background.paper",
        p: 2,
        mx: "auto",
        my: 4,
      }}
    >
      <TextField
        name="product_name"
        label="Product Name"
        value={rowData.product_name || ""}
        onChange={rowChangeHandler}
        fullWidth
        margin="normal"
      />
      <TextField
        name="sales_count"
        label="Sales Count"
        value={rowData.sales_count || ""}
        onChange={rowChangeHandler}
        fullWidth
        margin="normal"
      />
      <TextField
        name="sale_month"
        label="Sale Month"
        value={rowData.sale_month || ""}
        onChange={rowChangeHandler}
        fullWidth
        margin="normal"
      />
      <TextField
        name="sale_year"
        label="Sale Year"
        value={rowData.sale_year || ""}
        onChange={rowChangeHandler}
        fullWidth
        margin="normal"
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button variant="contained" onClick={rowSaveHandler} sx={{ mr: 2 }}>
          Save
        </Button>
        <Button variant="outlined" onClick={closeHandler}>
          Cancel
        </Button>
      </Box>
    </Box>
  )
);

const ModalComponent = ({ closeHandler, open, initialData, handleRowSave }) => {
  const [rowData, setRowData] = useState(initialData || {});

  useEffect(() => {
    setRowData(initialData || {});
  }, [initialData]);

  const rowSaveHandler = () => {
    handleRowSave(rowData);
    closeHandler();
  };

  const rowChangeHandler = (e) => {
    const { name, value } = e.target;
    setRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={closeHandler}>
      <ModalContent
        rowData={rowData}
        rowChangeHandler={rowChangeHandler}
        rowSaveHandler={rowSaveHandler}
        closeHandler={closeHandler}
      />
    </Modal>
  );
};

export default ModalComponent;
