import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() text: string = '';
  @Output() textChange: EventEmitter<string> = new EventEmitter<string | ''>();

  inputText = new FormControl('');

  ngOnInit(): void {
    this.inputText.setValue(this.text);
    this.textChange.emit(this.inputText.value ? this.inputText.value : '');
  }

  changeSearchInput() {
    this.textChange.emit(this.inputText.value ? this.inputText.value : '');
  }
}
