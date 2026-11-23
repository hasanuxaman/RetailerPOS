
import {
    Search,
    Bell,
    UserCircle,
    Menu
} from "lucide-react";


function Header() {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                  <button className="text-slate-600">
                    <Menu size={22} />
                </button>
                <h2 className="text-lg font-semibold text-slate-800">
                    Dashboard
                </h2>
            </div>
            <div className="flex items-center gap-5">
                <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2">
                    <Search size={18} className="text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none px-2 text-sm w-40"
                    />
                </div>
                <button className="relative text-slate-600">
                    <Bell size={21} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2">
                    <UserCircle size={32} className="text-slate-500" />
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-slate-800">
                            Admin User
                        </p>
                        <p className="text-xs text-slate-500">
                            Administrator
                        </p>
                    </div>
                </div>

            </div>
        </header>
    );
}
export default Header;