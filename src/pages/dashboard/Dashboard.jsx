
import {
    DollarSign,
    ShoppingCart,
    Package,
    Users,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";

const summaryCards = [
    {
        title: "Total Sales",
        value: "৳ 85,450",
        change: "+12.5%",
        positive: true,
        icon: DollarSign,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Total Orders",
        value: "245",
        change: "+8.2%",
        positive: true,
        icon: ShoppingCart,
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Total Products",
        value: "1,250",
        change: "+5.4%",
        positive: true,
        icon: Package,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Total Customers",
        value: "890",
        change: "-2.1%",
        positive: false,
        icon: Users,
        color: "bg-orange-100 text-orange-600"
    }
];

const transactions = [
    {
        invoice: "INV-1001",
        customer: "Rahim Uddin",
        date: "23 Nov 2026",
        amount: "৳ 2,500",
        status: "Paid"
    },
    {
        invoice: "INV-1002",
        customer: "Karim Ahmed",
        date: "23 Nov 2026",
        amount: "৳ 1,800",
        status: "Paid"
    },
    {
        invoice: "INV-1003",
        customer: "Hasan Ali",
        date: "23 Nov 2026",
        amount: "৳ 3,200",
        status: "Due"
    },
    {
        invoice: "INV-1004",
        customer: "Sabbir Hossain",
        date: "23 Nov 2026",
        amount: "৳ 950",
        status: "Paid"
    }
];

function Dashboard() {
    return (
        <div className="p-6 space-y-6">

            {/* Page Heading */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">
                    Dashboard Overview
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Welcome back! Here is your store overview.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {summaryCards.map((card) => {
                    const Icon = card.icon;
                    const ChangeIcon = card.positive
                        ? ArrowUpRight
                        : ArrowDownRight;

                    return (
                        <div
                            key={card.title}
                            className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
                        >
                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-sm text-slate-500">
                                        {card.title}
                                    </p>

                                    <h2 className="text-2xl font-bold text-slate-800 mt-2">
                                        {card.value}
                                    </h2>
                                </div>

                                <div className={`p-3 rounded-xl ${card.color}`}>
                                    <Icon size={24} />
                                </div>

                            </div>

                            <div className="flex items-center gap-1 mt-4">
                                <ChangeIcon
                                    size={16}
                                    className={card.positive
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }
                                />

                                <span className={`text-xs font-semibold ${
                                    card.positive
                                        ? "text-green-600"
                                        : "text-red-600"
                                }`}>
                                    {card.change}
                                </span>

                                <span className="text-xs text-slate-400">
                                    from last month
                                </span>
                            </div>

                        </div>
                    );
                })}

            </div>

            {/* Sales Overview */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                <div className="xl:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">
                                Sales Overview
                            </h2>

                            <p className="text-sm text-slate-500">
                                Monthly sales performance
                            </p>
                        </div>

                        <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none">
                            <option>This Year</option>
                            <option>This Month</option>
                            <option>This Week</option>
                        </select>
                    </div>

                    <div className="h-52 flex items-end justify-around gap-3 border-b border-slate-200 pb-2">

                        {[45, 65, 40, 85, 55, 95, 70, 60, 80, 50, 90, 75].map(
                            (height, index) => (
                                <div
                                    key={index}
                                    className="flex-1 flex flex-col justify-end items-center gap-2"
                                >
                                    <div
                                        style={{ height: `${height}%` }}
                                        className="w-full max-w-10 bg-blue-500 hover:bg-blue-700 rounded-t-md transition-colors"
                                    ></div>
                                </div>
                            )
                        )}

                    </div>

                    <div className="flex justify-around mt-3 text-xs text-slate-500">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(month => (
                            <span key={month}>{month}</span>
                        ))}
                    </div>

                </div>

                {/* Stock Alert */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">

                    <h2 className="text-lg font-bold text-slate-800">
                        Low Stock Alert
                    </h2>

                    <p className="text-sm text-slate-500 mt-1 mb-5">
                        Products running low
                    </p>

                    {[
                        { name: "Rice 5 KG", stock: "5 Pcs" },
                        { name: "Cooking Oil", stock: "3 Pcs" },
                        { name: "Sugar 1 KG", stock: "8 Pcs" },
                        { name: "Milk Powder", stock: "2 Pcs" }
                    ].map(product => (
                        <div
                            key={product.name}
                            className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                        >
                            <span className="text-sm font-medium text-slate-700">
                                {product.name}
                            </span>

                            <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                                {product.stock}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">

                <div className="p-5 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-800">
                        Recent Transactions
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                        Latest sales transactions
                    </p>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full text-sm text-left">

                        <thead className="bg-slate-50 text-slate-500">
                            <tr>
                                <th className="px-5 py-4">Invoice</th>
                                <th className="px-5 py-4">Customer</th>
                                <th className="px-5 py-4">Date</th>
                                <th className="px-5 py-4">Amount</th>
                                <th className="px-5 py-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.map(transaction => (
                                <tr
                                    key={transaction.invoice}
                                    className="border-t border-slate-100 hover:bg-slate-50"
                                >
                                    <td className="px-5 py-4 font-semibold text-blue-600">
                                        {transaction.invoice}
                                    </td>

                                    <td className="px-5 py-4 text-slate-700">
                                        {transaction.customer}
                                    </td>

                                    <td className="px-5 py-4 text-slate-500">
                                        {transaction.date}
                                    </td>

                                    <td className="px-5 py-4 font-semibold text-slate-800">
                                        {transaction.amount}
                                    </td>

                                    <td className="px-5 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            transaction.status === "Paid"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-orange-100 text-orange-700"
                                        }`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
}

export default Dashboard;
