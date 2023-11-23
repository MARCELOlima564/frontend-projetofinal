"use client"
import React from "react";

export function Input({index, task}){
  return(
  <div key={index}>
    <p>#{index} - <span>{task}</span></p>
  </div>
)

}
export default Input;
