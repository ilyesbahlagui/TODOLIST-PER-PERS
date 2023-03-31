export class Todo {
  constructor(
    public id?: string,
    public idUser?: string,
    public text?: string,
    public categorie?: string,
    public editable = false,
    public done = false,
  ) {}
}
