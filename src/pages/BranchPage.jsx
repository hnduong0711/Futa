import { useState } from "react";
import branches from "../constatnts/statics/Branch";

function BranchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc chi nhánh theo địa chỉ
  const filteredBranches = branches.filter((branch) =>
    branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Tìm kiếm theo địa chỉ..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="gap-4 grid grid-cols-3">
          {filteredBranches.length > 0 ? (
            filteredBranches.map((branch, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800">{branch.location}</h3>
                <p className="text-gray-600">Địa chỉ: {branch.address}</p>
                <p className="text-gray-600">Số điện thoại: {branch.phone}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Không tìm thấy chi nhánh nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BranchPage;