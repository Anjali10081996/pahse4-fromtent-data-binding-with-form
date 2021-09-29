import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { OneWayComponent } from './data/one-way/one-way.component';
import { TwoWayComponent } from './data/two-way/two-way.component';
import { StyleBindingComponent } from './data/style-binding/style-binding.component';
import { EventBindingComponent } from './data/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    OneWayComponent,
    TwoWayComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
