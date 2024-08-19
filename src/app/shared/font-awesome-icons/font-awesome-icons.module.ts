import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

@NgModule({
  imports: [ FontAwesomeModule ],
  exports: [ FontAwesomeModule ]
})
export class FontAwesomeIconsModule extends FontAwesomeModule {
  constructor(library: FaIconLibrary) {
    super();
    library.addIconPacks(fas, far);
  }
}
