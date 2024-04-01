import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Modal";
import DragButton from "./DragButton";
import { Signal } from "@preact/signals-react";

function App() {
  const createArr = (): number[] => {
    const arr = new Array(100000).fill(null).map(() => Math.random());
    return arr;
  };
  const myArr = new Array(1000).fill(null).map(() => Math.random());
  const [isOpen, setIsOpen] = useState(true);
  const exampleSignal = new Signal("here!");
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
              <div className="text-black scroll-auto">
                hello world {exampleSignal}
                <button
                  onClick={() => {
                    exampleSignal.value = "kks";
                  }}
                >
                  click
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <div>
          <DragButton />
        </div>

        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            {/* {myArr.map((row, i) => (
              <tr key={i}>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
