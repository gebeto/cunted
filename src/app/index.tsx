import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";

const root = createRoot(document.getElementById("root")!);
root.render(<Counter />);
