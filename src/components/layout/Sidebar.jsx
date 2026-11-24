import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
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
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/demo", label: "Demo Page", icon: FileText },
  { path: "/pos", label: "POS / Sales", icon: ShoppingCart },
  { path: "/products", label: "Products", icon: Package },
  { path: "/inventory", label: "Inventory", icon: Warehouse },
  { path: "/customers", label: "Customers", icon: Users },
  { path: "/suppliers", label: "Suppliers", icon: Truck },
  { path: "/purchases", label: "Purchases", icon: ShoppingBag },
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/settings", label: "Settings", icon: Settings },
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
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {Icon && <Icon size={19} />}
                <span>{item.label}</span>
              </NavLink>
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