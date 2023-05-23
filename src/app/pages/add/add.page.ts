import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ItemList } from 'src/app/models/item-list.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AddPage implements OnInit {
  list: List;
  nombreItem = '';

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get('listId');
    // console.log(listaId);

    this.list = this.tasksService.obtenerLista(listaId);
    // console.log(this.list);
  }

  ngOnInit() {}

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ItemList(this.nombreItem);
    this.list.items.push(nuevoItem);

    this.nombreItem = '';
    this.tasksService.saveStorage();
  }

  cambioCheck(item: ItemList) {
    const pendientes = this.list.items.filter(
      (itemData) => !itemData.completed
    ).length;

    if (pendientes === 0) {
      this.list.completedIn = new Date();
      this.list.completed = true;
    } else {
      this.list.completedIn = null;
      this.list.completed = false;
    }

    this.tasksService.saveStorage();

    // console.log(this.tasksService.list);
  }

  borrar(i: number) {
    this.list.items.splice(i, 1);
    this.tasksService.saveStorage();
  }
}
