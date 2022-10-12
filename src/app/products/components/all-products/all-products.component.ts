import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  cartProducts:any[] = [];
  product_not_found:boolean=false;
  constructor(private service:ProductsService,private title:Title) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    this.title.setTitle("Home-All Products")
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
   
      console.log(res);
      
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     }   )
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     })
  }
  
  filterCategory(event:any) {
    if(event.target.type=="text"||event.target.type=="select-one")
    {
       let value = event.target.value;
   (value == "all") ? this.getProducts() : this.getProductsCategory(value);
    }else{
      let value = event.target.name;
      (value == "all") ? this.getProducts() : this.getProductsCategory(value);
      console.log(value);
    }
   
  // console.log(event.target.type); 
  }
  
  getProductsCategory(keyword:string) {
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.loading = false
      this.products = res;
    //  console.log(res)
      if(res==""){this.product_not_found=true}else{this.product_not_found=false}
    })
  }

  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
  }
  
}
