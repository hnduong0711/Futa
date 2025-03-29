import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { EditIcon, PlusIcon, Search, Trash } from "lucide-react";

const GenericDataTable = ({
  title,              // Tiêu đề của bảng (ví dụ: "Quản lý chuyến xe")
  columns,            // Cấu hình cột của DataGrid
  initialRows,        // Dữ liệu ban đầu
  onAdd,              // Hàm xử lý thêm (tuỳ chọn)
  onEdit,             // Hàm xử lý sửa (tuỳ chọn)
  onDelete,           // Hàm xử lý xóa (tuỳ chọn)
  searchFields = [],  // Các trường để tìm kiếm (mảng tên field)
}) => {
  const [rows, setRows] = useState(initialRows);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [newRow, setNewRow] = useState({});

  // Hàm tìm kiếm
  const filteredRows = rows.filter((row) =>
    searchFields.length > 0
      ? searchFields.some((field) =>
          String(row[field] || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
  );

  // Hàm thêm dòng mới
  const handleAdd = () => {
    if (Object.values(newRow).every((val) => !val)) {
      alert("Vui lòng điền ít nhất một thông tin!");
      return;
    }
    const newId = Math.max(...rows.map((row) => row.id), 0) + 1;
    const addedRow = { id: newId, ...newRow };
    setRows([...rows, addedRow]);
    setNewRow({});
    if (onAdd) onAdd(addedRow); // Gọi callback nếu có
  };

  // Hàm sửa nhiều dòng
  const handleEdit = () => {
    if (selectedRows.length === 0) {
      alert("Vui lòng chọn ít nhất một dòng để sửa!");
      return;
    }
    if (Object.values(newRow).every((val) => !val)) {
      setSelectedRows([]);
      return;
    }
    const updatedRows = rows.map((row) => {
      if (selectedRows.includes(row.id)) {
        return { ...row, ...newRow };
      }
      return row;
    });
    setRows(updatedRows);
    setNewRow({});
    setSelectedRows([]);
    if (onEdit) onEdit(updatedRows.filter((row) => selectedRows.includes(row.id))); // Gọi callback nếu có
  };

  // Hàm xóa nhiều dòng
  const handleDelete = () => {
    if (selectedRows.length === 0) {
      alert("Vui lòng chọn ít nhất một dòng để xóa!");
      return;
    }
    if (window.confirm(`Xóa ${selectedRows.length} dòng đã chọn?`)) {
      const deletedRows = rows.filter((row) => selectedRows.includes(row.id));
      setRows(rows.filter((row) => !selectedRows.includes(row.id)));
      setSelectedRows([]);
      if (onDelete) onDelete(deletedRows); // Gọi callback nếu có
    }
  };

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  return (
    <div className="mx-2 p-4 w-full border border-slate-300 shadow-[0_0_4px_4px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col space-y-6">
        <span className="text-futa-heading font-semibold text-3xl text-center uppercase">
          {title}
        </span>
        {/* Control panel */}
        <div className="flex flex-col">
          <div className="relative">
            <Search className="absolute top-1/2 left-2 transform -translate-y-1/2" />
            <input
              type="text"
              className="pl-12 border-none rounded-2xl w-full bg-slate-200 h-[40px] focus:border focus:border-futa-primary focus:outline-none focus:bg-futa-primary-hover/20 text-slate-800 transition-all duration-200"
              placeholder="Tìm kiếm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <Button
              variant="outlined"
              onClick={handleAdd}
              startIcon={<PlusIcon size={16} />}
            >
              Thêm
            </Button>
            <Button
              variant="outlined"
              onClick={handleDelete}
              startIcon={<Trash size={16} />}
              disabled={selectedRows.length === 0}
            >
              Xóa
            </Button>
            <Button
              variant="outlined"
              onClick={handleEdit}
              startIcon={<EditIcon size={16} />}
              disabled={selectedRows.length === 0}
            >
              Sửa
            </Button>
          </div>
          {/* Input cho dữ liệu mới */}
          <div className="mt-4 flex space-x-4">
            {columns.map((col) => (
              col.field !== "id" && (
                <input
                  key={col.field}
                  type="text"
                  placeholder={`Nhập ${col.headerName}`}
                  value={newRow[col.field] || ""}
                  onChange={(e) =>
                    setNewRow({ ...newRow, [col.field]: e.target.value })
                  }
                  className="p-2 border rounded"
                />
              )
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            pagination
            disableColumnResize
            checkboxSelection
            onRowSelectionModelChange={handleSelectionChange}
            sx={{
              "& .MuiDataGrid-footerContainer": {
                borderTop: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GenericDataTable;