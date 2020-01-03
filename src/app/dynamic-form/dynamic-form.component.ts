import data from "../data";
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnInit {
  formData: any = {};
  form: any = {};
  formObj: any = [];
  param_value = [];
  submitted: boolean;
  dataId: number;
  numParams: number;
  paramName: string;
  constructor(private route: ActivatedRoute) {}
  formGroup = {};
  ngOnInit() {
    this.formData = data.dataroot.Functions;
    this.dataId = +this.route.snapshot.paramMap.get("index");
    this.formObj = this.formData.filter(val => {
      return val.Id == this.dataId;
    });
    for (let i = 0; i < this.formObj[0].NumParms; i++) {
      this.param_value.push(this.formObj[0][`Parm${i + 1}_Name`]);
    }
    this.param_value.forEach(formControl => {
      this.formGroup[formControl] = new FormControl("");
    });
    this.form = new FormGroup(this.formGroup);
  }

  submitForm() {
    this.submitted = true;
    console.log(this.form);
  }
}
