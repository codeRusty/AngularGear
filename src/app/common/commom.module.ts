import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coreHTTP } from './lib/core/coreHTTP.service'
import { HttpModule } from '@angular/http';
import { BeamService } from './lib/core/beam.service';
import { GlobalRef } from './services/client-side.globals.service';
import { AppriseService } from './services/apprise.service';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './components/loader/loader.service';

// import { GlobalRef } from '../../_services/internal/client-side.globals.service';
// import { AppriseService } from '../../_services/internal/apprise.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule],
    declarations: [LoaderComponent],
    providers: [coreHTTP, BeamService, GlobalRef, AppriseService, LoaderService],
    exports: [LoaderComponent]
    //exports: [AuthenticateModule]
})

export class AppCommonModule { }
