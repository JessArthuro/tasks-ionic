import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { TasksService } from 'src/app/services/tasks.service';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ComponentsModule]
})
export class Tab2Page {
  constructor(public tasksService: TasksService) {}

}
