export class Attempt {
  constructor(
    public isFull: boolean,
    private urlFullHearth: string = 'assets/coracao_cheio.png',
    private urlEmptyHearth: string = 'assets/coracao_vazio.png' ) {}

 get url() {
   if (this.isFull) {
      return this.urlFullHearth;
   } else {
     return this.urlEmptyHearth;
   }
 }
}
