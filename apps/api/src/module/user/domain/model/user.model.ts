export class User {
  readonly id: string;

  constructor(args: { id: string }) {
    this.id = args.id;
  }
}
