function foo() { 
    'use strict'; 
    bar = true; //variable bar tidak pernah dideklarasi
  } 
  foo(); // ReferenceError: bar is not defined