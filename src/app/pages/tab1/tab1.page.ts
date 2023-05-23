import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { TasksService } from 'src/app/services/tasks.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, ComponentsModule],
})
export class Tab1Page {
  constructor(
    public tasksService: TasksService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async addList() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          // handler: () => {
          //   console.log('Cancelar');
          // }
        },
        {
          text: 'Crear',
          handler: (data) => {
            // console.log(data);
            if (data.titulo.length === 0) {
              return;
            }

            const listId = this.tasksService.crearLista(data.titulo);

            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          },
        },
      ],
    });

    alert.present();
  }
}
