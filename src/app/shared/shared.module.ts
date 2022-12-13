import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from 'src/app/shared/star/star.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert_to_space_pipe/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [StarComponent, FormsModule, CommonModule, ConvertToSpacesPipe],
})
export class SharedModule {}
