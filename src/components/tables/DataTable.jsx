




function DataTable({
    columns = [],
    data = [],
    loading = false,
    emptyMessage = "No records found",
    rowKey = "id",
}) {
    return (
        <div className="w-full overflow-x-auto bg-white rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-600">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-4 py-2 border border-slate-300"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="px-4 py-2 border border-slate-300 text-center"
                            >
                                Loading...
                            </td>
                        </tr>
                    ) : data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="text-center py-10 text-slate-500"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <tr key={row[rowKey] ?? index} className="hover:bg-slate-100">
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className="px-4 py-2 border border-slate-300"
                                    >
                                        {typeof column.render === "function"
                                            ? column.render(row, row[column.key])
                                            : (row[column.key] ?? "-")}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;