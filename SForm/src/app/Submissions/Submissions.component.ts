import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Submissions',
  templateUrl: './Submissions.component.html',
  styleUrls: ['./Submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  constructor() { }
  
  items = [
    { id:1,full_name: 'Prathyusha', lead_name: 'Tejan', technology: 'Java',vendor_name:'Tech Systems',rate:'85/hr'},
    { id:2,full_name: 'Swathi', lead_name: 'Kranthi', technology: 'Java',vendor_name:'Judge group',rate:'73/hr'},
    { id:3,full_name: 'Rachana', lead_name: 'Jagadheesh', technology: 'Devops',vendor_name:'Avtech Solutions',rate:'65/hr' },
    { id:4,full_name: 'Tejaswi', lead_name: 'Kranthi', technology: 'Devops',vendor_name:'Prodware solutions',rate:'60/hr' },
    { id:5,full_name: 'Saisri', lead_name: 'Tejan', technology: 'Devops',vendor_name:'Tech Systems',rate:'62/hr' },
    { id:6,full_name: 'Jahnavi', lead_name: 'Tejan', technology: 'Data Engineering',vendor_name:'Avalon software services',rate:'71/hr' },
   ];


  selectedTechnology = '';
  selectedLeadName = '';
  filteredItems = this.items;

  filterTable() {
    this.filteredItems = this.items.filter(item => {
      const selectedTechnologyMatch = this.selectedTechnology ? item.technology === this.selectedTechnology : true;
      const selectedLeadNameMatch = this.selectedLeadName ? item.lead_name === this.selectedLeadName : true;
      return (this.selectedTechnology === 'all' || selectedTechnologyMatch) && (this.selectedLeadName === 'all' || selectedLeadNameMatch);
    });
  }

  
  ngOnInit() {
  }


  editingItem: any = null;

  
  editItem(item: any): void {
    this.editingItem = { ...item };
  }

  
  saveItem(): void {
    console.log("here");
    const index = this.items.findIndex(item => item.full_name === this.editingItem.full_name);
    if (index !== -1) {
      this.items[index] = { ...this.editingItem };
      this.editingItem = null;
      this.filteredItems = [...this.items];
    }
  }
  
  cancelEdit(): void {
    this.editingItem = null;
  }

  deleteItem(item: any): void {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.filteredItems = this.filteredItems.filter(i => i.id !== item.id);
    }
  }
  
  

  trackByFullName(index: number, item: any): number {
    return index;
  }

saveNewItem(): void {
  const newFullName = (document.getElementById('new-fullname') as HTMLInputElement).value;
  const newLeadName = (document.getElementById('new-leadname') as HTMLInputElement).value;
  const newTechnology = (document.getElementById('new-technology') as HTMLInputElement).value;
  const newVendorName = (document.getElementById('new-vendorname') as HTMLInputElement).value;
  const newRate = (document.getElementById('new-rate') as HTMLInputElement).value;

  const newItem = {
    id: this.items.length + 1,
    full_name: newFullName,
    lead_name: newLeadName,
    technology: newTechnology,
    vendor_name: newVendorName,
    rate: newRate
  };

  this.items.push(newItem);
  this.filteredItems = this.items;
  (document.getElementById('new-fullname') as HTMLInputElement).value = '';
  (document.getElementById('new-leadname') as HTMLInputElement).value = '';
  (document.getElementById('new-technology') as HTMLInputElement).value = '';
  (document.getElementById('new-vendorname') as HTMLInputElement).value = '';
  (document.getElementById('new-rate') as HTMLInputElement).value = '';
}

}
