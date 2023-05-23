import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TasksService } from 'src/app/services/tasks.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;

  constructor(
    public tasksService: TasksService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async editarLista(lista: List) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.title,
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            // console.log(data);
            if (data.titulo.length === 0) {
              return;
            }

            lista.title = data.titulo;
            this.tasksService.saveStorage();
            this.lista.closeSlidingItems();
          },
        },
      ],
    });

    alert.present();
  }

  listaSeleccionada(lista: List) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/add/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${lista.id}`);
    }
  }

  borrarLista(lista: List) {
    this.tasksService.borrarLista(lista);
  }
}
