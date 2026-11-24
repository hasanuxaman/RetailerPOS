
import { useState } from "react";
import InputField from "../../components/inputs/InputField";

function DemoPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
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
        </form>
    );
}

export default DemoPage;