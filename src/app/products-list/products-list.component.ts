import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  
  allProducts=[];
  ProductsSelectedForArchive=[];
  
  constructor( public _ProductsService : ProductService) 
  
  { 

    _ProductsService.getAllProducts().subscribe( (response=>{

this.allProducts=response;
console.log(this.allProducts);

    })


    );
    


  }

  selectedArchives() {
   var elements = (<HTMLInputElement[]><any>document.getElementsByName("arch"));
   for (let i = 0; i < elements.length; i++) {
   if (elements[i].type == "checkbox") {
      if (elements[i].checked) {
         console.log("Checked", elements[i].checked);
         this.ProductsSelectedForArchive.push(elements[i].value);
         elements[i].checked=false;
        // this.inEditMode = true;
        // break;                      //<== Add this line in your for loop
       }
       else {
         console.log("Unchecked", elements[i].checked);
      //   this.inEditMode = false;
       }
     }
   }
   console.log(this.ProductsSelectedForArchive);
   this._ProductsService.archive(this.ProductsSelectedForArchive).subscribe( (response=>{
    console.log(response);
    this.ProductsSelectedForArchive=[];
        })
    
    
        );
  
  
 }

  ngOnInit() {
  }

}
