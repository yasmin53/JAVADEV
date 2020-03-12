import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Company } from '../models/companies';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-comparecompanies',
  templateUrl: './comparecompanies.component.html',
  styleUrls: ['./comparecompanies.component.css']
})
export class ComparecompaniesComponent implements OnInit {
  compareCompany: FormGroup;
  companies: Company[];
  constructor(private formBulder: FormBuilder, private companyService: CompanyService) { }
  ngOnInit() {
    this.compareCompany = this.formBulder.group({
      selectCompany1: [''],
      selectCompany2: ['']
    });
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
    });
  }
  compareCompanies(){
    console.log(this.compareCompany.value);
    alert(this.compareCompany.value);
  }
}