
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import DemoPage from "./pages/DemoPage/DemoPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/products/Product";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-50 flex">
                {/* Sidebar */}
                <Sidebar/>
                {/* Main Content */}
                <div className="flex-1 min-w-0">

                    {/* Header */}
                    <Header />

                    {/* Dashboard */}
                    {/* Dynamic Page Routes */}
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/products" element={<Product />} />
                            <Route path="*" element={<Dashboard />} />
                        </Routes>
                    </main>
                    {/* Footer */}
                    <footer className="bg-white border-t border-gray-200 py-4 px-6">
                        <p className="text-center text-sm text-gray-500">
                            &copy; 2023 Your Company. All rights reserved.
                        </p>
                    </footer>

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
