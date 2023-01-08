import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { RouterLink } from '@angular/router';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { InputPaisComponent } from './components/input-pais/input-pais.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    TablaPaisComponent,
    InputPaisComponent
  ],
  exports:[
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent,
    PorCapitalComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class PaisModule { }
