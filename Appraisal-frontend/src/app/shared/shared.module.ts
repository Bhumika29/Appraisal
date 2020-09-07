import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from '../core/pipes/search/search.pipe';
import { SortPipe } from '../core/pipes/sort/sort.pipe';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule
  ],
  declarations: [SearchPipe,
    SortPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    SearchPipe,
    SortPipe,
    ChartsModule
  ]
})
export class SharedModule {
}
