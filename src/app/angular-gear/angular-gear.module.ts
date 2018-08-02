import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coreHTTP } from './services/http/coreHTTP.service'
import { HttpModule } from '@angular/http';
import { BeamService } from './services/beam/beam.service';
import { BrowserWindowService } from './services/core/browser-window.service';
import { AppriseService } from './services/apprise.service';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './components/loader/loader.service';
import { GoogleAuthService } from './services/auth/google-auth.service';

// import { GlobalRef } from '../../_services/internal/client-side.globals.service';
// import { AppriseService } from '../../_services/internal/apprise.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule],
    declarations: [LoaderComponent],
    providers: [coreHTTP, BeamService, BrowserWindowService, AppriseService, LoaderService, GoogleAuthService],
    exports: [LoaderComponent]
    //exports: [AuthenticateModule]
})

export class AngularGearModule {

    static forRoot(config: GearConfig): ModuleWithProviders {
        // User config get logged here
        console.log(config);
        return {
            ngModule: AngularGearModule,
            providers: [coreHTTP, BeamService, BrowserWindowService, AppriseService, LoaderService, GoogleAuthService]
        };
    }
}


export interface GearConfig {
    GOOGLE_AUTH_KEY: string,
}

