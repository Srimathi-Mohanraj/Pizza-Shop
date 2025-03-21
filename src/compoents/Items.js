 import React from "react";
import { Button } from "react-bootstrap";

 function Items()
 {
    return(

        <div>
            <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Margherita</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Cheese Pizza</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">3</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Perporoni</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">1</span>
  </li>
</ol>

<div className="text-primary text-end mt-3">
    <Button>Check Out</Button>
</div>
        </div>
       
    )
 }
 export default Items;