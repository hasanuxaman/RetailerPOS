
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return (
        <div className="min-h-screen bg-slate-50 flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 min-w-0">

                {/* Header */}
                <Header />

                {/* Dashboard */}
                <main>
                    <Dashboard />
                </main>

            </div>

        </div>
    );
}

export default App;
