import { React, useState } from "react";
import Editor from "@components/Editor";

export default function Question() {
  const code = `let iterativeFunction = function (arr, x) { 
   
    let start=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
    
        // If element is present at mid, return True 
        if (arr[mid]===x) return true; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < x)  
              start = mid + 1; 
        else
              end = mid - 1; 
    } 
    
    return false; 
}     
`;

  const [dropdown, setDropdown] = useState(true);

  const handleDropdownClick = () => {
    if (dropdown) setDropdown(false);
    else setDropdown(true);
  };

  const [dropdownSelect, setDropdownSelect] = useState("C++");
  const [compiled, setCompiled] = useState(true);

  const handleDropdownValue = (value) => {
    setDropdownSelect(value);
    handleDropdownClick();
  };
  return (
    <div className="font-inter mx-auto grid grid-cols-4">
      <div className="sidebar h-auto bg-gray-100"></div>
      <div className="main col-span-3 mx-8">
        <div className="mt-4 mb-4 flex justify-between items-center">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-3xl inline">Binary Search</h1>
            <span className="easy-btn">Easy</span>
          </div>
          <div className="justify-center">
            <span className="bg-yellow-400 btn text-white">Recursion</span>
            <span className="bg-gray-800	btn text-white">Searching</span>
            <span className="bg-red-500 btn text-white">C++</span>
          </div>
        </div>
        <div className="problem-statement">
          <p>
            Write a function that takes in a sorted array of integers as well as
            a target integer. The function should use the Binary Search
            algorithm to find if the target number is contained in the array and
            should return its index if it is, otherwise -1.
          </p>
          <p className="font-bold my-2">
            Sample Input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
          </p>
          <p className="font-bold my-2">Sample Output: 3</p>
        </div>
        <div className="approach my-8">
          <h1 className="font-bold text-3xl inline">Approach</h1>
          <p className="my-4">
            We basically ignore half of the elements just after one comparison.
            Compare x with the middle element. If x matches with middle element,
            we return the mid index. Else If x is greater than the mid element,
            then x can only lie in right half subarray after the mid element. So
            we recur for right half. Else (x is smaller) recur for the left
            half.
          </p>
        </div>
        <div className="editor">
          {/* DROPDOWN BUTTON */}
          <div class="relative inline-block text-left my-4">
            <div>
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={handleDropdownClick}
              >
                {/* Options
      <!-- Heroicon name: chevron-down --> */}
                {dropdownSelect}
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            <div
              class={`z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                dropdown ? "hidden" : ""
              }`}
            >
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleDropdownValue("c++")}
                  // onClick={handleDropdownValue("c++")}
                >
                  C++
                </div>
                <div
                  class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleDropdownValue("Javascript")}

                  // onClick={handleDropdownValue("Javascript")}
                >
                  Javascript
                </div>
                <div
                  class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleDropdownValue("Python")}

                  // onClick={handleDropdownValue("python")}
                >
                  Python
                </div>
              </div>
            </div>
          </div>
          <div className="editor-wrapper rounded-lg overflow-hidden">
            <Editor
              height="70vh"
              width="90vw"
              language="javascript"
              value={code}
            />
          </div>

          <div className="execution-buttons my-4">
            <button className="bg-green-500 py-2 px-6 rounded text-white mx-2 uppercase">
              Compile 🔩
            </button>
            <button className="bg-blue-600 py-2 px-6 rounded text-white uppercase">
              Run ⚡️
            </button>
          </div>
        </div>

        <div className="compile-box">
          <div className="bg-gray-900 rounded my-4 p-4">
            <p className="text-white">[INFO] &rarr; Compiling...</p>
            <p className="text-white">[INFO] &rarr; Running...</p>
            {compiled && (
              <p>
                <span className="text-green-500">Compiled Successfully!</span>
              </p>
            )}
            {!compiled && (
              <p>
                <span className="text-red-500">
                  Compilation Error &rarr; <br />
                  <p className="text-red-500">
                    In function ‘int main()’: <br />
                    6:2: error: ‘retrn’ was not declared in this scope
                  </p>
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="run-box rounded overflow-hidden text-white mb-8">
          <div className="metrics grid grid-cols-4 bg-black text-white p-2">
            <p className="font-semibold">
              Run Status:{" "}
              <span className="text-green-500 font-robotomono">AC</span>
            </p>
            <p className="font-semibold">
              Compile Status:{" "}
              <span className="text-green-500 font-robotomono">OK</span>
            </p>
            <p className="font-semibold">
              Time (sec):{" "}
              <span className="text-green-500 font-robotomono">0.001212</span>
            </p>
            <p className="font-semibold">
              Memory (KB):{" "}
              <span className="text-green-500 font-robotomono">64</span>
            </p>
          </div>
          <div className="input-stdin">
            <p className="bg-gray-500 p-2">Input (STDIN)</p>
            <p>
              <p className="bg-black font-semibold pl-8 p-1">256</p>
            </p>
          </div>
          <div ClassName="output-stdout">
            <p className=" bg-gray-500 p-2">Output (STDOUT)</p>
            <p>
              <p className="bg-black font-semibold pl-8 p-1">256</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
