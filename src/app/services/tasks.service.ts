import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  list: List[] = [];

  constructor() {
    this.loadStorage();
    // const list1 = new List('Recolectar la gemas del infinito');
    // const list2 = new List('Heroes a desaparacer');

    // this.list.push(list1, list2);
  }

  crearLista(titulo: string) {
    const nuevaLista = new List(titulo);
    this.list.push(nuevaLista);
    this.saveStorage();

    return nuevaLista.id;
  }

  borrarLista(lista: List){
    this.list = this.list.filter(listaData => listaData.id !== lista.id);
    this.saveStorage()
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    // console.log(id);

    return this.list.find((listData) => listData.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.list = JSON.parse(localStorage.getItem('data') || '[]');
    }
  }
}
