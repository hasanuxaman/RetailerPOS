import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Warehouse,
  Users,
  Truck,
  ShoppingBag,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "POS / Sales", icon: ShoppingCart },
  { label: "Products", icon: Package },
  { label: "Inventory", icon: Warehouse },
  { label: "Customers", icon: Users },
  { label: "Suppliers", icon: Truck },
  { label: "Purchases", icon: ShoppingBag },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="px-6 py-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white">RetailerPOS</h1>
        <p className="text-xs text-slate-400 mt-1">Retail Management System</p>
      </div>
      <nav className="flex-1 px-4 py-5">
        <p className="text-xs uppercase text-slate-500 font-semibold mb-4 px-3">
          Main Menu
        </p>
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
      <div className="p-4 border-t border-slate-700">
        <p className="text-sm text-slate-400">Version 1.0.0</p>
      </div>
    </aside>
  );
}

export default Sidebar;
