import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: List[], completada: boolean = true): List[] {
    return listas.filter(lista => lista.completed === completada);
  }

}
