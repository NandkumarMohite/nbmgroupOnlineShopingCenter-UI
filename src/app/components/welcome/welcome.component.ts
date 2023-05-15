import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  elements: any[10];
  image: any[10];
  element:any
  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.dataServiceService.getFirstTenElements().subscribe(
      (response: any[10]) => {
        this.elements = response;
        this.loadElementImages();
      },
      (error) => {
        console.error('Error fetching elements:', error);
      }
    );
  }

  loadElementImages(): void {
    this.elements.forEach((element: any) => {
      this.dataServiceService.getElementImage(element.elementId).subscribe(
        (response: Blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            element.elementImage = reader.result;
          };
          reader.readAsDataURL(response);
        },
        (error) => {
          console.error('Error fetching element image:', error);
        }
      );
    });
  }

   addToCart(elements:any){
    {
      this.dataServiceService.changeTheStateOfElement(elements.elementId).subscribe(
        (response: any) => {
           elements.isElementInCart = response.isElementInCart;
         return response.isElementInCart === true ? true :false
        },
        (error) => {
          console.error('Error fetching elements:', error);
        }
      );
    }
  }
  getColor(isElementInCart:boolean){  
   return (isElementInCart==true) ? 'rgb(154, 212, 154)':'rgb(83, 221, 221)'
  }
  getRadiusColor(isElementInCart:boolean){  
    return (isElementInCart==true) ? 'black':'rgb(83, 221, 221)'
   }
}

