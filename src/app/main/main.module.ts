import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { ServicesService } from './services.service';
import { ReactiveFormsModule } from "@angular/forms";
import { MapsComponent } from './maps/maps.component';


@NgModule({
  declarations: [
    HomeComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService],
})
export class MainModule { }
