import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './display-section.component.html',
  styleUrls: ['./display-section.component.css']
})
export class DisplaySectionComponent {
  @Input() selectedProducts: any[] = [];
  @Input() total: number = 0;
}