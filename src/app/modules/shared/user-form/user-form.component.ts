import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../components/people/models/person.model";

@Component({
  selector: 'user-form-app',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  userForm: FormGroup;
  @Input() person: Person = null;
  @Output() saveUser = new EventEmitter<any>();

  ngOnInit() {
    this.setUserForm();
  }

  setUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.person ? this.person.name : '',
        [Validators.required, Validators.max(70)]),
      isActive: new FormControl(this.person ? this.person.isActive : true),
      age: new FormControl(this.person ? this.person.age : null,
        [Validators.required, Validators.min(18), Validators.max(110)]),
      about: new FormControl(this.person ? this.person.about : '', Validators.max(250)),
      gender: new FormControl(this.person ? this.person.gender : '', Validators.required),
    });
  }

  onSaveUser() {
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      this.saveUser.emit(this.userForm);
    }
  }
}
