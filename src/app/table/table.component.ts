import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material";
import { MatTableDataSource } from "@angular/material/table";
import data from "../data";
// import { Router } from "@angular/router";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["Id", "Name", "Mnemonic"];
  dataSource = new MatTableDataSource(data.dataroot.Functions);
  selectedRowIndex: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // constructor(private router: Router) {}
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  // dblclick(index) {
  //   this.router.navigate(["/dynamicForm", { index }]);
  // }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  highlight(index: number) {
    if (index >= 0 && index <= data.dataroot.Functions.length - 1)
      this.selectedRowIndex = index;
  }

  arrowUpEvent(index: number) {
    this.highlight(index - 1);
  }

  arrowDownEvent(index: number) {
    this.highlight(index + 1);
  }
}
