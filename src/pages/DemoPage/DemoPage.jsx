
import { useState } from "react";
import InputField from "../../components/inputs/InputField";
import DataTable from "../../components/tables/DataTable";





const initialProducts = [
    { id: 1, productCode: "P001", productName: "Rice 5 KG", salePrice: 450 },
    { id: 2, productCode: "P002", productName: "Cooking Oil", salePrice: 180 },
];

const columns = [
    {
        key: "productCode",
        label: "Product Code",
    },
    {
        key: "productName",
        label: "Product Name",
    },
    {
        key: "salePrice",
        label: "Sale Price",
        render: (row) => `৳ ${Number(row.salePrice ?? 0).toLocaleString("en-IN")}`,
    },
];

function DemoPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    //const [columns, setColumns] = useState(columns);
    const [products, setProducts] = useState(initialProducts);
    const handleSubmmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setEmail("Entered email");
            return;
        } else {
            setError(false);
            alert("Email is valid!");
        }
    };

    return (
        <form onSubmit={handleSubmmit} className="mx-auto max-w-md space-y-4 p-6">
            <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Submit
            </button>

            <div>
                <DataTable
                    columns={columns}
                    data={products}
                    rowKey="id"
                />

            </div>
        </form>


    );
}

export default DemoPage;