import React from "react";
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
  return (
    <div className="font-inter container mx-auto">
      <div className="font-inter mt-4 mb-4 flex justify-between items-center">
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
          Write a function that takes in a sorted array of integers as well as a
          target integer. The function should use the Binary Search algorithm to
          find if the target number is contained in the array and should return
          its index if it is, otherwise -1.
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
          we recur for right half. Else (x is smaller) recur for the left half.
        </p>
      </div>
      <div className="editor">
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
    </div>
  );
}
