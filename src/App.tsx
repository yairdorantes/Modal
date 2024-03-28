import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Modal";
import DragButton from "./DragButton";

function App() {
  const createArr = (): number[] => {
    const arr = new Array(100).fill(null).map(() => Math.random());
    return arr;
  };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="text-white">
        <button className="p-4 bg-teal-300" onClick={() => setIsOpen(true)}>
          App
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div>
            <div className="w-40 h-40 flex justify-center items-center  bg-gray-100 rounded-lg  ">
              <div className="text-black ">hello world </div>
            </div>
          </div>
        </Modal>
        <div>
          <DragButton />
        </div>
      </div>
    </div>
  );
}

export default App;
