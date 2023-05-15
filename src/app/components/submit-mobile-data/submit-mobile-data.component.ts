import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-submit-mobile-data',
  templateUrl: './submit-mobile-data.component.html',
  styleUrls: ['./submit-mobile-data.component.scss']
})
export class SubmitMobileDataComponent {

  constructor(
    private dataServiceService:DataServiceService
  ){

  }
nameOfImage: string='';
 formData = {
  
  elementName: '',
  elementType: '',
  elementImage: '',
  contentType: 'image/jpeg',
  elementDescription: '',
  elementPrize: '',
  isElementInCart: false
};

handleImageUpload(event: any) {
  console.log(event);
  const file = event.target.files[0];
  console.log(file);
  this.nameOfImage = file.name;
  this.formData.elementImage = file;
}

saveForm() {
  const formData = new FormData();
  formData.append('elementName', this.formData.elementName);
  formData.append('elementType', this.formData.elementType);
  formData.append('elementDescription', this.formData.elementDescription);
  formData.append('elementPrize', this.formData.elementPrize);
  formData.append('isElementInCart', String(this.formData.isElementInCart));
  formData.append('elementImage', this.formData.elementImage);

  this.dataServiceService.saveTheElement(formData).subscribe(
    (response: any) => {
      console.info("Successfully saved the data");
      return true;
    },
    (error) => {
      console.error('Error saving elements:', error);
    }
  );

  console.log(this.formData);
  this.formData = {
    elementName: '',
    elementType: '',
    elementImage: '',
    contentType: 'image/jpeg',
    elementDescription: '',
    elementPrize: '',
    isElementInCart: false
  };
}

}