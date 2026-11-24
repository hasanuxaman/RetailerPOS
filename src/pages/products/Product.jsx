import { useState } from "react";
import { Plus, Search, Trash2, Package } from "lucide-react";

import CommonButton from "../../components/buttons/CommonButton";
import InputField from "../../components/inputs/InputField";
import SelectField from "../../components/inputs/SelectField";
import DataTable from "../../components/tables/DataTable";
import CommonModal from "../../components/common/CommonModal";

const initialProducts = [
    {
        id: 1,
        productCode: "P001",
        productName: "Rice 5 KG",
        category: "Grocery",
        salePrice: 450
    },
    {
        id: 2,
        productCode: "P002",
        productName: "Cooking Oil",
        category: "Grocery",
        salePrice: 180
    },
    {
        id: 3,
        productCode: "P003",
        productName: "Milk Powder",
        category: "Dairy",
        salePrice: 850
    }
];

const categoryOptions = [
    { value: "Grocery", label: "Grocery" },
    { value: "Dairy", label: "Dairy" },
    { value: "Electronics", label: "Electronics" }
];

const initialForm = {
    productName: "",
    category: "",
    salePrice: ""
};


function Product() {

    const [products, setProducts] = useState(initialProducts);

    const [search, setSearch] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState(initialForm);

    const [error, setError] = useState("");

    // Input Change Handler
    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData(previous => ({
            ...previous,
            [name]: value
        }));

        setError("");
    };

    // Search Filter
    const filteredProducts = products.filter(product =>
        product.productName
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // Save Product
    const handleSubmit = (event) => {

        event.preventDefault();

        if (!formData.productName.trim()) {
            setError("Product name is required");
            return;
        }

        if (!formData.category) {
            setError("Please select a category");
            return;
        }

        if (
            formData.salePrice === "" ||
            Number(formData.salePrice) <= 0
        ) {
            setError("Enter a valid sale price");
            return;
        }

        const newProduct = {
            id: Date.now(),
            productCode: `P${String(products.length + 1).padStart(3, "0")}`,
            productName: formData.productName.trim(),
            category: formData.category,
            salePrice: Number(formData.salePrice)
        };

        setProducts(previous => [
            ...previous,
            newProduct
        ]);

        setFormData(initialForm);
        setError("");
        setIsModalOpen(false);
    };

    // Delete Product
    const handleDelete = (productId) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmed) return;

        setProducts(previous =>
            previous.filter(product =>
                product.id !== productId
            )
        );
    };

    // Table Columns
    const columns = [
        {
            key: "productCode",
            label: "Product Code"
        },
        {
            key: "productName",
            label: "Product Name"
        },
        {
            key: "category",
            label: "Category"
        },
        {
            key: "salePrice",
            label: "Sale Price",
            render: row => (
                <span className="font-semibold">
                    ৳ {row.salePrice.toLocaleString("en-BD")}
                </span>
            )
        },
        {
            key: "actions",
            label: "Actions",
            render: row => (
                <button
                    type="button"
                    onClick={() => handleDelete(row.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    title="Delete Product"
                >
                    <Trash2 size={17} />
                </button>
            )
        }
    ];

    
    return (
        <div className="p-6 space-y-6">
            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Product Management
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Manage your store products
                    </p>
                </div>
                <CommonButton
                    label="Add Product"
                    icon={Plus}
                    onClick={() => {
                        setFormData(initialForm);
                        setError("");
                        setIsModalOpen(true);
                    }}
                />
            </div>

             <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                    <Package size={25} />
                </div>
                 <div>
                    <p className="text-sm text-slate-500">
                        Total Products
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800">
                        {products.length}
                    </h2>
                </div>
             </div>

              {/* Search */}
            <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="relative max-w-md">
                     <Search
                        size={18}
                        className="absolute left-3 top-3 text-slate-400"
                    />
                    <input
                        type="text"
                        value={search}
                        onChange={event =>
                            setSearch(event.target.value)
                        }
                        placeholder="Search product..."
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:border-blue-500"
                    />
                </div>
            </div>
             {/* Product Table */}
              <DataTable
                columns={columns}
                data={filteredProducts}
                rowKey="id"
                emptyMessage="No products found"
            />
              {/* Add Product Modal */}
              <CommonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Product"
            >

            <form onSubmit={handleSubmit} className="space-y-4">
                 <InputField
                        label="Product Name"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                    />
                     <SelectField
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={categoryOptions}
                        placeholder="Select category"
                        required
                    />
                     <InputField
                        label="Sale Price"
                        name="salePrice"
                        type="number"
                        value={formData.salePrice}
                        onChange={handleChange}
                        placeholder="Enter sale price"
                        required
                    />
                    {error && (
                        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                            {error}
                        </p>
                    )}
                    <div className="flex justify-end gap-3 pt-3">
                         <CommonButton
                            label="Cancel"
                            variant="secondary"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <CommonButton
                            label="Save Product"
                            type="submit"
                            variant="success"
                        />
                    </div>

            </form>

            </CommonModal>
        </div>
    );
}

export default Product;