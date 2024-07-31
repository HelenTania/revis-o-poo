
 abstract class Personagem {

    protected abstract emoji : string
    private vestimenta: Vestimenta

 

    public nome: string
    //protected acessorios : Acessorio[] = []
    private altura: number
    private elementos: string
    private velocidade: number
    private ataque: number
    private cor: string
    private nivel: number
    private evolucao: boolean
    private alcance: string
    private forca: number
    private moeda: number
    private vida: number
    private atacando: boolean

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
            vestimenta:Vestimenta,
            vida: number,
            atacando: boolean
    )
    {
        this.nome = nome
       // this.acessorios
        this.altura = altura
        this.elementos = elementos
        this.velocidade = velocidade
        this.ataque = ataque
        this.cor = cor
        this.nivel = 1
        this.evolucao = evolucao
        this.alcance = alcance
        this.forca = forca
        this.moeda = moeda
        this.vestimenta = vestimenta
        this.vida = vida
        this.atacando = atacando
    }

    public equipar(vestimenta: Vestimenta):void{
        this.vestimenta = vestimenta
    }
   public getAltura(): number{
     return this.altura
   }

    /*public getAcessorios():void{

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

    //public removeAcessorios(): Acessorio | null{
        let acessorio  =  this.acessorios.pop()
        if(acessorio) return acessorio
        return null
    }*/

     //metodos acessores + - #

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


     atacar(personagem: Personagem) : void{
        personagem.perderVida(this.forca)
        console.log(`${this.emoji} ${this.nome} está atacando... ${this.forca}`)
        this.moeda += personagem.dano()
     }

    private perderVida(forcaAtaque: number): number {
      return  this.vida -= forcaAtaque

     }

    private dano (): number{
        if(this.vida > 0){
            console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`)
            return 0
        } else{
            this.morte()
            return Calcular.geraValor(100)
        }
   }

   vitoria() {
    if(this.atacando){
        console.log(this.nome,"Vitória")
    }
  }


    abstract correr() :void

    abstract getEmoji(): void

    abstract morte(): void



    andar(){
        console.log("andando!!!")
    }

    voar(){
        console.log("voando!!!")
    }
 }
   class Calcular{

    static geraValor(valor:number): number{

        let numero: number = Math.floor(Math.random() * valor)
           return numero
    }
   }
   
   class Vestimenta{

     armadura: string

     constructor(

        armadura:string
     ){
        
        this.armadura = armadura
     }

    
   }