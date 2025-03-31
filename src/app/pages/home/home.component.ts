import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/organisms/header/header.component";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { 



}
