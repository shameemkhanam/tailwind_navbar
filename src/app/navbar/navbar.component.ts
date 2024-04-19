import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  @ViewChild('dropdown_menu') dropdown_menu!: ElementRef;
  @ViewChild('toggle_button') toggle_button!: ElementRef;


  toggleDropdown(){    
    const dropdown = this.dropdown_menu.nativeElement;
    const toggleBtn = this.toggle_button.nativeElement;
    dropdown.classList.toggle('top-16');
  }
}
