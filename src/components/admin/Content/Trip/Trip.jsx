import React from "react";
import GenericDataTable from "../../GenericDataTable/GenericDataTable"

const Trip = () => {
  const initialRows = [
    { id: 1, start: "TP.Hồ Chí Minh", end: "Phan Thiết" },
    { id: 2, start: "TP.Hồ Chí Minh", end: "Nha Trang" },
    { id: 3, start: "Hà Nội", end: "Đà Nẵng" },
    { id: 4, start: "TP.Hồ Chí Minh", end: "Phan Thiết" },
    { id: 5, start: "TP.Hồ Chí Minh", end: "Nha Trang" },
    { id: 6, start: "Hà Nội", end: "Đà Nẵng" },
    { id: 7, start: "TP.Hồ Chí Minh", end: "Phan Thiết" },
    { id: 8, start: "TP.Hồ Chí Minh", end: "Nha Trang" },
    { id: 9, start: "Hà Nội", end: "Đà Nẵng" },
  ];

  const columns = [
    {
      field: "id",
      headerName: "STT",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "start",
      headerName: "Điểm đi",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "end",
      headerName: "Điểm đến",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  const handleAdd = (newRow) => {
    console.log("Thêm chuyến xe:", newRow);
    // Gọi API hoặc dispatch Redux action nếu cần
  };

  const handleEdit = (updatedRows) => {
    console.log("Sửa các chuyến xe:", updatedRows);
    // Gọi API hoặc dispatch Redux action nếu cần
  };

  const handleDelete = (deletedRows) => {
    console.log("Xóa các chuyến xe:", deletedRows);
    // Gọi API hoặc dispatch Redux action nếu cần
  };

  return (
    <GenericDataTable
      title="Quản lý chuyến xe"
      columns={columns}
      initialRows={initialRows}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      searchFields={["start", "end"]} // Chỉ tìm kiếm trên các trường "start" và "end"
    />
  );
};

export default Trip;