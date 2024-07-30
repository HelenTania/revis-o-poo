class Personagem{

 protected abstract emoji : 

    public nome: string
    protected acessorios : Acessorio[] = []
    private altura: number
    private elementos: string
    private velocidade: number
    public cor: string
    private nivel: number
    private evolucao: boolean
    private alcance: string
    private forca: number
    private moeda: number
    private vida: number
    private morte: boolean
    private vestimenta:string

    constructor(
            nome: string,
            altura: number,
            elementos: string,
            velocidade: number,
            ataque: number,
            cor: string,
            nivel: number,
            evolucao: boolean,
            alcance: string,
            forca: number,
            moeda: number,
            vida: number,
            morte: boolean
    )
    {
        this.nome = nome
        this.altura = altura
        this.elementos = elementos
        this.velocidade = velocidade
        this.ataque = ataque
        this.cor = cor
        this.nivel = 1
        this. evolucao = evolucao
        this.alcance = alcance
        this.forca = forca
        this. moeda = moeda
        this.vida = vida
        this.morte = morte



    }

    public equipar(vestimenta: Vestimenta):void{
        this.vestimenta = vestimenta
    }

    public getAcessorios():void{

        let contador = 0
        for(let item of  this.acessorios){
            console.log("Quais acessorios",item)
            contador ++
        }
        console.log("Quantidade de Acessório:",contador)
    }

    public setAcessorios(acessorios : Acessorio):void{
        this.acessorios.push(acessorios)
    }

    public removeAcessorios(): Acessorio | null{
        let acessorio  =  this.acessorios.pop()
        if(acessorio) return acessorio
        return null
    }

     //métodos acessores + - #
     public getNivel(): number{
        return this.nivel
    }

    public setNivel(nivel:number){
        this.nivel += nivel
    }

    public getEvolucao(): boolean{
        return this.evolucao
    }

    public setAlcance(alcance:string): void{
        this.alcance = alcance
    }


     atacar(persona: Personagem) : void{
        personagem.perderVida(this.forca)
        console.log(`${this.emoji} ${this.nome} está atacando... ${this.forca}`)
        this.moeda += personagem.dano()
     }

    private perderVida(forcaAtaque: number): number {
      return  this.vida -= forcaAtaque

     }

    private dano():number{
        if(this.vida >){
            console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`)
            return 0
        } else{
            this.morte()
            return Calcular.geraValor(100)
        }
   }

   private vitoria() {
    if(this.atacando += true){
        console.log(this.nome,"Vitória")
    }
    else{
        console.log(this.nome,"Derrota")
    }
  }


    abstract correr():void

    abstract getEmoji():void

    abstract morte(): void



    andar(){
        console.log("andando!!!")
    }

    voar(){
        console.log("voando!!!")
    }

   
}
class Calcular{

    public static get.
}
  