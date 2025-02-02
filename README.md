# Incorrect State Comparison in useEffect Hook

This example demonstrates a common mistake when using the `useEffect` hook in React: incorrectly comparing the current state to its previous value without properly tracking the previous state.  The code attempts to log a message whenever the count changes, but it does so incorrectly and will result in unexpected behavior or errors. 

## Problem

The provided `MyComponent` attempts to compare the current `count` with a `prevCount` variable which isn't defined or tracked effectively. This will lead to unexpected behavior, potentially infinite loops or incorrect logging.

## Solution

The solution involves using the `useRef` hook to maintain a reference to the previous state. This allows for a proper comparison between the current and previous states within the `useEffect` hook.