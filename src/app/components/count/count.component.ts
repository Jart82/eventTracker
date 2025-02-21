import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  imports: [FormsModule, CommonModule]
})
export class CountComponent implements OnInit {
  selectedDate: string = "";
  daysDiff: number | null = null; // Initialize with null to avoid NaN

  ngOnInit(): void {
    // Load stored date if available
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      this.selectedDate = storedDate;
      this.count(); // Calculate difference when component loads
    }
  }

  count() {
    if (!this.selectedDate) {
      this.daysDiff = null;
      console.log("No date selected.");
      return;
    }

    // Save selected date to localStorage
    localStorage.setItem("selectedDate", this.selectedDate);

    // Calculate difference from current date
    const currentDate = new Date();
    const selected = new Date(this.selectedDate);
    const timeDiff = selected.getTime() - currentDate.getTime();
    
    this.daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to days

    
    console.log(`Days difference: ${this.daysDiff}`);
  }
}
