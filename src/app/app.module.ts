import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductCountComponent } from './shared/components/product-count/product-count.component';
import { PostsFormComponent } from './shared/components/posts-form/posts-form.component';
import { PostList1Component } from './shared/components/post-list1/post-list1.component';
import { PostList2Component } from './shared/components/post-list2/post-list2.component';
import { FormsModule } from '@angular/forms';
import { PostsService } from './shared/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCountComponent,
    PostsFormComponent,
    PostList1Component,
    PostList2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
