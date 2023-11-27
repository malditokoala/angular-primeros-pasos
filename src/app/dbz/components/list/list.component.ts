import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [];
  public onDeleteCharacter(id: string): void {
    //TODO: EMITIR EL ID DEL CHARACTER
    this.OnDelete.emit(id);
    //this.characterList = this.characterList.filter((c) => c !== character);
  }
}
